import React from 'react';
import { displayOptions } from '../data/displays';

function Toggle({ on, onChange, label }: {on: boolean;onChange: () => void;label: string;}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/60 ${
      on ? 'bg-signal' : 'bg-raised'}`
      }>

      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-150 ease-smooth ${
        on ? 'translate-x-[22px]' : 'translate-x-0.5'}`
        } />

    </button>);

}

export function DisplaysPage() {
  const [state, setState] = React.useState<Record<string, boolean>>(
    () => Object.fromEntries(displayOptions.map((o) => [o.id, o.defaultOn]))
  );

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-panel bg-panel p-4 sm:p-5">
      <div>
        <h1 className="text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">Displays</h1>
        <p className="mt-1 text-[12.5px] text-muted">Choose what appears as an overlay on the live feed.</p>
      </div>

      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {displayOptions.map((option) =>
        <li
          key={option.id}
          className="flex items-center justify-between gap-4 rounded-2xl bg-surface px-4 py-3.5">

            <div className="min-w-0">
              <p className="text-[14px] font-medium text-white">{option.label}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted">{option.description}</p>
            </div>
            <Toggle
            label={option.label}
            on={state[option.id]}
            onChange={() =>
            setState((s) => ({ ...s, [option.id]: !s[option.id] }))
            } />

          </li>
        )}
      </ul>
    </div>
  );
}
