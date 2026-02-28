import { cn } from "../../lib/utils";

const Button = ({ children, fill = true, className }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full cursor-pointer",
        fill
          ? "bg-linear-to-br from-primary to-[#2b9058] hover:bg-linear-to-tl text-white"
          : "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
