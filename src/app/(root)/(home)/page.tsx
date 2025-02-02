"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import { Loader2Icon, Calendar, Clock, ArrowRight, ArrowUpRight, GraduationCap } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import LoaderUI from "@/components/LoadingUI";
import { Card } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  // const isLoading = true

  if (isLoading) return <LoaderUI />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="container max-w-7xl mx-auto p-6 space-y-10">
        {/* WELCOME SECTION */}
        <div className="relative rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 md:p-12 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-indigo-100 mb-4">
              <Clock className="h-5 w-5" />
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome back, {isInterviewer ? "Interviewer" : "Candidate"}!
            </h1>
            <p className="text-indigo-100 text-lg max-w-2xl mb-6">
              {isInterviewer
                ? "Your interview dashboard is ready. Manage candidates, schedule interviews, and make great hires."
                : "Get ready for your upcoming interviews. Access resources and join meetings easily."}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              {isInterviewer ? "Schedule Interview" : "Join Interview"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 w-1/3 h-full">
            <div className="relative w-full h-full">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>

        {isInterviewer ? (
          <>
            {/* QUICK ACTIONS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Quick Actions</h2>
                  <p className="text-muted-foreground mt-1">Start managing your interviews</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {QUICK_ACTIONS.map((action) => (
                  <ActionCard
                    key={action.title}
                    action={action}
                    onClick={() => handleQuickAction(action.title)}
                  />
                ))}
              </div>
            </div>



            <MeetingModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
              isJoinMeeting={modalType === "join"}
            />
          </>
        ) : (
          <>
            {/* CANDIDATE INTERVIEWS */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Calendar className="size-6 text-indigo-500 dark:text-violet-400" />
                    Your Interviews
                  </h2>
                  <p className="text-muted-foreground mt-1">View and join your scheduled interviews</p>
                </div>
              </div>

              <div className="relative">
                {interviews === undefined ? (
                  <div className="flex justify-center py-16 bg-card/50 rounded-xl border border-dashed">
                    <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : interviews.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {interviews.map((interview) => (
                      <MeetingCard key={interview._id} interview={interview} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 bg-card/50 rounded-xl border border-dashed">
                    <Clock className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground text-lg">
                      You have no scheduled interviews at the moment
                    </p>
                  </div>
                )}
              </div>
              <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Interview Preparation</h2>
              <div className="space-y-4">
                {[
                  { title: "Interview Tips", description: "Best practices and guidelines" },
                  { title: "Technical Practice", description: "Coding challenges and solutions" },
                  { title: "Common Questions", description: "Prepare your responses" },
                ].map((resource) => (
                  <button
                    key={resource.title}
                    className="w-full flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <GraduationCap className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mt-1" />
                    <div>
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}