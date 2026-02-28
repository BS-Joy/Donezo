import { Plus, Video } from "lucide-react";
import CardWrapper from "../ui/CardWrapper";
import AnalysicsCard from "./analysiscard";
import Button from "../ui/Button";

const projects = [
  {
    title: "Develop API Endpoints",
    date: "Nov 26, 2024",
    icon: "bg-blue-100 text-blue-600",
  },
  {
    title: "Onboarding Flow",
    date: "Nov 28, 2024",
    icon: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Build Dashboard",
    date: "Nov 30, 2024",
    icon: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Optimize Page Load",
    date: "Dec 5, 2024",
    icon: "bg-amber-100 text-amber-600",
  },
  {
    title: "Cross-Browser Testing",
    date: "Dec 6, 2024",
    icon: "bg-purple-100 text-purple-600",
  },
];

const SecondRow = () => {
  return (
    <>
      <CardWrapper className="col-span-12 md:col-span-12 lg:col-span-6 lg:row-start-4 lg:row-span-3">
        <AnalysicsCard />
      </CardWrapper>

      {/* start meeting card */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-4 lg:row-span-3">
        <h2 className="text-lg font-semibold mb-4">Reminders</h2>
        <h3 className="text-primary text-2xl font-semibold">
          Meeting with Arc Company
        </h3>
        <p className="font-extralight text-primary">
          Time: 02.00 pm - 04.00 pm
        </p>
        <Button className="w-full flex items-center mt-4 gap-3 justify-center py-4">
          <Video />
          Start Meeting
        </Button>
      </CardWrapper>

      {/* Project Card */}
      <CardWrapper className="col-span-12 md:col-span-6 lg:col-span-3 lg:row-start-4 lg:row-span-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Project</h2>

          <Button fill={false} className="flex items-center gap-2">
            <Plus size={16} />
            New
          </Button>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${project.icon}`}
              >
                <div className="w-4 h-4 rounded-sm bg-current opacity-70" />
              </div>

              <div>
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500">
                  Due date: {project.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardWrapper>
    </>
  );
};

export default SecondRow;
