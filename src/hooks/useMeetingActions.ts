
import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

export const useMeetingActions = () => {
    const rotuer = useRouter();
    const client = useStreamVideoClient();

    const createInstantMeeting = async () => {
        if(!client) return toast.error("No client found");

        try {
            const id = crypto.randomUUID();
            const call = await client.call("default", id);

            await call.getOrCreate({
                data: {
                    starts_at : new Date().toISOString(),
                    custom:{
                        description: "Instant Meeting",
                    },
                }
            })
            rotuer.push(`/meeting/${call.id}`);
            toast.success("Meeting created successfully");
        } catch (error) {
            console.log("Error creating meeting:", error);
            toast.error("failed to create meeting");
        }
    }

    const joinMeeting = async (callId: string) => {
        if(!client) return toast.error("Failed to join meeting. Please try again...");
        rotuer.push(`/meeting/${callId}`);
    }

    return { createInstantMeeting, joinMeeting };
};

