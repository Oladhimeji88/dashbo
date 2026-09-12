import React from 'react';
import { SideRail } from './components/SideRail';
import { LiveFeed } from './components/LiveFeed';
import { AircraftPanel } from './components/AircraftPanel';
import { CapturePanel } from './components/CapturePanel';
import { FlightPathMap } from './components/FlightPathMap';
import { ControlPad } from './components/ControlPad';

export function App() {
  return (
    <div className="min-h-screen w-full bg-[#141414] p-2.5 font-sans text-white sm:p-4">
      <main className="mx-auto flex max-w-[1600px] flex-col gap-3 rounded-[20px] bg-shell p-3 sm:gap-4 sm:rounded-[26px] sm:p-4 lg:h-full lg:min-h-[760px] lg:flex-row">
        <SideRail />

        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
          <div className="flex min-h-0 flex-col gap-3 sm:gap-4 lg:flex-1 lg:flex-row">
            <LiveFeed />
            <AircraftPanel />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 lg:h-[300px] lg:shrink-0 lg:flex-row">
            <CapturePanel />
            <FlightPathMap />
            <ControlPad />
          </div>
        </div>
      </main>
    </div>);

}