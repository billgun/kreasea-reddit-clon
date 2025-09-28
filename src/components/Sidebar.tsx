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
  Star,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
            <span className="text-xs font-bold text-white">r</span>
          </div>
          <span className="font-semibold">Feeds</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Home className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-gray-100">
                  <TrendingUp className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Popular</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-10 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Users className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">All</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Topics
            </span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <GamepadIcon className="h-4 w-4 text-blue-500" />
                  <span>Gaming</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Music className="h-4 w-4 text-purple-500" />
                  <span>Music</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Tv className="h-4 w-4 text-red-500" />
                  <span>Television</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Communities
            </span>
            <Plus className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" />
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-xs font-bold text-white">r</span>
                  </div>
                  <span>r/reactjs</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                    <span className="text-xs font-bold text-white">r</span>
                  </div>
                  <span>r/programming</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500">
                    <span className="text-xs font-bold text-white">r</span>
                  </div>
                  <span>r/webdev</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                    <span className="text-xs font-bold text-white">r</span>
                  </div>
                  <span>r/javascript</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <span>Reddit Premium</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="h-9 justify-start gap-3 px-3 hover:bg-gray-100">
                  <Settings className="h-4 w-4 text-gray-600" />
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
