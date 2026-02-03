import { Bot, BarChart3, Brain, AlertTriangle, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Model {
  id: string;
  name: string;
  fullName: string;
  icon: React.ElementType;
  status: "active" | "processing" | "idle";
}

const models: Model[] = [
  { id: "qml", name: "QML", fullName: "Quantum Machine Learning", icon: Hexagon, status: "active" },
  { id: "ml", name: "ML", fullName: "Machine Learning", icon: BarChart3, status: "processing" },
  { id: "dl", name: "DL", fullName: "Deep Learning", icon: Brain, status: "active" },
];

interface RiskIndicator {
  id: string;
  name: string;
  level: "low" | "medium" | "high";
  value: number;
}

const risks: RiskIndicator[] = [
  { id: "bone", name: "Bone Risk", level: "medium", value: 42 },
  { id: "necrosis", name: "Necrosis", level: "low", value: 15 },
];

interface AIModelEnsembleProps {
  isAnalyzing: boolean;
}

export const AIModelEnsemble = ({ isAnalyzing }: AIModelEnsembleProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">AI Model Ensemble</h3>
      </div>

      <div className="p-6 rounded-xl border-gradient bg-card shadow-card">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className={cn(
                  "relative p-4 rounded-lg bg-secondary/50 text-center transition-all",
                  isAnalyzing && "animate-pulse"
                )}
              >
                <div className="flex justify-center mb-2">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-lg flex items-center justify-center",
                      model.status === "active" && "bg-primary/20",
                      model.status === "processing" && "bg-accent/20",
                      model.status === "idle" && "bg-muted"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        model.status === "active" && "text-primary",
                        model.status === "processing" && "text-accent",
                        model.status === "idle" && "text-muted-foreground"
                      )}
                    />
                  </div>
                </div>
                <p className="font-semibold text-foreground">{model.name}</p>
                <p className="text-xs text-muted-foreground">{model.fullName}</p>
                <div
                  className={cn(
                    "absolute top-2 right-2 h-2 w-2 rounded-full",
                    model.status === "active" && "bg-success",
                    model.status === "processing" && "bg-accent animate-pulse",
                    model.status === "idle" && "bg-muted-foreground"
                  )}
                />
              </div>
            );
          })}
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Risk Detection</p>
          <div className="grid grid-cols-2 gap-4">
            {risks.map((risk) => (
              <div key={risk.id} className="p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle
                    className={cn(
                      "h-4 w-4",
                      risk.level === "high" && "text-destructive",
                      risk.level === "medium" && "text-accent",
                      risk.level === "low" && "text-success"
                    )}
                  />
                  <span className="text-sm font-medium text-foreground">{risk.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        risk.level === "high" && "bg-destructive",
                        risk.level === "medium" && "bg-accent",
                        risk.level === "low" && "bg-success"
                      )}
                      style={{ width: `${risk.value}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{risk.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
