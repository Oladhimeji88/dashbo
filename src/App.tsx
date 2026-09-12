import React from 'react';
import { SideRail, type PageId } from './components/SideRail';
import { DashboardPage } from './pages/DashboardPage';
import { MediaLibraryPage } from './pages/MediaLibraryPage';
import { AirspaceMapPage } from './pages/AirspaceMapPage';
import { AlertsPage } from './pages/AlertsPage';
import { DisplaysPage } from './pages/DisplaysPage';
import { SettingsPage } from './pages/SettingsPage';

const pages: Record<PageId, React.ComponentType> = {
  home: DashboardPage,
  media: MediaLibraryPage,
  map: AirspaceMapPage,
  alerts: AlertsPage,
  displays: DisplaysPage,
  settings: SettingsPage
};

export function App() {
  const [active, setActive] = React.useState<PageId>('home');
  const Page = pages[active];

  return (
    <div className="min-h-screen w-full bg-[#141414] p-2.5 font-sans text-white sm:p-4">
      <main className="mx-auto flex max-w-[1600px] flex-col gap-3 rounded-[20px] bg-shell p-3 sm:gap-4 sm:rounded-[26px] sm:p-4 lg:h-full lg:min-h-[760px] lg:flex-row">
        <SideRail active={active} onChange={setActive} />
        <Page />
      </main>
    </div>);

}
