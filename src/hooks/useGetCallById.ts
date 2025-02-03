import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id : string | string[] ) => {
    const [call, setCall] = useState<Call | null>(null);
    const [isCallLoading, setIsCallLoading] = useState(true);

    const client = useStreamVideoClient();
    useEffect(() => {
        if (!client) return;
        const getCall = async () => {
            try {
                const { calls } = await client.queryCalls({
                    filter_conditions: { id },
                });
                if (calls.length > 0) setCall(calls[0]);
            } catch (error) {
                console.log("Error getting call:", error);
                setIsCallLoading(false);
            } finally {
                setIsCallLoading(false);
            }
        };
        getCall();
    }, []);
    return { call, isCallLoading };
};
