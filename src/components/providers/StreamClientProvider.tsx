"use client"

import { ReactNode, useEffect, useState } from "react";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { streamTokenProvider } from "@/actions/stream.action";

// Add token provider function (should be implemented properly)


const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;
        
        const client = new StreamVideoClient({
            apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
            user: {
                id: user.id,
                name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.id,
                image: user.imageUrl,
            },
            tokenProvider: streamTokenProvider,
        });

        setVideoClient(client);

        return () => {
            if (client) {
                client.disconnectUser();
            }
        };
    }, [user, isLoaded]);

    if (!videoClient) return <Loader className="mx-auto" />;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider;