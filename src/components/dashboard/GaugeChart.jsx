import React from "react";

const data = [
  { date: "2024-01-01", views: 1234, clicks: 456, conversions: 23 },
  { date: "2024-01-02", views: 1567, clicks: 523, conversions: 31 },
  { date: "2024-01-03", views: 1890, clicks: 678, conversions: 42 },
  { date: "2024-01-04", views: 1456, clicks: 534, conversions: 28 },
  { date: "2024-01-05", views: 1789, clicks: 623, conversions: 35 },
];

const GaugeChart = () => {
  const totalViews = data.reduce((s, d) => s + d.views, 0);
  const totalClicks = data.reduce((s, d) => s + d.clicks, 0);
  const totalConversions = data.reduce((s, d) => s + d.conversions, 0);

  const grandTotal = totalViews + totalClicks + totalConversions;

  const conversionsPct = totalConversions / grandTotal;
  const clicksPct = totalClicks / grandTotal;

  // ✅ Correct conversion rate (conversions / views)
  const conversionRate = Math.round((totalConversions / totalViews) * 100);

  const cx = 150;
  const cy = 150;
  const r = 110;
  const strokeWidth = 36;
  const startAngle = Math.PI;
  const totalArc = Math.PI;

  const describeArc = (startFrac, endFrac) => {
    const a1 = startAngle + totalArc * startFrac;
    const a2 = startAngle + totalArc * endFrac;
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2);
    const y2 = cy + r * Math.sin(a2);
    const largeArc = a2 - a1 > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  return (
    <svg width="300" height="180" viewBox="0 0 300 180">
      <defs>
        <pattern
          id="hatch"
          patternUnits="userSpaceOnUse"
          width="6"
          height="6"
          patternTransform="rotate(45)"
        >
          <rect width="6" height="6" fill="white" />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="6"
            stroke="#5fbd92"
            strokeWidth="2.5"
          />
        </pattern>
      </defs>

      {/* Views - background */}
      <path
        d={describeArc(0, 1)}
        fill="none"
        stroke="url(#hatch)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Clicks */}
      <path
        d={describeArc(0, conversionsPct + clicksPct)}
        fill="none"
        stroke="#1a5c38"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Conversions */}
      <path
        d={describeArc(0, conversionsPct)}
        fill="none"
        stroke="#227d53"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Center text */}
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        className="fill-foreground"
        style={{ fontSize: "48px", fontWeight: 700 }}
      >
        {conversionRate}%
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        className="fill-muted-foreground"
        style={{ fontSize: "14px", fontWeight: 500 }}
      >
        Conversion Rate
      </text>
    </svg>
  );
};

export default GaugeChart;
