export type SettingRow = {
  id: string;
  label: string;
  value: string;
  options: string[];
};

export type SettingSection = {
  id: string;
  title: string;
  rows: SettingRow[];
};

export const settingSections: SettingSection[] = [
{
  id: 'aircraft',
  title: 'Aircraft',
  rows: [
  { id: 'name', label: 'Aircraft name', value: 'SkyLens X1', options: ['SkyLens X1'] },
  { id: 'units', label: 'Measurement units', value: 'Metric', options: ['Metric', 'Imperial'] },
  { id: 'rth-height', label: 'Return-to-home height', value: '60 m', options: ['30 m', '60 m', '100 m'] }]

},
{
  id: 'video',
  title: 'Video',
  rows: [
  { id: 'format', label: 'Video format', value: 'MP4', options: ['MP4', 'MOV'] },
  { id: 'framerate', label: 'Frame rate', value: '30 fps', options: ['24 fps', '30 fps', '60 fps'] },
  { id: 'color', label: 'Color profile', value: 'Standard', options: ['Standard', 'Flat', 'D-Log'] }]

},
{
  id: 'controller',
  title: 'Controller',
  rows: [
  { id: 'sticks', label: 'Stick mode', value: 'Mode 2', options: ['Mode 1', 'Mode 2'] },
  { id: 'sensitivity', label: 'Gimbal sensitivity', value: 'Medium', options: ['Low', 'Medium', 'High'] }]

}];
