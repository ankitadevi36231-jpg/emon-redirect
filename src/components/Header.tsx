import React from 'react';
import { Play, Flame, Radio, Video, Star, Search, ShieldCheck, Eye } from 'lucide-react';

interface HeaderProps {
  onAdClick: () => void;
  onlineCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onAdClick, onlineCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-gray-950/95 backdrop-blur-md border-b border-rose-900/40 shadow-2xl shadow-rose-950/30">
      {/* Top Banner Notice */}
      <div 
        onClick={onAdClick} 
        className="bg-gradient-to-r from-red-700 via-rose-600 to-pink-600 text-white text-xs md:text-sm py-1.5 px-3 text-center font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 transition-all"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
        <span>🔥 EXCLUSIVE 4K PRIVATE CAM ROOMS ARE LIVE NOW! CLICK HERE TO ACCESS FREE VIDEO CHAT 🔥</span>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <div onClick={onAdClick} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center shadow-lg shadow-red-600/40 group-hover:scale-105 transition-transform">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-pink-500">
                DESI TUBE
              </span>
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-widest uppercase animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-[10px] text-gray-400 tracking-tight flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> 100% Free VIP Access • 4K Ultra HD
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div onClick={onAdClick} className="hidden md:flex flex-1 max-w-md mx-4 relative cursor-pointer">
          <input
            type="text"
            readOnly
            placeholder="Search hot bhabhi, desi girls, live cam..."
            className="w-full bg-gray-900/90 border border-rose-900/50 rounded-full py-2 pl-10 pr-24 text-xs text-gray-200 placeholder-gray-500 focus:outline-none pointer-events-none"
          />
          <Search className="w-4 h-4 text-rose-400 absolute left-3.5 top-2.5" />
          <button className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold rounded-full hover:brightness-110">
            Search
          </button>
        </div>

        {/* Online Status & Call Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div onClick={onAdClick} className="hidden sm:flex items-center gap-1.5 bg-gray-900/80 border border-emerald-500/40 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400">{onlineCount.toLocaleString()} Online</span>
          </div>

          <button
            onClick={onAdClick}
            className="bg-gradient-to-r from-pink-600 via-red-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2 rounded-full shadow-lg shadow-rose-600/30 flex items-center gap-2 animate-bounce cursor-pointer"
          >
            <Video className="w-4 h-4 fill-white" />
            <span>START LIVE CAM</span>
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="bg-gray-900/60 border-t border-rose-900/20 px-3 sm:px-6 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium whitespace-nowrap">
          <button onClick={onAdClick} className="px-3 py-1 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-full flex items-center gap-1 shadow-md">
            <Flame className="w-3.5 h-3.5 fill-white" /> 🔥 Trending Now
          </button>
          <button onClick={onAdClick} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-rose-300 rounded-full flex items-center gap-1 border border-rose-800/40">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" /> 🔴 24/7 Live Stream
          </button>
          <button onClick={onAdClick} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-pink-300 rounded-full flex items-center gap-1 border border-pink-800/40">
            <Video className="w-3.5 h-3.5 text-pink-400" /> 💋 Private Video Call
          </button>
          <button onClick={onAdClick} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-amber-300 rounded-full flex items-center gap-1 border border-amber-800/40">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> ⭐ Hot Bhabhi Special
          </button>
          <button onClick={onAdClick} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-emerald-300 rounded-full flex items-center gap-1 border border-emerald-800/40">
            <Eye className="w-3.5 h-3.5 text-emerald-400" /> 🌶️ Desi College Leaks
          </button>
        </div>
      </div>
    </header>
  );
};
