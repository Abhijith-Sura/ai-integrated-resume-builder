import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Sparkles, Lightbulb, FileText, Zap } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI resume assistant. I can help you with resume writing tips, content suggestions, formatting advice, and career guidance. What would you like help with today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickPrompts = [
    {
      icon: Lightbulb,
      title: "Resume Tips",
      prompt: "Give me tips for writing a compelling professional summary"
    },
    {
      icon: FileText,
      title: "Content Help",
      prompt: "How should I describe my work experience effectively?"
    },
    {
      icon: Zap,
      title: "Skills Section",
      prompt: "What skills should I include for a software developer role?"
    },
    {
      icon: Sparkles,
      title: "ATS Optimization",
      prompt: "How can I make my resume ATS-friendly?"
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = {
      summary: "Here are some tips for writing a compelling professional summary:\n\n1. **Keep it concise** - Aim for 2-3 sentences\n2. **Highlight achievements** - Include quantifiable results\n3. **Use keywords** - Include relevant industry terms\n4. **Show value** - Explain what you bring to employers\n5. **Be specific** - Avoid generic statements\n\nExample: 'Results-driven software engineer with 5+ years developing scalable web applications, leading to 40% improved user engagement and $2M in revenue growth.'",
      
      experience: "When describing work experience, follow the STAR method:\n\n• **Situation** - Set the context\n• **Task** - Describe your responsibility\n• **Action** - Explain what you did\n• **Result** - Show the impact\n\n**Tips:**\n- Start with action verbs (Led, Developed, Improved)\n- Include numbers and percentages\n- Focus on achievements, not just duties\n- Tailor to the job you're applying for",
      
      skills: "For a software developer role, include these skill categories:\n\n**Technical Skills:**\n- Programming languages (JavaScript, Python, Java)\n- Frameworks (React, Node.js, Django)\n- Databases (MySQL, MongoDB, PostgreSQL)\n- Tools (Git, Docker, AWS)\n\n**Soft Skills:**\n- Problem-solving\n- Team collaboration\n- Communication\n- Project management\n\n**Pro tip:** Match skills to the job description and provide context where possible!",
      
      ats: "To make your resume ATS-friendly:\n\n1. **Use standard formatting** - Simple, clean layout\n2. **Include keywords** - Match job description terms\n3. **Use standard headings** - Work Experience, Education, Skills\n4. **Save as .docx or .pdf** - Check job posting requirements\n5. **Avoid graphics/tables** - Stick to text\n6. **Spell out acronyms** - Include both versions\n\nRemember: ATS systems scan for relevant keywords, so customize for each application!"
    };

    const input = userInput.toLowerCase();
    if (input.includes('summary') || input.includes('professional')) return responses.summary;
    if (input.includes('experience') || input.includes('work')) return responses.experience;
    if (input.includes('skills') || input.includes('developer')) return responses.skills;
    if (input.includes('ats') || input.includes('friendly')) return responses.ats;

    return "Great question! I'd be happy to help you with that. Could you be more specific about what aspect of resume writing you'd like assistance with? I can help with:\n\n• Writing compelling summaries\n• Describing work experience\n• Choosing relevant skills\n• ATS optimization\n• Industry-specific advice\n\nFeel free to ask about any of these topics!";
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Resume Assistant
              </span>
            </h1>
            <p className="text-muted-foreground">
              Get personalized advice and tips for your resume
            </p>
          </div>

          {/* Quick Prompts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-scale-in">
            {quickPrompts.map((prompt, index) => {
              const Icon = prompt.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => handleQuickPrompt(prompt.prompt)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="p-3 bg-primary/10 rounded-lg inline-block mb-2 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                      {prompt.title}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Chat Interface */}
          <Card className="bg-gradient-card border-border h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                AI Assistant
                <div className="flex items-center gap-1 ml-auto">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'ai' && (
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary/50 text-foreground'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {message.sender === 'user' && (
                        <div className="p-2 bg-accent/10 rounded-full">
                          <User className="h-4 w-4 text-accent" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-6 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about resume writing..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    variant="ai"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  AI responses are generated for demonstration. Real implementation would use OpenAI API.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIChat;