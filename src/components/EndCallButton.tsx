import React from 'react'
import {useCall, useCallStateHooks} from "@stream-io/video-react-sdk";
import {useRouter} from "next/navigation";
import {useMutation, useQuery} from "convex/react";
import {api} from "../../convex/_generated/api";
import {Button} from "@/components/ui/button";
import toast from "react-hot-toast";

const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    //
    const updateInterviewStatus = useMutation(api.interviews.updateInterviewStatus);
    const interview = useQuery(api.interviews.getInterviewByStreamCallId,{
        streamCallId: call?.id || "",
    } );
    if(!call || !interview) return null;
    const isMeetingOwner = localParticipant?.userId === call.state.createdBy?.id;
    if(!isMeetingOwner) return null;

    const callEnd = async () => {
      try {
        await call.endCall();
        await updateInterviewStatus({
          id: interview._id,
          status: "completed",
        });
        router.push("/");
        toast.success("Meeting ended successfully");
      } catch (error) {
        console.error("Error ending call:", error);
      }
    }

    return (
        <Button variant={"destructive"} onClick={callEnd}>
            End Meeting.
        </Button>
    )
}
export default EndCallButton
