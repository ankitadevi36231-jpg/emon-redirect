import React from 'react';
import { MessageSquare, Video, Sparkles, X } from 'lucide-react';
import { NotificationAlert } from '../types';

interface NotificationToastProps {
  notifications: NotificationAlert[];
  onAdClick: () => void;
  onDismiss: (id: string) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notifications,
  onAdClick,
  onDismiss,
}) => {
  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-20 right-3 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          onClick={onAdClick}
          className="pointer-events-auto bg-gray-950/95 border border-rose-500/60 rounded-2xl p-3 shadow-2xl shadow-rose-950/80 backdrop-blur-md flex items-center justify-between gap-3 cursor-pointer hover:scale-102 hover:border-rose-400 transition-all duration-300 animate-slide-in"
        >
          {/* Avatar with Online Pulse */}
          <div className="relative shrink-0">
            <img
              src={notif.girlImage}
              alt={notif.girlName}
              className="w-12 h-12 rounded-full object-cover border-2 border-rose-500 p-0.5"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-0.5">
              <span className="text-xs font-black text-white truncate flex items-center gap-1">
                {notif.girlName}
                <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
              </span>
              <span className="text-[10px] text-rose-300 font-mono font-semibold shrink-0">
                {notif.timeAgo}
              </span>
            </div>
            <p className="text-xs text-rose-100 font-medium line-clamp-2 leading-tight">
              {notif.message}
            </p>
            <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
              <Video className="w-3 h-3 text-emerald-400 fill-emerald-400 animate-bounce" />
              <span>Click to start instant 4K Video Call</span>
            </div>
          </div>

          {/* Close / Dismiss icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDismiss(notif.id);
            }}
            className="text-gray-400 hover:text-white p-1 hover:bg-gray-800 rounded-full shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
