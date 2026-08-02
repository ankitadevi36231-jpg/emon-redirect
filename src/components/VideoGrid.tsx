import React from 'react';
import { Play, Eye, Clock, Star, Flame, Sparkles, CheckCircle } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoGridProps {
  videos: VideoItem[];
  onAdClick: () => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onAdClick }) => {
  return (
    <div className="my-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-rose-900/30">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-red-500 fill-red-500 animate-bounce" />
          <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-wide uppercase">
            🔥 Recommended Hot Desi Videos
          </h2>
        </div>
        <span onClick={onAdClick} className="text-xs text-rose-400 font-bold hover:underline cursor-pointer flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> View All (1,420 Videos)
        </span>
      </div>

      {/* Grid of Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            onClick={onAdClick}
            className="group bg-gray-900/80 border border-gray-800 hover:border-rose-600/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-rose-950/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-video bg-gray-950 overflow-hidden">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Live or Hot Tag Top Left */}
              {video.isLive ? (
                <div className="absolute top-2 left-2 bg-red-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  LIVE NOW
                </div>
              ) : (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow">
                  🔥 #{idx + 1} HOT
                </div>
              )}

              {/* Time Duration Badge Bottom Right */}
              <div className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-sm text-yellow-300 font-mono text-xs font-bold px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                <Clock className="w-3 h-3 text-yellow-400" />
                {video.time}
              </div>

              {/* Center Play Icon Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center shadow-xl shadow-red-600/70 border border-white/30">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-100 line-clamp-2 leading-snug group-hover:text-rose-400 transition-colors">
                  {video.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <div className="flex items-center gap-1 text-emerald-400 font-bold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{video.views}</span>
                </div>
                {video.rating && (
                  <div className="flex items-center gap-1 text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{video.rating}</span>
                  </div>
                )}
              </div>

              <button className="w-full mt-2 bg-gradient-to-r from-red-600/90 to-rose-600/90 hover:from-red-600 hover:to-rose-600 text-white font-bold text-xs py-2 rounded-xl shadow transition flex items-center justify-center gap-1.5 uppercase tracking-wide">
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Watch Full HD Video</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
