export type DisplayOption = {
  id: string;
  label: string;
  description: string;
  defaultOn: boolean;
};

export const displayOptions: DisplayOption[] = [
{ id: 'grid', label: 'Grid overlay', description: 'Rule-of-thirds composition grid on the live feed.', defaultOn: true },
{ id: 'horizon', label: 'Horizon line', description: 'Artificial horizon indicator for level flight.', defaultOn: true },
{ id: 'telemetry', label: 'Telemetry overlay', description: 'Speed, height and distance shown on the feed.', defaultOn: true },
{ id: 'histogram', label: 'Histogram', description: 'Live exposure histogram in the corner of the feed.', defaultOn: false },
{ id: 'peaking', label: 'Focus peaking', description: 'Highlight in-focus edges while shooting video.', defaultOn: false },
{ id: 'zebra', label: 'Zebra stripes', description: 'Warn on overexposed highlights above 95 IRE.', defaultOn: false }];
