"use client";

import Link from "next/link";
import { LayoutDashboard, ChevronRight } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";


const DashboardBtn = () => {
  const {isCandidate, isInterviewer, isLoading} = useUserRole();

  if (isCandidate || isLoading) {
    return null;
  }

  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 dark:hover:shadow-violet-400/25"
    >
      <LayoutDashboard className="size-4 transition-transform duration-300 group-hover:-rotate-12" />

      <span className="text-sm tracking-wide">
        Dashboard
      </span>

      <ChevronRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      />

      {/* Hover overlay */}
      {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 dark:from-indigo-300 dark:to-violet-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300" /> */}
    </Link>
  );
};

export default DashboardBtn;