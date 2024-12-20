
import React from 'react';
import { BaseEdge, EdgeProps } from '@xyflow/react';

export function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  // Bézier curve control points
  const controlPointX1 = sourceX;
  const controlPointY1 = sourceY + 50; // Adjusted for a smoother curve
  const controlPointX2 = targetX;
  const controlPointY2 = targetY - 50;

  const edgePath = `M${sourceX},${sourceY} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${targetX},${targetY}`;

  return (
    <>
      {/* SVG Path for Edge with Thickness */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        
        stroke="#B8860B" // Color
        strokeWidth={4}  // Thickness
        markerEnd="url(#arrowhead)" // Optional arrowhead//#708090
       />
       
      {/* Animated Circle */}
      <circle r="4" fill="#F0F8FF">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href={`#${id}`} />
        </animateMotion>
      </circle>
    </>
  );
}



