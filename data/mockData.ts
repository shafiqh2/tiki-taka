export const mockLiveMatches = [
  {
    homeTeam: {
      name: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      score: 2
    },
    awayTeam: {
      name: 'Arsenal',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      score: 1
    },
    time: '68',
    league: 'Premier League'
  },
  {
    homeTeam: {
      name: 'Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
      score: 0
    },
    awayTeam: {
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      score: 1
    },
    time: '54',
    league: 'La Liga'
  },
  {
    homeTeam: {
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_logo_%282017%29.svg',
      score: 3
    },
    awayTeam: {
      name: 'Dortmund',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
      score: 2
    },
    time: '76',
    league: 'Bundesliga'
  }
];

export const mockNews = [
  {
    id: 1,
    title: 'Manchester City edges closer to Premier League title with win over Arsenal',
    description: 'De Bruyne scores twice as City secure vital three points in title race',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Sky Sports',
    time: '2 hours ago'
  },
  {
    id: 2,
    title: 'Mbappé confirms Real Madrid move after seven years at PSG',
    description: 'French superstar signs five-year contract with Spanish giants',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'ESPN',
    time: '4 hours ago'
  },
  {
    id: 3,
    title: 'Jürgen Klopp to step down as Liverpool manager at end of season',
    description: 'German coach ends successful nine-year spell at Anfield',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'BBC Sport',
    time: '6 hours ago'
  },
  {
    id: 4,
    title: 'Barcelona signs 16-year-old Brazilian wonderkid in €45m deal',
    description: 'Young striker dubbed "the next Ronaldo" joins Catalan club from Palmeiras',
    image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Marca',
    time: '12 hours ago'
  }
];

export const mockLeaderboard = [
  {
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    points: 845
  },
  {
    name: 'Sarah Williams',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    points: 782
  },
  {
    name: 'Mike Thompson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    points: 731
  },
  {
    name: 'Emily Davis',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    points: 695
  },
  {
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    points: 654
  }
];

export const mockRewards = [
  {
    id: 1,
    title: 'Premier League Match Tickets',
    image: 'https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    points: 5000,
    type: 'Tickets'
  },
  {
    id: 2,
    title: 'Official Team Jersey',
    image: 'https://images.pexels.com/photos/3755102/pexels-photo-3755102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    points: 3000,
    type: 'Merchandise'
  },
  {
    id: 3,
    title: 'Streaming Service Subscription',
    image: 'https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    points: 1500,
    type: 'Digital'
  },
  {
    id: 4,
    title: 'Limited Edition Football',
    image: 'https://images.pexels.com/photos/3659864/pexels-photo-3659864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    points: 1200,
    type: 'Merchandise'
  }
];

export const mockCommunities = [
  {
    id: 1,
    name: 'Manchester City Fans',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    members: 54320,
    unread: 8
  },
  {
    id: 2,
    name: 'Premier League Talk',
    image: 'https://images.pexels.com/photos/53031/field-sport-ball-competition-53031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    members: 128759,
    unread: 0
  },
  {
    id: 3,
    name: 'Fantasy Football Hub',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    members: 76543,
    unread: 3
  }
];

export const mockPosts = [
  {
    id: 1,
    user: {
      name: 'John Smith',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      verified: true
    },
    content: 'What a game yesterday! Manchester City showed why they are the champions. De Bruyne\'s performance was absolutely world class.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    likes: 342,
    comments: 57,
    time: '2h ago'
  },
  {
    id: 2,
    user: {
      name: 'Sarah Williams',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    content: 'Anyone else thinking Barcelona needs a complete rebuild? Their midfield looked completely lost against Madrid.',
    likes: 128,
    comments: 36,
    time: '4h ago'
  },
  {
    id: 3,
    user: {
      name: 'Football Daily',
      avatar: 'https://images.pexels.com/photos/47343/the-ball-stadion-football-the-pitch-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      verified: true
    },
    content: 'BREAKING: Manchester United appoints new sporting director. Full details coming soon.',
    likes: 567,
    comments: 124,
    time: '6h ago'
  }
];