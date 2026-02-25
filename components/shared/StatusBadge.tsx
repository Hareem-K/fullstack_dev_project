import { cn } from '@/lib/utils';
import { TimelineStage } from '@/types';

interface StatusBadgeProps {
  status: TimelineStage;
  className?: string;
}

const statusConfig: Record<
  TimelineStage,
  { label: string; className: string }
> = {
  discovery: {
    label: 'Discovery',
    className: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  design: {
    label: 'Design',
    className: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  development: {
    label: 'Development',
    className: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  testing: {
    label: 'Testing',
    className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
  launch: {
    label: 'Launch',
    className: 'bg-green-100 text-green-800 border-green-200',
  },
  'post-launch': {
    label: 'Post-Launch',
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
