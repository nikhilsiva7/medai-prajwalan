import { User, Stethoscope, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserRole {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const roles: UserRole[] = [
  {
    id: "general",
    label: "General User",
    description: "Access health insights and fitness tracking",
    icon: User,
  },
  {
    id: "doctor",
    label: "Doctor",
    description: "Full diagnostic tools and patient management",
    icon: Stethoscope,
  },
  {
    id: "patient",
    label: "Patient",
    description: "View reports and recovery recommendations",
    icon: Heart,
  },
];

interface UserRoleSelectorProps {
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}

export const UserRoleSelector = ({ selectedRole, onRoleSelect }: UserRoleSelectorProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">User Interface</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => onRoleSelect(role.id)}
              className={cn(
                "relative p-4 rounded-xl border transition-all duration-300 text-left group",
                isSelected
                  ? "border-primary bg-primary/10 shadow-glow"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary"
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    isSelected ? "gradient-primary" : "bg-secondary group-hover:bg-primary/20"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isSelected ? "text-primary-foreground" : "text-primary")} />
                </div>
                <div className="flex-1">
                  <p className={cn("font-medium", isSelected ? "text-primary" : "text-foreground")}>
                    {role.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{role.description}</p>
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
