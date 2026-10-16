export type AirspaceZone = {
  id: string;
  name: string;
  distance: string;
  level: 'restricted' | 'caution' | 'advisory';
};

export const airspaceZones: AirspaceZone[] = [
{ id: '1', name: 'Millbrook Regional Airport', distance: '3.1 km NE', level: 'restricted' },
{ id: '2', name: 'National park boundary', distance: '850 m W', level: 'caution' },
{ id: '3', name: 'Power line corridor', distance: '1.4 km S', level: 'advisory' },
{ id: '4', name: 'Temporary flight zone', distance: '4.6 km NW', level: 'advisory' }];


export const levelStyles: Record<AirspaceZone['level'], { dot: string; label: string }> = {
  restricted: { dot: 'bg-rec', label: 'Restricted' },
  caution: { dot: 'bg-amber-400', label: 'Caution' },
  advisory: { dot: 'bg-signal', label: 'Advisory' }
};
