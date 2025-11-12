import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-primary"
      >
        <path d="M4 4h3v16H4V4zm6 0h3v16h-3V4zm6 0h3v16h-3V4z" />
      </svg>
      <span className="font-headline text-lg font-bold">SAHASRA</span>
    </div>
  );
}
