import { ArrowUpRight, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";

const StatsCard = ({
  title,
  value,
  badge,
  trend,
  gradient = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 overflow-hidden shadow-md",
        gradient ? "bg-linear-to-b from-[#114a2b] to-[#1c613b]" : "bg-white",
        className,
      )}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between mb-5 animate-fade-up-1">
        <span
          className={cn(
            "text-white/75 text-lg font-semibold tracking-[0.01em]",
            gradient ? "text-white" : "text-black",
          )}
        >
          Total Projects
        </span>

        {/* Arrow button */}
        <button
          className={cn(
            "w-9.5 h-9.5 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg animate-fade-up-2 shrink-0",
            gradient ? "bg-white" : "bg-none shadow-none border border-black",
          )}
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Count */}
      <div className="relative animate-fade-up-3">
        <span
          id="countEl"
          className={cn(
            "text-[72px] font-semibold leading-none",
            gradient ? "text-white" : "text-black",
          )}
          style={{
            textShadow:
              gradient &&
              `
        0 20px 60px rgba(220,180,40,0.35),
        -20px 15px 40px rgba(220,180,40,0.25),
        0 10px 80px rgba(220,180,40,0.15),
        50px 10px 50px rgba(220,180,40,0.1)
      `,
          }}
        >
          24
        </span>
      </div>

      {/* Badge + trend */}
      <div
        className={cn(
          "relative flex items-center gap-2 mt-4 animate-fade-up-4 text-[#d6e362bf]",
          gradient ? "text-[#d6e362bf]" : "text-primary",
        )}
      >
        <span
          className={cn(
            "inline-flex items-center gap-1 border rounded-lg px-2 py-0.5 text-[12.5px] font-semibold ",
            gradient
              ? "bg-[rgba(200,170,50,0.08)] border-[rgba(220,190,80,0.35)]"
              : "bg-white border-secondary",
          )}
        >
          <span className="font-bold">5</span>
          <ChevronUp fill={gradient ? "#d6e362bf" : "#1a5c38"} size={14} />
        </span>

        <span
          className={cn(
            "text-normal font-light ",
            gradient && "text-shadow-xs text-shadow-yellow-300",
          )}
        >
          Increased from last month
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
