import React from 'react';
import { CameraIcon, VideoIcon, PlayIcon } from 'lucide-react';
import { mediaItems } from '../data/media';

const filters = ['All', 'Photos', 'Videos'] as const;

export function MediaLibraryPage() {
  const [filter, setFilter] = React.useState<(typeof filters)[number]>('All');

  const items = mediaItems.filter((item) => {
    if (filter === 'Photos') return item.type === 'photo';
    if (filter === 'Videos') return item.type === 'video';
    return true;
  });

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-panel bg-panel p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">
            Media library
          </h1>
          <p className="mt-1 text-[12.5px] text-muted">
            {items.length} item{items.length === 1 ? '' : 's'} captured this flight session.
          </p>
        </div>

        <div className="flex items-center gap-1 self-start rounded-full bg-surface p-1">
          {filters.map((f) =>
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wide outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/50 ${
            filter === f ? 'bg-raised text-white' : 'text-muted hover:text-white'}`
            }>

              {f}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
        {items.map((item) =>
        <button
          key={item.id}
          type="button"
          className="group flex flex-col overflow-hidden rounded-2xl bg-surface text-left outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-white/50">

            <div className="relative flex aspect-square items-center justify-center bg-raised">
              {item.type === 'video' ?
            <VideoIcon size={26} strokeWidth={1.5} className="text-muted transition-colors duration-150 group-hover:text-white" /> :

            <CameraIcon size={26} strokeWidth={1.5} className="text-muted transition-colors duration-150 group-hover:text-white" />
            }
              {item.type === 'video' &&
            <>
                  <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[10.5px] font-medium tabular-nums text-white/90">
                    {item.duration}
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <PlayIcon size={14} strokeWidth={2} className="translate-x-[1px] text-white" />
                  </span>
                </>
            }
            </div>
            <div className="px-3 py-2.5">
              <p className="truncate text-[13px] font-medium text-white">{item.title}</p>
              <p className="mt-0.5 text-[11.5px] text-muted">
                {item.timestamp} · {item.size}
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
