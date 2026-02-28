// components/AnalysicsCard/BarChart.js
import { useEffect, useRef, useState } from "react";
import PillBar from "./PillBar";
import HatchPattern from "./HatchPattern";

const GREEN_SHADES = [
  { fill: "#1a5c38", light: "#227d53" },
  { fill: "#227d53", light: "#5fbd92" },
  { fill: "#5fbd92", light: "#8fd4b3" },
];

const MAX_BAR_WIDTH = 60; // prevents bars from becoming too wide
const MIN_GAP = 16;
const SIDE_PADDING = 20;

export default function BarChart({ data, hoveredIndex, setHoveredIndex }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const svgHeight = 160;
  const barHeight = 120;
  const maxValue = Math.max(...data.map((d) => d.views));
  const totalBars = data.length;

  // Calculate dynamic bar width
  const availableWidth = width - SIDE_PADDING * 2;
  let barWidth = availableWidth / totalBars - MIN_GAP;

  if (barWidth > MAX_BAR_WIDTH) {
    barWidth = MAX_BAR_WIDTH;
  }

  // Calculate gap dynamically if bars are capped
  const totalBarsWidth = barWidth * totalBars;
  const remainingSpace = availableWidth - totalBarsWidth;
  const gap =
    totalBars > 1 ? Math.max(MIN_GAP, remainingSpace / (totalBars - 1)) : 0;

  return (
    <div ref={containerRef} className="w-full">
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${width} ${svgHeight}`}
        preserveAspectRatio="xMinYMin meet"
      >
        <HatchPattern />

        {data.map((d, i) => {
          const isEmpty = d.views === 0;
          const fillRatio = isEmpty ? 0 : d.views / maxValue;
          const colors = GREEN_SHADES[i % GREEN_SHADES.length];
          const xPos = SIDE_PADDING + i * (barWidth + gap);

          return (
            <PillBar
              key={d.date}
              x={xPos}
              barWidth={barWidth}
              totalHeight={barHeight}
              fillRatio={fillRatio}
              color={colors.fill}
              lightColor={colors.light}
              isHovered={hoveredIndex === i}
              tooltipValue={d.views}
              isEmpty={isEmpty}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}

        {data.map((d, i) => (
          <text
            key={d.date + "-label"}
            x={SIDE_PADDING + i * (barWidth + gap) + barWidth / 2}
            y={barHeight + 20}
            textAnchor="middle"
            fontSize="11"
            fontWeight="500"
            fill="#6b7280"
          >
            {d.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
