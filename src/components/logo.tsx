import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 text-primary"
      >
        <path d="M4 4h3v16H4V4zm6 0h3v16h-3V4zm6 0h3v16h-3V4z" />
      </svg>
      <div className="flex flex-col">
        <span className="font-headline text-xl font-bold leading-none text-white">SAHASRA</span>
        <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400">ALGO</span>
      </div>
    </div>
  );
}
