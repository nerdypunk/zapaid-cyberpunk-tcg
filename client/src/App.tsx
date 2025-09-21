import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NeonGridBackground from "@/components/NeonGridBackground";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Superpowers from "@/pages/Superpowers";
import Leaderboard from "@/pages/Leaderboard";
import Profile from "@/pages/Profile";
import Agent from "@/pages/Agent";
import Config from "@/pages/Config";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/superpowers" component={Superpowers} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/agent" component={Agent} />
      <Route path="/config" component={Config} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Force dark mode for cyberpunk theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark min-h-screen bg-background text-foreground relative">
          <NeonGridBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Router />
            </main>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
