// Mock data for the music production platform

export interface Producer {
  id: string;
  name: string;
  specializations: string[];
  genres: string[];
  rating: number;
  totalReviews: number;
  pricePerTrack: number;
  avatarUrl: string;
  available: boolean;
  completedProjects: number;
  bio: string;
  portfolioUrls: string[];
}

export interface ProductionProject {
  id: string;
  songTitle: string;
  artistName: string;
  producerName: string;
  status: 'pending' | 'recording' | 'mixing' | 'mastering' | 'completed';
  deadline: string;
  budget: number;
}

export interface Message {
  id: string;
  projectId: string;
  senderId: string;
  senderName: string;
  senderType: 'artist' | 'producer';
  message: string;
  timestamp: string;
  read: boolean;
}

export const mockProducers: Producer[] = [
  {
    id: '1',
    name: 'Lily Chen',
    specializations: ['Mixing & Mastering', 'Electronic Production'],
    genres: ['Electronic', 'Pop', 'EDM'],
    rating: 4.9,
    totalReviews: 127,
    pricePerTrack: 800,
    avatarUrl: '/avatars/producer-1.jpg',
    available: true,
    completedProjects: 150,
    bio: 'Award-winning producer specializing in electronic and pop music with over 10 years of experience.',
    portfolioUrls: ['https://soundcloud.com/lilychen', 'https://spotify.com/lilychen']
  },
  {
    id: '2',
    name: 'Marcus Ray',
    specializations: ['Recording', 'Live Instrumentation'],
    genres: ['Rock', 'Alternative', 'Indie'],
    rating: 4.8,
    totalReviews: 98,
    pricePerTrack: 650,
    avatarUrl: '/avatars/producer-2.jpg',
    available: true,
    completedProjects: 112,
    bio: 'Passionate about capturing authentic performances and creating powerful rock productions.',
    portfolioUrls: ['https://soundcloud.com/marcusray']
  },
  {
    id: '3',
    name: 'DJ Rhythmic',
    specializations: ['Beat Making', 'Hip-Hop Production'],
    genres: ['Hip-Hop', 'R&B', 'Trap'],
    rating: 4.7,
    totalReviews: 156,
    pricePerTrack: 500,
    avatarUrl: '/avatars/producer-3.jpg',
    available: false,
    completedProjects: 203,
    bio: 'Creating hard-hitting beats and smooth R&B tracks for top artists worldwide.',
    portfolioUrls: ['https://beatstars.com/djrhythmic', 'https://soundcloud.com/djrhythmic']
  },
  {
    id: '4',
    name: 'Sarah Chen',
    specializations: ['Vocal Production', 'Songwriting'],
    genres: ['Pop', 'Singer-Songwriter', 'Acoustic'],
    rating: 4.9,
    totalReviews: 89,
    pricePerTrack: 750,
    avatarUrl: '/avatars/producer-4.jpg',
    available: true,
    completedProjects: 94,
    bio: 'Helping artists find their unique voice through thoughtful production and arrangement.',
    portfolioUrls: ['https://soundcloud.com/sarahchen']
  },
  {
    id: '5',
    name: 'Mike Harrison',
    specializations: ['Mastering', 'Sound Design'],
    genres: ['All Genres'],
    rating: 5.0,
    totalReviews: 214,
    pricePerTrack: 900,
    avatarUrl: '/avatars/producer-5.jpg',
    available: true,
    completedProjects: 312,
    bio: 'Professional mastering engineer with credits on Grammy-nominated albums.',
    portfolioUrls: ['https://mikeharrison.com', 'https://soundcloud.com/mikeharrison']
  },
  {
    id: '6',
    name: 'Alex Beats',
    specializations: ['Production & Arrangement', 'Mixing'],
    genres: ['Pop', 'Dance', 'House'],
    rating: 4.8,
    totalReviews: 143,
    pricePerTrack: 700,
    avatarUrl: '/avatars/producer-6.jpg',
    available: true,
    completedProjects: 178,
    bio: 'Crafting infectious melodies and dance-floor ready productions.',
    portfolioUrls: ['https://soundcloud.com/alexbeats', 'https://spotify.com/alexbeats']
  }
];

export const mockProjects: ProductionProject[] = [
  {
    id: '1',
    songTitle: 'Midnight Dreams',
    artistName: 'Indie Rock Band Aurora',
    producerName: 'Sarah Chen',
    status: 'mixing',
    deadline: '2025-03-15',
    budget: 1500
  },
  {
    id: '2',
    songTitle: 'Electric Nights',
    artistName: 'DJ Phoenix',
    producerName: 'Lily Chen',
    status: 'recording',
    deadline: '2025-02-28',
    budget: 2000
  },
  {
    id: '3',
    songTitle: 'Broken Strings',
    artistName: 'Acoustic Soul Collective',
    producerName: 'Marcus Ray',
    status: 'mastering',
    deadline: '2025-02-10',
    budget: 1200
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    projectId: '1',
    senderId: 'producer-sarah',
    senderName: 'Sarah Chen',
    senderType: 'producer',
    message: "Hi! I've uploaded the latest mix revision. Let me know what you think about the vocal levels.",
    timestamp: '2025-01-10T14:30:00Z',
    read: false
  },
  {
    id: '2',
    projectId: '1',
    senderId: 'artist-aurora',
    senderName: 'Aurora Band',
    senderType: 'artist',
    message: "The mix sounds great! Could we add a bit more reverb on the chorus vocals?",
    timestamp: '2025-01-10T10:15:00Z',
    read: true
  },
  {
    id: '3',
    projectId: '2',
    senderId: 'producer-lily',
    senderName: 'Lily Chen',
    senderType: 'producer',
    message: "Recording session scheduled for next Tuesday at 2 PM. Please bring your demo tracks.",
    timestamp: '2025-01-09T16:45:00Z',
    read: true
  }
];

export const mockArtistProfile = {
  id: 'artist-1',
  name: 'Indie Rock Band Aurora',
  email: 'contact@aurora.band',
  bio: 'Indie rock band from Seattle bringing authentic sound and powerful lyrics.',
  genrePreferences: ['Rock', 'Alternative', 'Indie'],
  budgetRangeMin: 500,
  budgetRangeMax: 2000,
  activeProjects: 3,
  completedProjects: 12,
  avatarUrl: '/avatars/artist-aurora.jpg'
};
