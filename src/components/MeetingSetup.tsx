import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { CameraIcon, MicIcon, SettingsIcon, ClipboardIcon, CheckIcon, ShieldIcon } from 'lucide-react';
import { Switch } from "./ui/switch";
import { motion, AnimatePresence } from 'framer-motion';

const MeetingSetup = ({ onSetupComplete }: { onSetupComplete: () => void }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const call = useCall();

  if (!call) return null;

  useEffect(() => {
    isCameraOn ? call.camera.disable() : call.camera.enable();
  }, [isCameraOn, call.camera]);

  useEffect(() => {
    isMicOn ? call.microphone.disable() : call.microphone.enable();
  }, [isMicOn, call.microphone]);

  const handleJoin = async () => {
    await call.join();
    onSetupComplete();
  }

  const handleCopyMeetingId = () => {
    navigator.clipboard.writeText(call.id);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-6xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center p-2 bg-primary/20 rounded-full shadow-2xl"
          >
            <ShieldIcon className="w-14 h-14 text-primary" />
          </motion.div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">
            Prepare Your Space
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            Optimize your environment for crystal-clear communication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Video Preview Section */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="p-4 bg-accent/50 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-3">
                <CameraIcon className="w-6 h-6 text-primary" />
                Live Preview
              </h2>
            </div>
            <div className="aspect-video relative">
              <VideoPreview className="w-full h-full object-cover" />

            </div>
          </motion.div>

          {/* Controls Section */}
          <motion.div
            className="bg-card rounded-2xl p-6 border border-border shadow-xl"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
          >
            <div className="space-y-8">
              {/* Meeting ID */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Meeting Identifier
                </label>
                <div className="flex items-center gap-2 bg-accent/30 rounded-lg p-2 pr-1">
                  <p className="font-mono text-foreground/90 truncate flex-grow px-3 py-2">
                    {call.id}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyMeetingId}
                    className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      {isCopied ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <CheckIcon className="w-5 h-5 text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="clipboard"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <ClipboardIcon className="w-5 h-5 text-foreground/80" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* Device Controls */}
              <div className="space-y-6">
                {/* Camera Control */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 bg-accent/20 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isCameraOn ? 'bg-primary/20' : 'bg-destructive/20'}`}>
                      <CameraIcon className={`w-6 h-6 ${isCameraOn ? 'text-primary' : 'text-destructive'}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Video Feed</p>
                      <p className="text-sm text-muted-foreground">
                        {isCameraOn ? "Active" : "Disabled"}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={!isCameraOn}
                    onCheckedChange={(checked) => setIsCameraOn(!checked)}
                    className="data-[state=checked]:bg-primary"
                  />
                </motion.div>

                {/* Microphone Control */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 bg-accent/20 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isMicOn ? 'bg-primary/20' : 'bg-destructive/20'}`}>
                      <MicIcon className={`w-6 h-6 ${isMicOn ? 'text-primary' : 'text-destructive'}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Audio Input</p>
                      <p className="text-sm text-muted-foreground">
                        {isMicOn ? "Active" : "Muted"}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={!isMicOn}
                    onCheckedChange={(checked) => setIsMicOn(!checked)}
                    className="data-[state=checked]:bg-primary"
                  />
                </motion.div>

                {/* Advanced Settings */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 bg-accent/20 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <SettingsIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Advanced Settings</p>
                      <p className="text-sm text-muted-foreground">
                        Device configuration
                      </p>
                    </div>
                  </div>
                  <DeviceSettings />
                </motion.div>
              </div>

              {/* Join Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleJoin}
                  className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                >
                  Enter Meeting Space
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground text-sm mt-8 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="font-light">
            Secure Connection · End-to-End Encrypted · 256-bit AES
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MeetingSetup;