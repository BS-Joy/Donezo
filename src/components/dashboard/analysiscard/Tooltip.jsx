export default function Tooltip({ x, y, value, targetY }) {
  return (
    <g>
      <rect
        x={x - 26}
        y={y - 14}
        width={52}
        height={20}
        rx={10}
        fill="white"
        stroke="#d1fae5"
        strokeWidth="1.5"
        filter="url(#shadow)"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill="#166534"
      >
        {value.toLocaleString()}
      </text>
      <circle cx={x} cy={y + 9} r={2.5} fill="#86efac" />
      <line
        x1={x}
        y1={y + 11}
        x2={x}
        y2={targetY}
        stroke="#86efac"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </g>
  );
}
