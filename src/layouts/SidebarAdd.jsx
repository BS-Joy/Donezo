import React from "react";
import CardWrapper from "../components/ui/CardWrapper";
import TimeTrackerBg from "../assets/addbg.webp";

const SidebarAdd = () => {
  return (
    <CardWrapper
      style={{
        backgroundImage: `url(${TimeTrackerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
  );
};

export default SidebarAdd;
