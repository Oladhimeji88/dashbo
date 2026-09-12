import React from 'react';
import { PauseIcon, PlayIcon } from 'lucide-react';
import { feedImage } from '../data/drone';

const modes = ['VIDEO', 'PHOTO'] as const;

function formatClock(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor(totalSeconds % 3600 / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

export function LiveFeed() {
  const [mode, setMode] = React.useState<(typeof modes)[number]>('VIDEO');
  const [recording, setRecording] = React.useState(true);
  const [seconds, setSeconds] = React.useState(15781);

  React.useEffect(() => {
    if (!recording) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [recording]);

  return (
    <section
      aria-label="Live camera feed"
      className="relative flex-1 overflow-hidden rounded-panel bg-black">
      
      <img
        src={feedImage}
        alt="Live aerial view of green hills and a winding stream below the drone"
        className="h-full w-full object-cover" />
      

      {/* Mode switch */}
      <div className="absolute left-5 top-5 flex items-center rounded-full bg-black/35 p-1 backdrop-blur-sm">
        {modes.map((m) =>
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          aria-pressed={mode === m}
          className={`rounded-full px-5 py-2 text-[13px] font-medium tracking-wide outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/70 ${
          mode === m ? 'bg-black text-white' : 'text-white/70 hover:text-white'}`
          }>
          
            {m}
          </button>
        )}
      </div>

      {/* Reticle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2">
        
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/85" />
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/85" />
        <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85" />
      </div>

      {/* Recording cluster */}
      <div className="absolute bottom-5 right-5 w-[190px] rounded-2xl bg-black/25 p-3 backdrop-blur-md">
        <div className="flex items-center justify-between px-1 text-[13px] text-white">
          <span className="flex items-center gap-2 font-medium tracking-wide">
            <span
              className={`h-2 w-2 rounded-full bg-rec ${recording ? 'animate-pulse' : 'opacity-40'}`} />
            
            REC
          </span>
          <span className="tabular-nums text-white/90">{formatClock(seconds)}</span>
        </div>
        <button
          type="button"
          onClick={() => setRecording((r) => !r)}
          aria-label={recording ? 'Pause recording' : 'Resume recording'}
          className="mt-3 flex h-11 w-full items-center justify-center rounded-xl bg-white/15 text-white outline-none transition-colors duration-150 ease-smooth hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/70">
          
          {recording ?
          <PauseIcon size={18} strokeWidth={1.8} /> :

          <PlayIcon size={18} strokeWidth={1.8} />
          }
        </button>
      </div>
    </section>);

}