import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image 
        src="https://ik.imagekit.io/7z0x3rycfi/sahasra/sahasralogo%20.png?updatedAt=1762968729621"
        alt="Sahasra Algo Logo"
        width={140}
        height={40}
        className='object-contain'
      />
    </div>
  );
}
