import { useState } from "react";
import { Mic, FileText, Upload, MicOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InputModalitiesProps {
  onAnalyze: () => void;
}

export const InputModalities = ({ onAnalyze }: InputModalitiesProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleFileUpload = () => {
    setUploadedFile("medical_report_2024.pdf");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Input Modalities</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Voice Input */}
        <div className="relative p-6 rounded-xl border border-border bg-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Voice Input</h4>
                <p className="text-xs text-muted-foreground">Speak symptoms or queries</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleRecording}
                className={cn(
                  "relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
                  isRecording
                    ? "bg-destructive shadow-lg shadow-destructive/50 animate-pulse"
                    : "bg-secondary hover:bg-primary/20"
                )}
              >
                {isRecording ? (
                  <MicOff className="h-7 w-7 text-destructive-foreground" />
                ) : (
                  <Mic className="h-7 w-7 text-primary" />
                )}
                {isRecording && (
                  <span className="absolute inset-0 rounded-full border-4 border-destructive/50 animate-ping" />
                )}
              </button>
              <div className="flex-1">
                {isRecording ? (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-destructive">Recording...</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-destructive rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Click to start recording</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Report Upload */}
        <div className="relative p-6 rounded-xl border border-border bg-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Report Upload</h4>
                <p className="text-xs text-muted-foreground">Upload text or image reports</p>
              </div>
            </div>

            <div
              onClick={handleFileUpload}
              className={cn(
                "flex flex-col items-center justify-center h-20 rounded-lg border-2 border-dashed transition-all cursor-pointer",
                uploadedFile
                  ? "border-success bg-success/10"
                  : "border-border hover:border-accent hover:bg-accent/5"
              )}
            >
              {uploadedFile ? (
                <div className="flex items-center gap-2 text-success">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm font-medium">{uploadedFile}</span>
                </div>
              ) : (
                <>
                  <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Click to upload</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Button onClick={onAnalyze} variant="glow" size="lg" className="w-full">
        <Loader2 className="h-5 w-5 mr-2 animate-spin hidden" />
        Analyze with AI
      </Button>
    </div>
  );
};
