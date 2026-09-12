import React from 'react';
import { resolutions, cameraSettings } from '../data/drone';
import { useFlightSimulation } from '../hooks/useFlightSimulation';

export function CapturePanel() {
  const [selected, setSelected] = React.useState<string>(resolutions[1]);
  const { speed, height, flightTime } = useFlightSimulation();

  const telemetry = [
  { label: 'Speed', value: speed },
  { label: 'Lens', value: cameraSettings.lens },
  { label: 'Height', value: height },
  { label: 'ISO', value: cameraSettings.iso },
  { label: 'Flight time', value: flightTime },
  { label: 'Shutter', value: cameraSettings.shutter }];


  return (
    <section
      aria-label="Capture settings"
      className="flex flex-col gap-4 rounded-panel bg-panel p-4 sm:flex-row sm:gap-5 lg:flex-1">

      <div className="w-full shrink-0 rounded-2xl bg-surface p-4 sm:w-[250px]">
        <h3 className="px-2 text-[12.5px] font-medium text-muted">Resolution</h3>
        <ul className="mt-2.5 flex flex-col gap-0.5" role="listbox" aria-label="Resolution">
          {resolutions.map((res) => {
            const active = res === selected;
            return (
              <li key={res}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => setSelected(res)}
                  className={`relative w-full rounded-lg px-2 py-1.5 text-left text-[15px] outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/50 ${
                  active ? 'font-medium text-white' : 'text-white/55 hover:text-white/85'}`
                  }>
                  
                  {active &&
                  <span
                    aria-hidden="true"
                    className="absolute -left-2 top-1/2 -translate-y-1/2 text-[9px] text-white">
                    
                      ▶
                    </span>
                  }
                  {res}
                </button>
              </li>);

          })}
        </ul>
      </div>

      <dl className="grid flex-1 grid-cols-2 content-between gap-y-5 border-t border-hairline pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
        {telemetry.map((item) =>
        <div key={item.label}>
            <dt className="text-[12.5px] text-muted">{item.label}</dt>
            <dd className="mt-0.5 text-[19px] font-semibold tracking-tight tabular-nums text-white">
              {item.value}
            </dd>
          </div>
        )}
      </dl>
    </section>);

}