import React from 'react';

export function FlightPathMap() {
  return (
    <section
      aria-label="Flight path"
      className="w-full shrink-0 rounded-panel bg-panel p-4 lg:w-[340px]">

      <div className="relative h-[220px] overflow-hidden rounded-2xl bg-surface lg:h-full">
        <svg
          viewBox="0 0 340 260"
          className="h-full w-full"
          role="img"
          aria-label="Map of the flight route with the drone's current position"
          preserveAspectRatio="xMidYMid slice">
          
          {/* grid */}
          <g stroke="#333333" strokeWidth="1">
            <line x1="100" y1="0" x2="100" y2="260" />
            <line x1="200" y1="0" x2="200" y2="260" />
            <line x1="285" y1="0" x2="285" y2="260" />
          </g>

          {/* landmass */}
          <path
            d="M0 150 C30 132 58 158 84 148 C104 141 118 122 146 128 C176 134 190 118 214 126 C240 134 262 120 290 130 C312 138 330 132 340 126 L340 175 C316 168 292 182 266 174 C240 166 214 178 188 170 C160 162 138 176 112 168 C86 160 44 178 0 186 Z"
            fill="#3a3a3a" />
          
          <path
            d="M18 208 C56 196 92 214 130 206 C162 199 196 212 232 204 C266 197 306 210 340 202 L340 240 C300 248 262 236 226 244 C190 252 152 240 116 246 C78 252 44 240 18 244 Z"
            fill="#333333" />
          

          {/* route */}
          <path
            d="M110 96 C150 74 206 82 214 112 C222 142 176 152 154 138 C126 120 128 162 150 178 C170 192 192 190 204 196"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            strokeLinecap="round" />
          

          {/* launch point */}
          <circle cx="110" cy="96" r="4.5" fill="#8c8c8c" />

          {/* drone marker */}
          <g transform="translate(204 196)">
            <rect
              x="-11"
              y="-11"
              width="22"
              height="22"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeDasharray="4 3" />
            
            <path d="M-5 -7 L7 0 L-5 7 Z" fill="#ffffff" transform="rotate(160)" />
          </g>
        </svg>

        <div className="pointer-events-none absolute bottom-3 left-4 text-[11px] font-medium uppercase tracking-widest text-white/45">
          Route · 2.4 km
        </div>
      </div>
    </section>);

}