import { ImageIcon, MessageSquare, HelpCircle, AlertCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: string;
  name: string;
  icon: React.ElementType;
  status: "complete" | "processing" | "pending";
  progress?: number;
}

const modules: Module[] = [
  { id: "image", name: "Image Analysis", icon: ImageIcon, status: "complete", progress: 100 },
  { id: "nlp", name: "NLP Explanation", icon: MessageSquare, status: "processing", progress: 67 },
  { id: "xai", name: "Explainable AI", icon: HelpCircle, status: "processing", progress: 45 },
  { id: "risk", name: "Risk/Anomaly", icon: AlertCircle, status: "pending", progress: 0 },
];

interface ProcessingModulesProps {
  isAnalyzing: boolean;
}

export const ProcessingModules = ({ isAnalyzing }: ProcessingModulesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Settings className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Processing Modules</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <div
              key={module.id}
              className={cn(
                "p-4 rounded-xl border bg-card transition-all duration-300",
                module.status === "complete" && "border-success/50",
                module.status === "processing" && "border-accent/50",
                module.status === "pending" && "border-border opacity-60"
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center",
                    module.status === "complete" && "bg-success/20",
                    module.status === "processing" && "bg-accent/20",
                    module.status === "pending" && "bg-muted"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      module.status === "complete" && "text-success",
                      module.status === "processing" && "text-accent",
                      module.status === "pending" && "text-muted-foreground"
                    )}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{module.name}</p>
                  <p
                    className={cn(
                      "text-xs capitalize",
                      module.status === "complete" && "text-success",
                      module.status === "processing" && "text-accent",
                      module.status === "pending" && "text-muted-foreground"
                    )}
                  >
                    {module.status}
                  </p>
                </div>
              </div>

              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-1000",
                    module.status === "complete" && "bg-success",
                    module.status === "processing" && "bg-accent animate-pulse",
                    module.status === "pending" && "bg-muted-foreground"
                  )}
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
