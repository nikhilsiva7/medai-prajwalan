import { BookOpen, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OutputCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  type: "info" | "warning" | "success";
  action?: string;
}

const outputs: OutputCard[] = [
  {
    id: "explanations",
    title: "Explanations",
    description: "AI-generated insights about your diagnostic results with detailed medical context.",
    icon: BookOpen,
    type: "info",
    action: "View Details",
  },
  {
    id: "alerts",
    title: "Risk/Alerts",
    description: "2 potential areas of concern detected. Review recommended for bone density analysis.",
    icon: AlertTriangle,
    type: "warning",
    action: "Review Alerts",
  },
  {
    id: "recovery",
    title: "Recovery/Fitness",
    description: "Personalized recovery plan and fitness recommendations based on your health profile.",
    icon: Heart,
    type: "success",
    action: "Start Plan",
  },
];

export const OutputModules = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Output Modules</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {outputs.map((output) => {
          const Icon = output.icon;
          return (
            <div
              key={output.id}
              className={cn(
                "relative p-5 rounded-xl border bg-card overflow-hidden group hover:shadow-card transition-all duration-300",
                output.type === "info" && "border-info/30 hover:border-info/50",
                output.type === "warning" && "border-accent/30 hover:border-accent/50",
                output.type === "success" && "border-success/30 hover:border-success/50"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10",
                  output.type === "info" && "bg-info",
                  output.type === "warning" && "bg-accent",
                  output.type === "success" && "bg-success"
                )}
              />

              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-xl flex items-center justify-center",
                      output.type === "info" && "bg-info/20",
                      output.type === "warning" && "bg-accent/20",
                      output.type === "success" && "bg-success/20"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        output.type === "info" && "text-info",
                        output.type === "warning" && "text-accent",
                        output.type === "success" && "text-success"
                      )}
                    />
                  </div>
                  {output.type === "warning" && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      2
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">{output.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{output.description}</p>
                </div>

                {output.action && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-between group/btn",
                      output.type === "info" && "hover:bg-info/10 hover:text-info",
                      output.type === "warning" && "hover:bg-accent/10 hover:text-accent",
                      output.type === "success" && "hover:bg-success/10 hover:text-success"
                    )}
                  >
                    {output.action}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
