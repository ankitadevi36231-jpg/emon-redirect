import React from 'react';
import { Play, ShieldCheck, Flame, Heart, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onAdClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdClick }) => {
  return (
    <footer className="mt-16 bg-gray-950 border-t border-rose-900/40 pt-10 pb-8 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top CTA Row */}
        <div 
          onClick={onAdClick}
          className="bg-gradient-to-r from-red-950/80 via-rose-900/60 to-purple-950/80 border border-rose-600/50 rounded-2xl p-6 text-center space-y-3 cursor-pointer hover:border-rose-400 transition"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/30 text-rose-300 font-extrabold text-xs px-3 py-1 rounded-full border border-rose-500/40">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span>JOIN OVER 1,400,000 HAPPY USERS TODAY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Ready for Unlimited 4K Desi Live Streams & Private Video Chat?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Connect instantly with verified hot bhabhis, desi girls, and live cam hosts. No registration required.
          </p>
          <button className="mt-2 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white font-black text-sm px-8 py-3 rounded-full shadow-2xl shadow-rose-600/60 hover:brightness-110 uppercase tracking-widest animate-pulse">
            START 100% FREE VIDEO CHAT NOW
          </button>
        </div>

        {/* Footer Links & Disclaimer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-gray-900">
          <div onClick={onAdClick} className="space-y-2 cursor-pointer">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-rose-400">Popular Categories</h4>
            <ul className="space-y-1.5 text-gray-400">
              <li className="hover:text-white">🔥 Indian Hot Bhabhi</li>
              <li className="hover:text-white">🔴 24/7 Live Cam Rooms</li>
              <li className="hover:text-white">💋 Private Video Call</li>
              <li className="hover:text-white">🌶️ Desi College Leaks</li>
            </ul>
          </div>

          <div onClick={onAdClick} className="space-y-2 cursor-pointer">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-rose-400">Live Services</h4>
            <ul className="space-y-1.5 text-gray-400">
              <li className="hover:text-white">💬 WhatsApp Direct Call</li>
              <li className="hover:text-white">✈️ Telegram Secret Chat</li>
              <li className="hover:text-white">📘 Facebook Messenger</li>
              <li className="hover:text-white">🎥 4K Ultra HD Cam</li>
            </ul>
          </div>

          <div onClick={onAdClick} className="space-y-2 cursor-pointer">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-rose-400">Safety & Privacy</h4>
            <ul className="space-y-1.5 text-gray-400">
              <li className="hover:text-white flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-400" /> 100% Secure & Private</li>
              <li className="hover:text-white flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-blue-400" /> Verified Hosts Only</li>
              <li className="hover:text-white flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Free Unlimited Streaming</li>
            </ul>
          </div>

          <div onClick={onAdClick} className="space-y-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <span className="font-black text-white text-base">DESI TUBE</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Premium video marketing & live streaming hub. All content strictly 18+. Fast servers & HD video calls worldwide.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-900 text-center text-gray-600 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Desi Tube Live. All Rights Reserved. 18+ Adult Entertainment.</p>
          <p className="flex items-center gap-1 text-rose-500 font-medium">
            Made with <Heart className="w-3 h-3 fill-rose-500" /> for Live Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};
