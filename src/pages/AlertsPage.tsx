import React from 'react';
import { AlertTriangleIcon, InfoIcon, ZapIcon } from 'lucide-react';
import { alerts, severityStyles, type Alert } from '../data/alerts';

const icons: Record<Alert['severity'], React.ReactNode> = {
  critical: <ZapIcon size={16} strokeWidth={2} />,
  warning: <AlertTriangleIcon size={16} strokeWidth={2} />,
  info: <InfoIcon size={16} strokeWidth={2} />
};

export function AlertsPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-panel bg-panel p-4 sm:p-5">
      <div>
        <h1 className="text-[20px] font-semibold tracking-tight text-white sm:text-[22px]">Alerts</h1>
        <p className="mt-1 text-[12.5px] text-muted">
          {alerts.length} notifications from this flight session.
        </p>
      </div>

      <ul className="flex flex-col gap-2.5 overflow-y-auto">
        {alerts.map((alert) =>
        <li
          key={alert.id}
          className="flex gap-3 rounded-2xl bg-surface p-3.5 sm:p-4">

            <span className={`w-1 shrink-0 rounded-full ${severityStyles[alert.severity].bar}`} />
            <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${severityStyles[alert.severity].badge}`}>

              {icons[alert.severity]}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <p className="text-[14px] font-medium text-white">{alert.title}</p>
                <span className="shrink-0 text-[11.5px] text-muted">{alert.timestamp}</span>
              </div>
              <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{alert.description}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
