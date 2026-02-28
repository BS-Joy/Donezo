import { useState } from "react";
import BarChart from "./BarChart";

export default function AnalysicsCard({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-black">Weekly Views</h2>
      </div>
      <BarChart
        data={data}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </div>
  );
}
