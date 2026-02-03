import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { UserRoleSelector } from "@/components/dashboard/UserRoleSelector";
import { InputModalities } from "@/components/dashboard/InputModalities";
import { AIModelEnsemble } from "@/components/dashboard/AIModelEnsemble";
import { ProcessingModules } from "@/components/dashboard/ProcessingModules";
import { OutputModules } from "@/components/dashboard/OutputModules";
import { OrchestrationStatus } from "@/components/dashboard/OrchestrationStatus";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState("doctor");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container pt-24 pb-12">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Medical AI <span className="text-gradient">Diagnostics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Advanced healthcare analytics powered by quantum machine learning, deep learning, 
            and explainable AI for comprehensive medical diagnostics.
          </p>
        </div>

        <div className="space-y-8">
          {/* User Role Selection */}
          <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <UserRoleSelector selectedRole={selectedRole} onRoleSelect={setSelectedRole} />
          </section>

          {/* Orchestration Status */}
          <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <OrchestrationStatus />
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Input */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <InputModalities onAnalyze={handleAnalyze} />
            </section>

            {/* Right Column - AI Models */}
            <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <AIModelEnsemble isAnalyzing={isAnalyzing} />
            </section>
          </div>

          {/* Processing Modules */}
          <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <ProcessingModules isAnalyzing={isAnalyzing} />
          </section>

          {/* Output Modules */}
          <section className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <OutputModules />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MedAI Diagnostics. Powered by advanced AI models.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
