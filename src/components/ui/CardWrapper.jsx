import React from "react";
import { cn } from "../../lib/utils";

const CardWrapper = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 overflow-hidden shadow-md bg-white",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
