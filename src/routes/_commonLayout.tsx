import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "~/components/Header";
import { AppSidebar } from "~/components/Sidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export const Route = createFileRoute("/_commonLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-background">
            <div className="mx-auto max-w-5xl px-4 py-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
