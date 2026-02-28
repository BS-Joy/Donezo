import { Plus } from "lucide-react";
import Button from "../ui/Button";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <div>
        <h1 className="text-2xl lg:text-4xl mb-2 font-semibold">Dashboard</h1>
        <p className="font-extralight text-secondary">
          Plan, prioritize, and manage your products with ease
        </p>
      </div>

      {/* header action buttons */}
      <div className="flex justify-between mt-4 md:mt-0 items-center">
        <Button className="px-6 py-3 flex items-center justify-between gap-3">
          <Plus /> New Product
        </Button>
        <Button fill={false} className="ml-2 py-3 px-8">
          Import Data
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
