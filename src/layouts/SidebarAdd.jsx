import CardWrapper from "../components/ui/CardWrapper";
import TimeTrackerBg from "../assets/addbg.webp";
import { Medal } from "lucide-react";
import Button from "../components/ui/Button";

const SidebarAdd = () => {
  return (
    <CardWrapper
      className={"relative text-white mt-8"}
      style={{
        backgroundImage: `url(${TimeTrackerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-lg font-semibold text-foreground mb-1">
        <Medal />
      </h2>

      <div className=" flex flex-col items-start gap-1">
        <p className="text-xl tracking-wide">
          <span className="font-semibold ">Download</span> our Mobile App
        </p>
        <p className="text-xs font-light">Get easy in another way</p>
      </div>
      {/* App Link */}
      <div className="flex justify-center mt-3">
        <Button className="bg-primary bg-none px-8 text-sm py-3">
          Download
        </Button>
      </div>
    </CardWrapper>
  );
};

export default SidebarAdd;
