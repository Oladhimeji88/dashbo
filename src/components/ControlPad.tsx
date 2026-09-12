import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type Direction = 'up' | 'down' | 'left' | 'right';

const arrows: Record<Direction, React.ReactNode> = {
  up: <ChevronUpIcon size={16} strokeWidth={2} />,
  down: <ChevronDownIcon size={16} strokeWidth={2} />,
  left: <ChevronLeftIcon size={16} strokeWidth={2} />,
  right: <ChevronRightIcon size={16} strokeWidth={2} />
};

const positions: Record<Direction, string> = {
  up: 'left-1/2 top-3 -translate-x-1/2',
  down: 'left-1/2 bottom-3 -translate-x-1/2',
  left: 'left-3 top-1/2 -translate-y-1/2',
  right: 'right-3 top-1/2 -translate-y-1/2'
};

export function ControlPad() {
  const [held, setHeld] = React.useState<Direction | null>(null);

  return (
    <section
      aria-label="Gimbal controls"
      className="flex w-[320px] shrink-0 flex-col rounded-panel bg-panel p-4">
      
      <div className="flex items-center justify-between">
        {['AWB', 'DISP'].map((label) =>
        <button
          key={label}
          type="button"
          className="rounded-full bg-raised px-5 py-2 text-[13px] font-medium tracking-wide text-white outline-none transition-colors duration-150 ease-smooth hover:bg-hairline focus-visible:ring-2 focus-visible:ring-white/60">
          
            {label}
          </button>
        )}
      </div>

      <div className="relative mx-auto mt-4 h-[172px] w-[236px]">
        {/* cross plate */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-raised"
          style={{
            clipPath:
            'polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)',
            borderRadius: '18px'
          }} />
        
        {(Object.keys(arrows) as Direction[]).map((dir) =>
        <button
          key={dir}
          type="button"
          aria-label={`Pan ${dir}`}
          onPointerDown={() => setHeld(dir)}
          onPointerUp={() => setHeld(null)}
          onPointerLeave={() => setHeld(null)}
          className={`absolute flex h-9 w-9 items-center justify-center rounded-full outline-none transition-colors duration-100 ease-smooth focus-visible:ring-2 focus-visible:ring-white/60 ${positions[dir]} ${
          held === dir ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'}`
          }>
          
            {arrows[dir]}
          </button>
        )}
        <button
          type="button"
          aria-label="Re-center gimbal"
          className="absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#262626] outline-none ring-1 ring-inset ring-white/5 transition-colors duration-150 ease-smooth hover:bg-[#2e2e2e] focus-visible:ring-2 focus-visible:ring-white/60" />
        
      </div>
    </section>);

}