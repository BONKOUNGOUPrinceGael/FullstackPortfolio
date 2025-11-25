import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CVExportButton() {
  const handleExportPDF = async () => {
    try {
      const response = await fetch("/api/cv/export");
      if (!response.ok) throw new Error("Failed to export CV");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_Jean_Dupont.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting CV:", error);
    }
  };

  return (
    <Button
      onClick={handleExportPDF}
      variant="outline"
      size="sm"
      data-testid="button-download-cv"
    >
      <Download className="w-4 h-4 mr-2" />
      Télécharger le CV
    </Button>
  );
}
