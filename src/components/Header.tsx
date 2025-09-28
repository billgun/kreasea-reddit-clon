import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Route } from "~/routes/__root";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { Search, Plus, Bell, MessageSquare, User } from "lucide-react";

export function Header() {
  const { user } = Route.useRouteContext();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-2">
        {/* Sidebar Trigger + Logo */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1 md:hidden" />
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.webp" className="h-6 w-6" />
            <span className="hidden text-xl font-bold text-black sm:inline">
              Kreasea
            </span>
          </Link>
        </div>

        {/* Search bar */}
        <div className="max-w-2xl flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search Reddit"
              className="w-full rounded-full border-gray-200 bg-gray-100 pl-10 pr-4 focus-visible:ring-2 focus-visible:ring-orange-500"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Plus className="mr-1 h-4 w-4" />
            Create
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <MessageSquare className="h-4 w-4" />
          </Button>

          {user ? (
            <>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="mr-1 h-4 w-4" />
                {user.email.split("@")[0]}
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/logout">Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-orange-500 hover:bg-orange-600"
                asChild
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
