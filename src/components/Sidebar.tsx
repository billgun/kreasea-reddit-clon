import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "~/components/ui/sidebar";
import {
  Home,
  TrendingUp,
  Users,
  GamepadIcon,
  Music,
  Tv,
  Settings,
  Plus,
  Crown,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-background">
      {/* Header */}
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-xs font-bold text-primary-foreground">r</span>
          </div>
          <span className="font-semibold text-foreground">Feeds</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Feeds */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Popular</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">All</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        {/* Topics */}
        <SidebarGroup>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Topics
            </span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <GamepadIcon className="h-4 w-4 text-primary" />
                  <span>Gaming</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Music className="h-4 w-4 text-secondary" />
                  <span>Music</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Tv className="h-4 w-4 text-destructive" />
                  <span>Television</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        {/* Communities */}
        <SidebarGroup>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Communities
            </span>
            <Plus className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-foreground" />
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-xs font-bold text-primary-foreground">
                      r
                    </span>
                  </div>
                  <span>r/reactjs</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                    <span className="text-xs font-bold text-secondary-foreground">
                      r
                    </span>
                  </div>
                  <span>r/programming</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                    <span className="text-xs font-bold text-accent-foreground">
                      r
                    </span>
                  </div>
                  <span>r/webdev</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive">
                    <span className="text-xs font-bold text-destructive-foreground">
                      r
                    </span>
                  </div>
                  <span>r/javascript</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        {/* Footer Links */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <span>Reddit Premium</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-accent hover:text-accent-foreground">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
