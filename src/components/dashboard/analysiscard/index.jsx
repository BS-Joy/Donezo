import { useState } from "react";
import BarChart from "./BarChart";

const data = [
  { date: "2024-01-01", label: "Jan 1", views: 1234 },
  { date: "2024-01-02", label: "Jan 2", views: 1567 },
  { date: "2024-01-03", label: "Jan 3", views: 1890 },
  { date: "2024-01-04", label: "Jan 4", views: 1456 },
  { date: "2024-01-05", label: "Jan 5", views: 1789 },
  { date: "2024-01-06", label: "Jan 6", views: 0 },
  { date: "2024-01-07", label: "Jan 7", views: 0 },
];

export default function AnalysicsCard() {
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
