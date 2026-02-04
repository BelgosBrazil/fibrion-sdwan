import { useEffect } from "react";

declare global {
  interface Window {
    RDStationForms?: (formId: string, uuid: string) => {
      createForm: () => void;
    };
  }
}

const RDStationFormSection = () => {
  useEffect(() => {
    const initForm = () => {
      if (typeof window.RDStationForms !== "undefined") {
        new window.RDStationForms("ia-f585633acba408512e8f", "null").createForm();
      }
    };

    const existingScript = document.querySelector(
      'script[src*="rdstation-forms"]'
    );

    if (existingScript) {
      initForm();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
      script.onload = initForm;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="form" className="section-padding bg-muted/50">
      <div className="container-main px-4 md:px-6">
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden bg-muted/70 p-8 md:p-10 shadow-lg border border-border/50">
          <div role="main" id="ia-f585633acba408512e8f" />
        </div>
      </div>
    </section>
  );
};

export default RDStationFormSection;
