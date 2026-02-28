import Tooltip from "./Tooltip";

const HATCH_ID = "hatch-pattern";

export default function PillBar({
  x,
  barWidth,
  totalHeight,
  fillRatio,
  color,
  lightColor,
  isHovered,
  tooltipValue,
  isEmpty,
  onMouseEnter,
  onMouseLeave,
}) {
  const r = barWidth / 2;
  const filledHeight = totalHeight * fillRatio;
  const emptyHeight = totalHeight - filledHeight;

  const pillPath = (h, yOffset, rounded) => {
    const x0 = x;
    const y0 = yOffset;
    const w = barWidth;
    const topR = rounded === "top" || rounded === "both" ? r : 0;
    const botR = rounded === "bottom" || rounded === "both" ? r : 0;
    return `
      M ${x0 + topR} ${y0}
      H ${x0 + w - topR}
      Q ${x0 + w} ${y0} ${x0 + w} ${y0 + topR}
      V ${y0 + h - botR}
      Q ${x0 + w} ${y0 + h} ${x0 + w - botR} ${y0 + h}
      H ${x0 + botR}
      Q ${x0} ${y0 + h} ${x0} ${y0 + h - botR}
      V ${y0 + topR}
      Q ${x0} ${y0} ${x0 + topR} ${y0}
      Z
    `;
  };

  const tooltipX = x + barWidth / 2;
  const tooltipY = emptyHeight - 18;

  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: isEmpty ? "default" : "pointer" }}
    >
      {(isEmpty ? totalHeight : emptyHeight) > r && (
        <path
          d={pillPath(
            isEmpty ? totalHeight : emptyHeight,
            0,
            isEmpty ? "both" : emptyHeight < totalHeight ? "top" : "both",
          )}
          fill={`url(#${HATCH_ID})`}
          stroke="#d1ddd1"
          strokeWidth="1"
        />
      )}
      {!isEmpty && filledHeight > r && (
        <path
          d={pillPath(
            filledHeight,
            emptyHeight,
            emptyHeight > r ? "bottom" : "both",
          )}
          fill={isHovered ? lightColor : color}
          style={{ transition: "fill 0.2s" }}
        />
      )}
      {isHovered && (
        <Tooltip
          x={tooltipX}
          y={tooltipY}
          value={tooltipValue}
          targetY={emptyHeight}
        />
      )}
    </g>
  );
}
