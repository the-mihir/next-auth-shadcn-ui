
import { Outlet } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Home, Settings, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {user?.name}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={logout}
                  aria-label="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1 container py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">Dev Kit</span>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
