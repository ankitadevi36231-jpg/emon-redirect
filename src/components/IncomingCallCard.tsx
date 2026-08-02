import React, { useEffect, useState } from 'react';
import { Video, Phone, PhoneOff, Volume2, VolumeX, ShieldCheck, Sparkles } from 'lucide-react';
import { GirlProfile } from '../types';

interface IncomingCallCardProps {
  girl: GirlProfile;
  onAdClick: () => void;
  isVisible: boolean;
}

export const IncomingCallCard: React.FC<IncomingCallCardProps> = ({ girl, onAdClick, isVisible }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Play realistic ringing sound using Web Audio API when call is visible and not muted
  useEffect(() => {
    if (!isVisible || isMuted) return;

    let audioCtx: AudioContext | null = null;
    let intervalId: any = null;

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();

        const playRingTone = () => {
          if (!audioCtx || audioCtx.state === 'closed') return;
          try {
            const osc1 = audioCtx.createOscillator();
            const osc2 = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc1.type = 'sine';
            osc2.type = 'sine';
            osc1.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
            osc2.frequency.setValueAtTime(480, audioCtx.currentTime); // B4

            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(audioCtx.destination);

            osc1.start();
            osc2.start();
            osc1.stop(audioCtx.currentTime + 1.2);
            osc2.stop(audioCtx.currentTime + 1.2);
          } catch (e) {
            // Audio context gesture restrictions handled gracefully
          }
        };

        playRingTone();
        intervalId = setInterval(playRingTone, 2000);
      }
    } catch (e) {
      // Audio context fallbacks
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {});
      }
    };
  }, [isVisible, isMuted]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Zoom In & Out Pulsing Container */}
      <div 
        onClick={onAdClick}
        className="animate-zoom-pulse w-full max-w-sm bg-gradient-to-b from-gray-950 via-gray-900 to-black border-2 border-rose-500/80 rounded-3xl p-5 shadow-2xl shadow-rose-600/60 relative cursor-pointer overflow-hidden transform transition-all duration-500"
      >
        {/* Top Glow & Audio Controls */}
        <div className="flex items-center justify-between mb-3 border-b border-rose-900/40 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-rose-400 font-bold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span>INCOMING VIDEO CALL...</span>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }} 
            className="p-1.5 bg-gray-800/80 hover:bg-gray-700 rounded-full text-rose-300 transition"
            title={isMuted ? "Unmute Ringtone" : "Mute Ringtone"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-rose-400 animate-pulse" />}
          </button>
        </div>

        {/* Girl Avatar Box with Ripple Effect */}
        <div className="relative flex flex-col items-center my-3">
          {/* Animated Ripple Rings */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-rose-500/50 animate-ring-ripple pointer-events-none" />
          <div className="absolute w-28 h-28 rounded-full border-2 border-pink-500/40 animate-ring-ripple [animation-delay:0.5s] pointer-events-none" />

          {/* Girl Photo Frame */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-red-600 via-rose-500 to-pink-500 shadow-xl shadow-rose-600/50">
            <img
              src={girl.image}
              alt={girl.name}
              className="w-full h-full object-cover rounded-full border-2 border-black"
            />
            {/* Live Camera Badge */}
            <div className="absolute bottom-1 right-1 bg-emerald-500 p-1.5 rounded-full border-2 border-black text-white shadow-lg animate-bounce">
              <Video className="w-4 h-4 fill-white" />
            </div>
          </div>

          {/* Girl Name & Status */}
          <div className="mt-3 text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center justify-center gap-1.5">
              <span>{girl.name}</span>
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
            </h3>
            <p className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {girl.statusText || "Free Right Now • Online"}
            </p>
          </div>
        </div>

        {/* Social Connect Logos (WhatsApp, Telegram, Facebook) */}
        <div className="my-4 bg-gray-900/90 border border-gray-800 rounded-2xl p-3 text-center space-y-2">
          <p className="text-[11px] text-gray-300 font-semibold uppercase tracking-wider">
            Available on Social Media Apps
          </p>
          <div className="flex items-center justify-center gap-4 pt-1">
            {/* WhatsApp Logo */}
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-600/40 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.198 4.283-1.121z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-300 font-bold">WhatsApp</span>
            </div>

            {/* Telegram Logo */}
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center shadow-lg shadow-sky-600/40 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white ml-0.5" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-300 font-bold">Telegram</span>
            </div>

            {/* Facebook Logo */}
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg shadow-blue-600/40 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-300 font-bold">Facebook</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Accept & Decline */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button className="bg-gradient-to-r from-emerald-600 to-green-500 hover:brightness-110 text-white font-extrabold text-xs sm:text-sm py-3 px-2 rounded-2xl shadow-lg shadow-emerald-600/50 flex items-center justify-center gap-2 tracking-wide uppercase animate-bounce">
            <Phone className="w-4 h-4 fill-white" />
            <span>ACCEPT CALL</span>
          </button>

          <button className="bg-gradient-to-r from-red-700 to-rose-600 hover:brightness-110 text-white font-extrabold text-xs sm:text-sm py-3 px-2 rounded-2xl shadow-lg shadow-red-700/50 flex items-center justify-center gap-2 tracking-wide uppercase">
            <PhoneOff className="w-4 h-4 fill-white" />
            <span>DECLINE</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-3 text-center">
          <p className="text-[10px] text-rose-300 flex items-center justify-center gap-1 font-semibold">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Free Private 4K Video Chat • Tap Anywhere to Start
          </p>
        </div>
      </div>
    </div>
  );
};
