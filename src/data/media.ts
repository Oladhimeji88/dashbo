export type MediaItem = {
  id: string;
  type: 'photo' | 'video';
  title: string;
  timestamp: string;
  size: string;
  duration?: string;
};

export const mediaItems: MediaItem[] = [
{ id: '1', type: 'video', title: 'DJI_0142.MP4', timestamp: 'Today, 10:12', size: '1.2 GB', duration: '04:23' },
{ id: '2', type: 'photo', title: 'DJI_0141.JPG', timestamp: 'Today, 10:08', size: '24.6 MB' },
{ id: '3', type: 'photo', title: 'DJI_0140.JPG', timestamp: 'Today, 10:07', size: '25.1 MB' },
{ id: '4', type: 'video', title: 'DJI_0139.MP4', timestamp: 'Today, 09:58', size: '860 MB', duration: '02:47' },
{ id: '5', type: 'photo', title: 'DJI_0138.JPG', timestamp: 'Today, 09:51', size: '23.9 MB' },
{ id: '6', type: 'photo', title: 'DJI_0137.JPG', timestamp: 'Today, 09:50', size: '24.2 MB' },
{ id: '7', type: 'video', title: 'DJI_0136.MP4', timestamp: 'Yesterday, 17:32', size: '2.1 GB', duration: '07:12' },
{ id: '8', type: 'photo', title: 'DJI_0135.JPG', timestamp: 'Yesterday, 17:20', size: '22.8 MB' },
{ id: '9', type: 'photo', title: 'DJI_0134.JPG', timestamp: 'Yesterday, 17:18', size: '23.4 MB' },
{ id: '10', type: 'video', title: 'DJI_0133.MP4', timestamp: 'Yesterday, 16:55', size: '640 MB', duration: '01:58' },
{ id: '11', type: 'photo', title: 'DJI_0132.JPG', timestamp: 'Yesterday, 16:40', size: '24.0 MB' },
{ id: '12', type: 'photo', title: 'DJI_0131.JPG', timestamp: 'Yesterday, 16:38', size: '23.7 MB' }];
