import React from 'react';
import {
  HomeIcon,
  ImageIcon,
  GlobeIcon,
  BellIcon,
  MonitorIcon,
  SettingsIcon,
  RadioIcon } from
'lucide-react';

const items = [
{ id: 'home', label: 'Flight home', Icon: HomeIcon },
{ id: 'media', label: 'Media library', Icon: ImageIcon },
{ id: 'map', label: 'Airspace map', Icon: GlobeIcon },
{ id: 'alerts', label: 'Alerts', Icon: BellIcon },
{ id: 'displays', label: 'Displays', Icon: MonitorIcon },
{ id: 'settings', label: 'Settings', Icon: SettingsIcon }];


export function SideRail() {
  const [active, setActive] = React.useState('home');

  return (
    <nav
      aria-label="Primary"
      className="flex w-[86px] shrink-0 flex-col items-center rounded-panel bg-panel py-6">
      
      <div className="flex items-center gap-2 text-white">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
          <path d="M4 0 9 5 4 10 0 5.5z" />
          <path d="M14 0 18 5.5 14 10 9 5z" />
          <path d="M4 8 9 13 4 18 0 13.5z" />
          <path d="M14 8 18 13.5 14 18 9 13z" />
        </svg>
        <span className="text-[17px] font-semibold tracking-tight">Sky</span>
      </div>

      <ul className="mt-9 flex flex-1 flex-col items-center gap-3">
        {items.map(({ id, label, Icon }, i) =>
        <li key={id} className={i === 3 ? 'mt-6' : undefined}>
            <button
            type="button"
            aria-label={label}
            aria-current={active === id ? 'page' : undefined}
            onClick={() => setActive(id)}
            className={`flex h-11 w-11 items-center justify-center rounded-full outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/60 ${
            active === id ?
            'bg-raised text-white' :
            'text-muted hover:bg-surface hover:text-white'}`
            }>
            
              <Icon size={19} strokeWidth={1.5} />
            </button>
          </li>
        )}
      </ul>

      <button
        type="button"
        aria-label="Signal link active"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/15 text-signal outline-none transition-colors duration-150 ease-smooth hover:bg-signal/25 focus-visible:ring-2 focus-visible:ring-signal/60">
        
        <RadioIcon size={19} strokeWidth={1.7} />
      </button>
    </nav>);

}