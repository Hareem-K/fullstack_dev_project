import { cn } from '@/lib/utils';
import { TimelineStage } from '@/types';
import { Check } from 'lucide-react';

interface ProgressTimelineProps {
  currentStage: TimelineStage;
  className?: string;
}

const stages: { key: TimelineStage; label: string }[] = [
  { key: 'discovery', label: 'Discovery' },
  { key: 'design', label: 'Design' },
  { key: 'development', label: 'Development' },
  { key: 'testing', label: 'Testing' },
  { key: 'launch', label: 'Launch' },
  { key: 'post-launch', label: 'Post-Launch' },
];

export function ProgressTimeline({
  currentStage,
  className,
}: ProgressTimelineProps) {
  const currentIndex = stages.findIndex((s) => s.key === currentStage);

  return (
    <div className={cn('w-full', className)}>
      <div className="relative">
        <div className="absolute left-0 top-5 h-0.5 w-full bg-gray-200" />
        <div
          className="absolute left-0 top-5 h-0.5 bg-blue-600 transition-all duration-500"
          style={{
            width: `${(currentIndex / (stages.length - 1)) * 100}%`,
          }}
        />

        <div className="relative flex items-start justify-between">
          {stages.map((stage, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isFuture = index > currentIndex;

            return (
              <div key={stage.key} className="flex flex-col items-center">
                <div
                  className={cn(
                    'relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition-all duration-300',
                    {
                      'border-blue-600 bg-blue-600 text-white': isCompleted,
                      'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100':
                        isCurrent,
                      'border-gray-300 bg-white text-gray-400': isFuture,
                    }
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    'mt-2 text-center text-xs font-medium transition-colors',
                    {
                      'text-blue-600': isCompleted || isCurrent,
                      'text-gray-500': isFuture,
                    }
                  )}
                >
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
