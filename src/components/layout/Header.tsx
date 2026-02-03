import { Activity, Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">MedAI Diagnostics</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Healthcare Platform</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analysis</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reports</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Settings</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Dr. Smith</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
