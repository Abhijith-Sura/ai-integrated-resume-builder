import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Download, Edit, Eye, Trash2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - would come from API
  const resumes = [
    {
      id: 1,
      title: "Software Developer Resume",
      lastModified: "2 hours ago",
      status: "completed",
      template: "Modern Tech"
    },
    {
      id: 2,
      title: "Marketing Manager CV",
      lastModified: "1 day ago",
      status: "draft",
      template: "Creative Pro"
    },
    {
      id: 3,
      title: "Data Scientist Resume",
      lastModified: "3 days ago",
      status: "completed",
      template: "Clean Minimal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Alex</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your resumes and track your progress
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-scale-in">
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Resumes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">3</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">12</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Templates Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">3</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">AI Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">47</div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/builder">
              <Button variant="ai" size="lg" className="w-full sm:w-auto">
                <Plus className="h-5 w-5 mr-2" />
                Create New Resume
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="neon" size="lg" className="w-full sm:w-auto">
                Get AI Help
              </Button>
            </Link>
          </div>

          {/* Resumes Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Resumes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumes.map((resume, index) => (
                <Card 
                  key={resume.id} 
                  className="bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {resume.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {resume.template}
                        </CardDescription>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resume.status === 'completed' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {resume.status}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      {resume.lastModified}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add New Resume Card */}
              <Link to="/builder">
                <Card className="bg-gradient-card border-dashed border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 cursor-pointer group h-full flex items-center justify-center min-h-[200px]">
                  <CardContent className="text-center">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                      <Plus className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">
                      Create New Resume
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Start building with AI assistance
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;