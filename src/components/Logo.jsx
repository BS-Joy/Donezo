import { CircleEqual } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <CircleEqual size={50} color="#227d53" />
        <span className="text-3xl text-black font-semibold tracking-wide uppercase">
          Donezo
        </span>
      </div>
    </div>
  );
};

export default Logo;
