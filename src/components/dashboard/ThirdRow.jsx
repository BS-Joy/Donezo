import { Plus } from "lucide-react";
import Button from "../ui/Button";
import CardWrapper from "../ui/CardWrapper";
import GaugeChart from "./GaugeChart";
import TimeTrackerBg from "../../assets/timetrbg.webp";

const ThirdRow = ({ users }) => {
  return (
    <>
      {/* users list */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-start-7 lg:row-span-3 max-h-112.5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Team</h2>

          <Button fill={false} className="flex items-center gap-2">
            <Plus size={16} />
            Add Member
          </Button>
        </div>

        <div className="space-y-5">
          {users.map((user) => {
            // Generate avatar initials
            const initials = user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            // Status colors
            const statusColor =
              user.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800";

            return (
              <div
                key={user.id}
                className="flex items-center justify-between p-3"
              >
                {/* Left side */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 font-semibold">
                    {initials}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-medium text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-500">Email: {user.email}</p>
                    <p className="text-sm text-gray-500">
                      Joined: {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}
                >
                  {user.status}
                </span>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      {/* progress chart */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-4 p-8 lg:row-start-7 lg:row-span-3">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Project Progress
        </h2>

        <div className="flex flex-col items-center">
          <GaugeChart />

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
              <span className="text-muted-foreground">Conversions</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary inline-block" />
              <span className="text-muted-foreground">Clicks</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="12" height="12" className="inline-block">
                <defs>
                  <pattern
                    id="hatchLegend"
                    patternUnits="userSpaceOnUse"
                    width="4"
                    height="4"
                    patternTransform="rotate(45)"
                  >
                    <rect width="4" height="4" fill="white" />
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="4"
                      stroke="#5fbd92"
                      strokeWidth="1.5"
                    />
                  </pattern>
                </defs>
                <rect width="12" height="12" rx="6" fill="url(#hatchLegend)" />
              </svg>
              <span className="text-muted-foreground">Views</span>
            </div>
          </div>
        </div>
      </CardWrapper>

      {/* time tracker */}
      <CardWrapper
        className="col-span-12 md:col-span-6 lg:col-span-3 relative text-white lg:row-start-8 lg:row-span-2"
        style={{
          backgroundImage: `url(${TimeTrackerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Time Tracker
          </h2>
        </div>

        {/* dark Overlay  */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Time */}
          <span className="text-4xl font-semibold tracking-wide">01:24:08</span>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md">
              ❚❚
            </button>

            <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md">
              ■
            </button>
          </div>
        </div>
      </CardWrapper>
    </>
  );
};

export default ThirdRow;
