export interface VideoItem {
  id: string;
  image: string;
  title: string;
  time: string;
  views: string;
  isLive?: boolean;
  liveViewers?: string;
  rating?: string;
  likes?: string;
  uploader?: string;
}

export interface GirlProfile {
  id: string;
  name: string;
  image: string;
  statusText?: string;
  age?: number;
  location?: string;
  hasWhatsapp?: boolean;
  hasTelegram?: boolean;
  hasFacebook?: boolean;
}

export interface NotificationAlert {
  id: string;
  girlName: string;
  girlImage: string;
  message: string;
  timeAgo: string;
}
