import React from 'react';

type CompassProps = {
  heading: number;
  headingLabel: string;
};

const degreeLabels = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export function Compass({ heading, headingLabel }: CompassProps) {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);

  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[13px] font-semibold text-rec">
        N
      </span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[13px] font-medium text-muted">
        S
      </span>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[13px] font-medium text-muted">
        W
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] font-medium text-muted">
        E
      </span>

      <svg
        viewBox="0 0 200 200"
        className="mx-auto block w-[calc(100%-44px)]"
        role="img"
        aria-label={`Heading ${heading} degrees, ${headingLabel}`}>
        
        <circle cx="100" cy="100" r="98" fill="#2b2b2b" />

        <g stroke="#7d7d7d">
          {ticks.map((deg) => {
            const major = deg % 30 === 0;
            const r1 = 98;
            const r2 = major ? 86 : 92;
            const rad = (deg - 90) * Math.PI / 180;
            return (
              <line
                key={deg}
                x1={100 + r1 * Math.cos(rad)}
                y1={100 + r1 * Math.sin(rad)}
                x2={100 + r2 * Math.cos(rad)}
                y2={100 + r2 * Math.sin(rad)}
                strokeWidth={major ? 1.4 : 0.8}
                opacity={major ? 0.95 : 0.5} />);


          })}
        </g>

        <g fill="#9a9a9a" fontSize="9" fontWeight="500">
          {degreeLabels.map((deg) => {
            const rad = (deg - 90) * Math.PI / 180;
            const x = 100 + 74 * Math.cos(rad);
            const y = 100 + 74 * Math.sin(rad);
            return (
              <text
                key={deg}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${deg} ${x} ${y})`}>
                
                {deg}°
              </text>);

          })}
        </g>

        <g
          style={{
            transform: `rotate(${heading}deg)`,
            transformOrigin: '100px 100px',
            transition: 'transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'
          }}>
          
          <path d="M100 44 L108 60 L92 60 Z" fill="#ffffff" />
        </g>

        <circle cx="100" cy="100" r="46" fill="#1f1f1f" />
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="17"
          fontWeight="500">
          
          {heading}°
        </text>
        <text x="100" y="112" textAnchor="middle" fill="#8c8c8c" fontSize="12">
          {headingLabel}
        </text>
      </svg>
    </div>);

}