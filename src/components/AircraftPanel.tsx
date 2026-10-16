import React from 'react';
import { Compass } from './Compass';
import { aircraft } from '../data/drone';
import { useFlightSimulation } from '../hooks/useFlightSimulation';

export function AircraftPanel() {
  const { battery, remaining, heading, headingLabel } = useFlightSimulation();
  const low = battery < 20;

  return (
    <aside
      aria-label="Aircraft status"
      className="flex w-full shrink-0 flex-col rounded-panel bg-panel p-5 lg:w-[320px]">

      <h2 className="text-[22px] font-semibold tracking-tight text-white">{aircraft.name}</h2>
      <p className="mt-1 max-w-[240px] text-[12.5px] leading-snug text-muted">
        {aircraft.tagline}
      </p>

      <div className="mt-4 hidden overflow-hidden rounded-2xl bg-surface sm:block">
        <img
          src={aircraft.image}
          alt={`${aircraft.name} quadcopter`}
          className="h-[150px] w-full object-contain" />

      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[16px] font-semibold text-white">Battery status</h3>
          <span className={`text-[16px] font-semibold ${low ? 'text-rec' : 'text-signal'}`}>
            {battery}%
          </span>
        </div>
        <div className="mt-1.5 flex items-baseline justify-between gap-3 text-[12.5px]">
          <span className="text-muted">Remaining flight time:</span>
          <span className="text-white/90">{remaining}</span>
        </div>
        <div
          className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface"
          role="progressbar"
          aria-valuenow={battery}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Battery charge">

          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear ${low ? 'bg-rec' : 'bg-signal'}`}
            style={{ width: `${battery}%` }} />

        </div>
      </div>

      <div className="mt-auto pt-6">
        <Compass heading={heading} headingLabel={headingLabel} />
      </div>
    </aside>);

}