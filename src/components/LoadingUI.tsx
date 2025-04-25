"use client";

import { Loader2Icon } from "lucide-react";

const LoaderUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="container max-w-7xl mx-auto p-6 space-y-10">
        {/* Animated Welcome Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600/10 to-violet-500/10 p-8 md:p-10 animate-pulse">
          <div className="space-y-4">
            <div className="h-8 w-48 bg-foreground/10 rounded-lg" />
            <div className="h-4 w-96 max-w-full bg-foreground/5 rounded-lg" />
          </div>
        </div>

        {/* Animated Quick Actions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-6 w-32 bg-foreground/10 rounded-lg" />
              <div className="h-4 w-48 bg-foreground/5 rounded-lg" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card border p-6 transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="h-8 w-8 rounded-lg bg-foreground/10" />
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-foreground/10 rounded-lg" />
                    <div className="h-3 w-32 bg-foreground/5 rounded-lg" />
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Loading Indicator */}
        <div className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg border">
          <Loader2Icon className="h-4 w-4 animate-spin text-indigo-500 dark:text-violet-400" />
          <span className="text-sm font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoaderUI;