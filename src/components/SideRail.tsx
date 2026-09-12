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
{ id: 'settings', label: 'Settings', Icon: SettingsIcon }] as const;


export type PageId = (typeof items)[number]['id'];

type SideRailProps = {
  active: PageId;
  onChange: (id: PageId) => void;
};

export function SideRail({ active, onChange }: SideRailProps) {
  return (
    <nav
      aria-label="Primary"
      className="flex w-full shrink-0 flex-row items-center rounded-panel bg-panel px-4 py-3 lg:w-[86px] lg:flex-col lg:px-0 lg:py-6">

      <div className="flex items-center gap-2 text-white">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="currentColor">
          <path d="M4 0 9 5 4 10 0 5.5z" />
          <path d="M14 0 18 5.5 14 10 9 5z" />
          <path d="M4 8 9 13 4 18 0 13.5z" />
          <path d="M14 8 18 13.5 14 18 9 13z" />
        </svg>
        <span className="hidden text-[17px] font-semibold tracking-tight sm:inline lg:inline">Sky</span>
      </div>

      <ul className="ml-auto flex flex-row items-center gap-1 sm:gap-2 lg:ml-0 lg:mt-9 lg:flex-1 lg:flex-col lg:gap-3">
        {items.map(({ id, label, Icon }, i) =>
        <li key={id} className={i === 3 ? 'lg:mt-6' : undefined}>
            <button
            type="button"
            aria-label={label}
            aria-current={active === id ? 'page' : undefined}
            onClick={() => onChange(id)}
            className={`flex h-10 w-10 items-center justify-center rounded-full outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/60 lg:h-11 lg:w-11 ${
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
        className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal outline-none transition-colors duration-150 ease-smooth hover:bg-signal/25 focus-visible:ring-2 focus-visible:ring-signal/60 lg:ml-0 lg:h-11 lg:w-11">

        <RadioIcon size={19} strokeWidth={1.7} />
      </button>
    </nav>);

}