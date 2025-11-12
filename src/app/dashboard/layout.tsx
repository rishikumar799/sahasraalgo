import DashboardHeader from '@/components/dashboard-header';
import DashboardNav from '@/components/dashboard-nav';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardNav />
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
