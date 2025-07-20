import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    problemDescription: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to discuss your automation needs.",
      });
      setFormData({ businessName: "", problemDescription: "", email: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="lead-capture" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your AI Automation Strategy —{" "}
            <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your challenge and we'll show you exactly how AI can transform your workflows.
          </p>
        </div>

        {/* Lead Capture Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card border-primary/20 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="h-12"
                />
              </div>

              {/* Problem Description */}
              <div>
                <label htmlFor="problemDescription" className="block text-sm font-medium mb-2">
                  Describe Your Problem or Use Case
                </label>
                <Textarea
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  placeholder="Tell us about the workflow you want to automate, the challenges you're facing, or the business process that needs optimization..."
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="h-12"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="glow"
                className="w-full h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Describe Your Use Case
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to provide you with a customized automation strategy.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};