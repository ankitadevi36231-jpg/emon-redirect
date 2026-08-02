import React, { useState, useEffect } from 'react';
import { Play, Eye, ThumbsUp, Radio, Share2, Volume2, Maximize, MessageSquare, Flame, CheckCircle2 } from 'lucide-react';
import { VideoItem } from '../types';

interface LiveHeroStreamProps {
  video: VideoItem;
  onAdClick: () => void;
}

export const LiveHeroStream: React.FC<LiveHeroStreamProps> = ({ video, onAdClick }) => {
  const [liveViewers, setLiveViewers] = useState<number>(48291);

  // Dynamic live viewer updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 11) - 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-900/90 border border-red-900/50 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/40 my-4">
      {/* Top Banner Tag */}
      <div 
        onClick={onAdClick}
        className="bg-gradient-to-r from-red-700 via-rose-600 to-red-800 text-white px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-bold cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-white animate-ping" />
          <span className="uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-yellow-300 animate-pulse" /> 
            FEATURED 4K LIVE STREAM
          </span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 px-3 py-0.5 rounded-full border border-white/20">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-300 font-mono font-bold">{liveViewers.toLocaleString()}</span>
          <span className="text-[10px] text-gray-300">WATCHING LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Main Video Stream Player (8 cols) */}
        <div 
          onClick={onAdClick}
          className="lg:col-span-8 relative aspect-video bg-black group cursor-pointer overflow-hidden"
        >
          {/* Main Thumbnail Image */}
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 flex flex-col justify-between p-4 sm:p-6" />

          {/* Top Player Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                🔴 LIVE STREAMING
              </span>
              <span className="bg-black/70 backdrop-blur-md text-yellow-400 font-bold text-xs px-2.5 py-1 rounded-full border border-yellow-500/30">
                4K ULTRA HD
              </span>
            </div>
            <span className="bg-black/80 text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-white/10">
              TIME: {video.time}
            </span>
          </div>

          {/* Center Huge Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-red-600/40 animate-ping" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-red-600/80 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white ml-1.5" />
              </div>
            </div>
            <div className="mt-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-rose-500/40 shadow-xl text-center">
              <p className="text-white font-extrabold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
                CLICK TO UNLOCK FREE 4K LIVE STREAM
              </p>
              <p className="text-xs text-rose-300">Clear Hindi Audio • Live Private Cam Audio</p>
            </div>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-10 bg-black/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex flex-col gap-2 pointer-events-none">
            {/* Live Progress Bar */}
            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 h-full w-3/4 animate-pulse" />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-300 font-mono">
              <div className="flex items-center gap-3">
                <Play className="w-4 h-4 text-white fill-white" />
                <Volume2 className="w-4 h-4 text-gray-300" />
                <span className="text-rose-400 font-bold">🔴 LIVE 02:41:09 / 03:00:00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded">HD</span>
                <Maximize className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Live Sidebar & Chat Preview (4 cols) */}
        <div 
          onClick={onAdClick}
          className="lg:col-span-4 bg-gray-950 p-4 border-t lg:border-t-0 lg:border-l border-rose-900/40 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-gray-800 pb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live Chat Stream</span>
              </div>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">
                Active
              </span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-2.5 text-xs">
              <div className="bg-gray-900/80 p-2 rounded-lg border border-gray-800">
                <span className="font-bold text-rose-400">Ravi_Punjabi:</span>{' '}
                <span className="text-gray-200">Bhabhi audio is so crystal clear! WOW 🔥</span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-lg border border-gray-800">
                <span className="font-bold text-pink-400">Rahul_Delhi:</span>{' '}
                <span className="text-gray-200">Can I request private 1-on-1 video call? 😍</span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-lg border border-gray-800">
                <span className="font-bold text-amber-400">Amit_Kolkata:</span>{' '}
                <span className="text-gray-200">Best live stream today! Sujita Bowdi is live next!</span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-lg border border-gray-800">
                <span className="font-bold text-emerald-400">Vikram_Desi:</span>{' '}
                <span className="text-gray-200">Just connected to WhatsApp video room! 🎥</span>
              </div>
            </div>
          </div>

          {/* Quick Connect CTA */}
          <div className="mt-4 pt-3 border-t border-gray-800">
            <button className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 uppercase tracking-wider animate-pulse">
              <span>Join Live Chat & Call Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Title & Meta Bar */}
      <div 
        onClick={onAdClick}
        className="p-4 sm:p-5 bg-gray-950/80 border-t border-rose-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-gray-900/60 transition"
      >
        <div className="space-y-1.5 flex-1">
          <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug hover:text-rose-400 transition">
            {video.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1 font-bold text-rose-400">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> {video.uploader}
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">{video.views} Views</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">👍 {video.likes} Likes</span>
            <span>•</span>
            <span className="bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
              {video.rating} Positive
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-gray-800 hover:bg-rose-900/50 text-rose-300 text-xs font-bold px-3 py-2 rounded-xl border border-rose-800/40 transition">
            <ThumbsUp className="w-4 h-4 text-rose-400" />
            <span>Like ({video.likes})</span>
          </button>
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition">
            <Share2 className="w-4 h-4" />
            <span>Connect Live</span>
          </button>
        </div>
      </div>
    </div>
  );
};
