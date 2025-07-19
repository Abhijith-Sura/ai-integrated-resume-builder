import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-40 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perfect Resume
              </span>{" "}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create professional, ATS-optimized resumes in minutes with our AI-powered platform. 
              Get personalized suggestions and guidance throughout the process.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/builder">
              <Button variant="glow" size="xl" className="group">
                Start Building Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="neon" size="xl">
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">AI-Powered</h3>
              <p className="text-muted-foreground text-center text-sm">
                Smart content suggestions and formatting
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-accent rounded-lg">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-muted-foreground text-center text-sm">
                Generate professional resumes in minutes
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">ATS Optimized</h3>
              <p className="text-muted-foreground text-center text-sm">
                Passes through applicant tracking systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;