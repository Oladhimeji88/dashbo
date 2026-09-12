import React from 'react';

const compassPoints = [
'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];


function headingLabelFor(heading: number) {
  const index = Math.round(heading / 22.5) % 16;
  return compassPoints[index];
}

function formatMinutesRange(battery: number) {
  const total = battery * 0.28;
  const low = Math.max(1, Math.round(total - 3));
  const high = Math.round(total + 2);
  return `about ${low}–${high} min`;
}

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export type FlightSimState = {
  battery: number;
  remaining: string;
  heading: number;
  headingLabel: string;
  speed: string;
  height: string;
  flightTime: string;
  routeProgress: number;
};

const FlightSimContext = React.createContext<FlightSimState | null>(null);

export function FlightSimProvider({ children }: {children: React.ReactNode;}) {
  const [tick, setTick] = React.useState(0);
  const startRef = React.useRef({ battery: 85, heading: 320, flightSeconds: 601 });

  React.useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  const state = React.useMemo<FlightSimState>(() => {
    const battery = Math.max(6, startRef.current.battery - tick * 0.05);
    const heading = (startRef.current.heading + Math.round(6 * Math.sin(tick / 9)) + 360) % 360;
    const speed = 16 + 3 * Math.sin(tick / 8);
    const height = 74 + 6 * Math.sin(tick / 13 + 1);
    const flightSeconds = startRef.current.flightSeconds + tick;
    const routeProgress = tick % 24 / 24;

    return {
      battery: Math.round(battery),
      remaining: formatMinutesRange(battery),
      heading,
      headingLabel: headingLabelFor(heading),
      speed: `${speed.toFixed(0)} km/h`,
      height: `${height.toFixed(0)} m`,
      flightTime: formatClock(flightSeconds),
      routeProgress
    };
  }, [tick]);

  return <FlightSimContext.Provider value={state}>{children}</FlightSimContext.Provider>;
}

export function useFlightSimulation() {
  const ctx = React.useContext(FlightSimContext);
  if (!ctx) throw new Error('useFlightSimulation must be used within a FlightSimProvider');
  return ctx;
}
