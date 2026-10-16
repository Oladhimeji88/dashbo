import { airspaceZones, levelStyles } from '../data/airspace';

export function AirspaceMapPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4 lg:flex-row">
      <section
        aria-label="Airspace map"
        className="flex min-h-[320px] flex-1 flex-col rounded-panel bg-panel p-4 sm:p-5">

        <div className="flex items-baseline justify-between">
          <h1 className="text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            Airspace map
          </h1>
          <span className="text-[12.5px] text-muted">Radius 5 km</span>
        </div>

        <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl bg-surface">
          <svg
            viewBox="0 0 400 320"
            className="h-full w-full"
            role="img"
            aria-label="Airspace map showing restricted and caution zones around the current flight area"
            preserveAspectRatio="xMidYMid slice">

            <g stroke="#333333" strokeWidth="1">
              <line x1="100" y1="0" x2="100" y2="320" />
              <line x1="200" y1="0" x2="200" y2="320" />
              <line x1="300" y1="0" x2="300" y2="320" />
              <line x1="0" y1="80" x2="400" y2="80" />
              <line x1="0" y1="160" x2="400" y2="160" />
              <line x1="0" y1="240" x2="400" y2="240" />
            </g>

            {/* restricted zone */}
            <circle cx="300" cy="90" r="54" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1.4" strokeDasharray="5 5" />
            <text x="300" y="94" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="600">
              RESTRICTED
            </text>

            {/* caution zone */}
            <circle cx="120" cy="150" r="46" fill="#fbbf24" fillOpacity="0.1" stroke="#fbbf24" strokeWidth="1.4" strokeDasharray="5 5" />
            <text x="120" y="154" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="600">
              CAUTION
            </text>

            {/* current position */}
            <g transform="translate(200 200)">
              <circle r="30" fill="none" stroke="#4ade80" strokeWidth="1" opacity="0.4" />
              <circle r="5" fill="#4ade80" />
            </g>
            <text x="200" y="238" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="600">
              YOU
            </text>
          </svg>
        </div>
      </section>

      <aside
        aria-label="Nearby airspace zones"
        className="flex w-full shrink-0 flex-col rounded-panel bg-panel p-4 sm:p-5 lg:w-[300px]">

        <h2 className="text-[16px] font-semibold text-white">Nearby zones</h2>
        <ul className="mt-3 flex flex-col gap-2.5">
          {airspaceZones.map((zone) =>
          <li
            key={zone.id}
            className="flex items-center justify-between gap-3 rounded-xl bg-surface px-3.5 py-3">

              <div className="flex min-w-0 items-center gap-2.5">
                <span className={`h-2 w-2 shrink-0 rounded-full ${levelStyles[zone.level].dot}`} />
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-white">{zone.name}</p>
                  <p className="text-[11.5px] text-muted">{levelStyles[zone.level].label}</p>
                </div>
              </div>
              <span className="shrink-0 text-[12px] text-muted">{zone.distance}</span>
            </li>
          )}
        </ul>
      </aside>
    </div>
  );
}
