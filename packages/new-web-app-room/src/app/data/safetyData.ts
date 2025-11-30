// Sample safety data for Lagos routes
// In a real app, this would come from a database with real-time updates

interface SafetyAlert {
  message: string;
  location: string;
  time: string;
  upvotes: number;
  downvotes: number;
  severity: 'low' | 'medium' | 'high';
}

interface SafetyTip {
  message: string;
  category: string;
  time: string;
  upvotes: number;
  downvotes: number;
}

interface RouteSafety {
  alerts: SafetyAlert[];
  tips: SafetyTip[];
  rating: number; // 1-5 stars
}

export const safetyData: Record<string, RouteSafety> = {
  'Ikeja-Victoria Island': {
    rating: 4,
    alerts: [
      {
        message: "Heavy traffic around Ojota bridge, expect delays",
        location: "Ojota Bridge",
        time: "2 hours ago",
        upvotes: 12,
        downvotes: 1,
        severity: 'low'
      }
    ],
    tips: [
      {
        message: "Use BRT lanes when available for faster travel",
        category: "Traffic",
        time: "1 day ago",
        upvotes: 25,
        downvotes: 2
      },
      {
        message: "Avoid traveling late at night, especially past 10 PM",
        category: "Safety",
        time: "3 days ago",
        upvotes: 18,
        downvotes: 0
      }
    ]
  },

  'Ikeja-Lekki': {
    rating: 3,
    alerts: [
      {
        message: "Reports of overcharging by some keke drivers around Lekki toll",
        location: "Lekki Toll Gate",
        time: "4 hours ago",
        upvotes: 8,
        downvotes: 2,
        severity: 'medium'
      },
      {
        message: "Road construction causing diversions near Chevron",
        location: "Chevron Area",
        time: "1 day ago",
        upvotes: 15,
        downvotes: 0,
        severity: 'low'
      }
    ],
    tips: [
      {
        message: "Negotiate fare before entering any vehicle",
        category: "General",
        time: "2 days ago",
        upvotes: 22,
        downvotes: 1
      },
      {
        message: "Keep valuables secure, especially phones and bags",
        category: "Security",
        time: "1 week ago",
        upvotes: 35,
        downvotes: 0
      }
    ]
  },

  'Victoria Island-Ajah': {
    rating: 2,
    alerts: [
      {
        message: "Multiple reports of phone snatching along this route",
        location: "Lekki-Ajah Expressway",
        time: "6 hours ago",
        upvotes: 20,
        downvotes: 3,
        severity: 'high'
      },
      {
        message: "Avoid okada rides after 8 PM due to security concerns",
        location: "General Route",
        time: "12 hours ago",
        upvotes: 16,
        downvotes: 1,
        severity: 'high'
      }
    ],
    tips: [
      {
        message: "Travel in groups when possible, especially at night",
        category: "Safety",
        time: "1 day ago",
        upvotes: 28,
        downvotes: 0
      },
      {
        message: "Use ride-hailing apps for better security tracking",
        category: "Transportation",
        time: "3 days ago",
        upvotes: 19,
        downvotes: 2
      }
    ]
  },

  'Surulere-Yaba': {
    rating: 4,
    alerts: [],
    tips: [
      {
        message: "This route is generally safe during daytime hours",
        category: "General",
        time: "2 days ago",
        upvotes: 14,
        downvotes: 0
      },
      {
        message: "Bus stops are well-lit and usually have security presence",
        category: "Infrastructure",
        time: "1 week ago",
        upvotes: 11,
        downvotes: 1
      }
    ]
  },

  'Oshodi-Mile 2': {
    rating: 3,
    alerts: [
      {
        message: "Pickpocketing reported in crowded bus stops",
        location: "Oshodi Bus Terminal",
        time: "8 hours ago",
        upvotes: 9,
        downvotes: 1,
        severity: 'medium'
      }
    ],
    tips: [
      {
        message: "Keep bags in front of you in crowded areas",
        category: "Security",
        time: "2 days ago",
        upvotes: 17,
        downvotes: 0
      },
      {
        message: "Use designated bus stops for safer boarding",
        category: "Transportation",
        time: "4 days ago",
        upvotes: 12,
        downvotes: 1
      }
    ]
  },

  'Ikeja-Ikorodu': {
    rating: 3,
    alerts: [
      {
        message: "Long-distance route - ensure vehicle is roadworthy",
        location: "General Route",
        time: "1 day ago",
        upvotes: 7,
        downvotes: 0,
        severity: 'medium'
      }
    ],
    tips: [
      {
        message: "Carry water and snacks for longer journeys",
        category: "Travel",
        time: "3 days ago",
        upvotes: 13,
        downvotes: 0
      },
      {
        message: "Share your travel details with someone you trust",
        category: "Safety",
        time: "1 week ago",
        upvotes: 21,
        downvotes: 1
      }
    ]
  },

  'Lekki-Ajah': {
    rating: 4,
    alerts: [],
    tips: [
      {
        message: "Short route with good road conditions",
        category: "Infrastructure",
        time: "1 day ago",
        upvotes: 8,
        downvotes: 0
      },
      {
        message: "Multiple transport options available throughout the day",
        category: "Transportation",
        time: "2 days ago",
        upvotes: 6,
        downvotes: 0
      }
    ]
  }
};

// Default safety data for routes not in the database
export const defaultSafety: RouteSafety = {
  rating: 3,
  alerts: [],
  tips: [
    {
      message: "Always negotiate fare before starting your journey",
      category: "General",
      time: "General advice",
      upvotes: 0,
      downvotes: 0
    },
    {
      message: "Keep your belongings secure and stay alert",
      category: "Security",
      time: "General advice",
      upvotes: 0,
      downvotes: 0
    },
    {
      message: "Travel during daylight hours when possible",
      category: "Safety",
      time: "General advice",
      upvotes: 0,
      downvotes: 0
    }
  ]
};
