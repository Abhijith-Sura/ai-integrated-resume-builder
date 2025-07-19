import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, User, FileText, MessageSquare, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/dashboard", label: "Dashboard", icon: User },
    { path: "/builder", label: "Builder", icon: FileText },
    { path: "/chat", label: "AI Assistant", icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-primary p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Resume
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "ai" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="ai" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;