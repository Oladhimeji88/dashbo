export type Alert = {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
};

export const alerts: Alert[] = [
{
  id: '1',
  severity: 'critical',
  title: 'Low battery warning',
  description: 'Battery reached 20%. Return to home is recommended within 5 minutes.',
  timestamp: '2 min ago'
},
{
  id: '2',
  severity: 'warning',
  title: 'Approaching restricted airspace',
  description: 'Millbrook Regional Airport zone is 3.1 km ahead on your current heading.',
  timestamp: '8 min ago'
},
{
  id: '3',
  severity: 'info',
  title: 'GPS signal strong',
  description: '14 satellites connected. Positioning accuracy improved to ±0.5 m.',
  timestamp: '15 min ago'
},
{
  id: '4',
  severity: 'warning',
  title: 'Wind speed increasing',
  description: 'Sustained wind of 24 km/h detected. Flight stability may be affected.',
  timestamp: '22 min ago'
},
{
  id: '5',
  severity: 'info',
  title: 'Firmware up to date',
  description: 'Aircraft and controller firmware are both running version 03.02.14.10.',
  timestamp: '1 hour ago'
},
{
  id: '6',
  severity: 'critical',
  title: 'Compass calibration required',
  description: 'Magnetic interference detected near launch point. Recalibrate before takeoff.',
  timestamp: '1 hour ago'
}];


export const severityStyles: Record<Alert['severity'], { bar: string; badge: string; label: string }> = {
  critical: { bar: 'bg-rec', badge: 'bg-rec/15 text-rec', label: 'Critical' },
  warning: { bar: 'bg-amber-400', badge: 'bg-amber-400/15 text-amber-400', label: 'Warning' },
  info: { bar: 'bg-signal', badge: 'bg-signal/15 text-signal', label: 'Info' }
};
