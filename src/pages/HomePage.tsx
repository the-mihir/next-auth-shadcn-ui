
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function HomePage() {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="max-w-3xl space-y-6 animate-in slide-in">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
          Next-level web application
        </h1>
        <p className="text-xl text-muted-foreground">
          A modern web application built with React, Tailwind, and shadcn/ui for a seamless user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {user ? (
            <Button asChild size="lg">
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Log in</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {features.map((feature, i) => (
          <div 
            key={feature.title} 
            className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            style={{ 
              animationDelay: `${i * 100}ms`,
              opacity: 0,
              animation: 'fadeIn 0.5s ease-out forwards',
              animationDelay: `${i * 100}ms`
            }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Shield, Zap, LineChart } from "lucide-react";

const features = [
  {
    title: "Secure Authentication",
    description: "Industry-standard security with JWT authentication and secure password handling.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Optimized for speed with modern React patterns and efficient rendering.",
    icon: Zap,
  },
  {
    title: "Intuitive Dashboard",
    description: "Beautiful and functional dashboard experience with real-time updates.",
    icon: LineChart,
  },
];
