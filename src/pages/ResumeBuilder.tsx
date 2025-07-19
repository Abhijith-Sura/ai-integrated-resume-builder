import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Download, Sparkles, Plus, Trash2 } from "lucide-react";

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: ""
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const steps = [
    { title: "Personal Info", description: "Basic contact information" },
    { title: "Professional Summary", description: "Your career overview" },
    { title: "Work Experience", description: "Employment history" },
    { title: "Education", description: "Academic background" },
    { title: "Skills", description: "Technical and soft skills" },
    { title: "Projects", description: "Notable projects" },
    { title: "Preview & Download", description: "Review and generate" }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={formData.personal.fullName}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, fullName: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.personal.email}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, email: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.personal.phone}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, phone: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="San Francisco, CA"
            value={formData.personal.location}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, location: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            placeholder="linkedin.com/in/johndoe"
            value={formData.personal.linkedin}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, linkedin: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="portfolio">Portfolio/Website</Label>
          <Input
            id="portfolio"
            placeholder="johndoe.dev"
            value={formData.personal.portfolio}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              personal: { ...prev.personal, portfolio: e.target.value }
            }))}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          placeholder="Write a compelling summary of your professional background, key achievements, and career goals..."
          value={formData.summary}
          onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
          className="mt-1 min-h-[120px]"
        />
        <p className="text-sm text-muted-foreground mt-2">
          Aim for 2-3 sentences that highlight your most relevant experience and skills.
        </p>
      </div>
      
      <Card className="bg-gradient-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            AI Suggestion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Based on your profile, here's a suggested summary:
          </p>
          <p className="text-sm bg-secondary/50 p-3 rounded-lg italic">
            "Experienced software developer with 5+ years in full-stack development, 
            specializing in React and Node.js. Proven track record of delivering 
            scalable applications and leading cross-functional teams."
          </p>
          <Button variant="outline" size="sm" className="mt-3">
            Use This Suggestion
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderPreview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-card p-6 rounded-lg border border-primary/20">
        <h3 className="text-xl font-bold mb-4">Resume Preview</h3>
        
        {/* Personal Info Preview */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary">{formData.personal.fullName || "Your Name"}</h2>
          <div className="text-muted-foreground space-y-1 mt-2">
            <p>{formData.personal.email || "your.email@example.com"}</p>
            <p>{formData.personal.phone || "Your Phone"} | {formData.personal.location || "Your Location"}</p>
            {formData.personal.linkedin && <p>{formData.personal.linkedin}</p>}
            {formData.personal.portfolio && <p>{formData.personal.portfolio}</p>}
          </div>
        </div>

        {/* Summary Preview */}
        {formData.summary && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Professional Summary</h3>
            <p className="text-sm text-muted-foreground">{formData.summary}</p>
          </div>
        )}

        <div className="text-center text-muted-foreground py-8">
          <p>Complete the previous steps to see your full resume preview</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="ai" size="lg" className="flex-1">
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </Button>
        <Button variant="neon" size="lg">
          <Sparkles className="h-5 w-5 mr-2" />
          AI Optimize
        </Button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderPersonalInfo();
      case 1: return renderSummary();
      case 6: return renderPreview();
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-8">This section is under development</p>
            <Button variant="outline" onClick={() => setCurrentStep(currentStep + 1)}>
              Skip for Now
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Resume Builder
              </span>
            </h1>
            <p className="text-muted-foreground">
              Let our AI help you create the perfect resume
            </p>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8 bg-gradient-card border-primary/20 animate-scale-in">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-lg">{steps[currentStep].title}</CardTitle>
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </div>
              <CardDescription>{steps[currentStep].description}</CardDescription>
              <Progress value={progress} className="mt-4" />
            </CardHeader>
          </Card>

          {/* Form Content */}
          <Card className="mb-8 bg-gradient-card border-border">
            <CardContent className="p-8">
              {renderCurrentStep()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            <Button
              variant="ai"
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;