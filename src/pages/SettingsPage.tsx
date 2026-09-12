import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { settingSections } from '../data/settings';

export function SettingsPage() {
  const [values, setValues] = React.useState<Record<string, string>>(
    () => Object.fromEntries(settingSections.flatMap((s) => s.rows.map((r) => [r.id, r.value])))
  );

  const cycle = (id: string, options: string[]) => {
    setValues((v) => {
      const next = options[(options.indexOf(v[id]) + 1) % options.length];
      return { ...v, [id]: next };
    });
  };

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto rounded-panel bg-panel p-4 sm:p-5">
      <h1 className="text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">Settings</h1>

      <div className="flex flex-col gap-5">
        {settingSections.map((section) =>
        <section key={section.id}>
            <h2 className="px-1 text-[12.5px] font-medium uppercase tracking-widest text-muted">
              {section.title}
            </h2>
            <div className="mt-2 overflow-hidden rounded-2xl bg-surface">
              {section.rows.map((row, i) =>
            <button
              key={row.id}
              type="button"
              onClick={() => cycle(row.id, row.options)}
              disabled={row.options.length < 2}
              className={`flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left outline-none transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/50 ${
              row.options.length > 1 ? 'hover:bg-raised/60' : 'cursor-default'} ${
              i !== 0 ? 'border-t border-hairline' : ''}`
              }>

                  <span className="text-[14px] text-white/90">{row.label}</span>
                  <span className="flex items-center gap-1.5 text-[13.5px] text-muted">
                    {values[row.id]}
                    {row.options.length > 1 &&
                <ChevronRightIcon size={14} strokeWidth={2} className="text-dim" />
                }
                  </span>
                </button>
            )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
