import React from 'react';
import { SideRail } from './components/SideRail';
import { LiveFeed } from './components/LiveFeed';
import { AircraftPanel } from './components/AircraftPanel';
import { CapturePanel } from './components/CapturePanel';
import { FlightPathMap } from './components/FlightPathMap';
import { ControlPad } from './components/ControlPad';

export function App() {
  return (
    <div className="h-full min-h-screen w-full bg-[#141414] p-4 font-sans text-white">
      <main className="mx-auto flex h-full min-h-[760px] max-w-[1600px] gap-4 rounded-[26px] bg-shell p-4">
        <SideRail />

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex min-h-0 flex-1 gap-4">
            <LiveFeed />
            <AircraftPanel />
          </div>

          <div className="flex h-[300px] shrink-0 gap-4">
            <CapturePanel />
            <FlightPathMap />
            <ControlPad />
          </div>
        </div>
      </main>
    </div>);

}