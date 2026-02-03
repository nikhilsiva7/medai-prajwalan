import { Database, Mic, Globe, Activity, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  icon: React.ElementType;
  status: "connected" | "syncing" | "disconnected";
}

const services: Service[] = [
  { id: "imaging", name: "Medical Imaging DB", icon: Database, status: "connected" },
  { id: "voice", name: "Voice Recognition", icon: Mic, status: "connected" },
  { id: "translation", name: "Translation API", icon: Globe, status: "syncing" },
  { id: "fitness", name: "Fitness Tracking", icon: Activity, status: "connected" },
];

export const OrchestrationStatus = () => {
  return (
    <div className="p-4 rounded-xl border border-border bg-card/50">
      <div className="flex items-center gap-2 mb-4">
        <Workflow className="h-4 w-4 text-primary" />
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Orchestration Engine
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30"
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{service.name}</p>
              </div>
              <div
                className={cn(
                  "h-2 w-2 rounded-full flex-shrink-0",
                  service.status === "connected" && "bg-success",
                  service.status === "syncing" && "bg-accent animate-pulse",
                  service.status === "disconnected" && "bg-destructive"
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
