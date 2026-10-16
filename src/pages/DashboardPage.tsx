import { LiveFeed } from '../components/LiveFeed';
import { AircraftPanel } from '../components/AircraftPanel';
import { CapturePanel } from '../components/CapturePanel';
import { FlightPathMap } from '../components/FlightPathMap';
import { ControlPad } from '../components/ControlPad';

export function DashboardPage() {
  return (
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
  );
}
