// Sample fare data for Lagos routes
// In a real app, this would come from a database or API

export const fareData: Record<string, Record<string, { min: number; max: number }>> = {
  // Major routes from Ikeja
  'Ikeja-Victoria Island': {
    bus: { min: 300, max: 500 },
    keke: { min: 250, max: 400 },
    okada: { min: 200, max: 350 },
    bolt: { min: 1200, max: 2000 }
  },
  'Ikeja-Lekki': {
    bus: { min: 400, max: 600 },
    keke: { min: 350, max: 500 },
    okada: { min: 300, max: 450 },
    bolt: { min: 1500, max: 2500 }
  },
  'Ikeja-Surulere': {
    bus: { min: 200, max: 350 },
    keke: { min: 150, max: 300 },
    okada: { min: 100, max: 250 },
    bolt: { min: 800, max: 1500 }
  },
  'Ikeja-Yaba': {
    bus: { min: 250, max: 400 },
    keke: { min: 200, max: 350 },
    okada: { min: 150, max: 300 },
    bolt: { min: 1000, max: 1800 }
  },

  // Victoria Island routes
  'Victoria Island-Lekki': {
    bus: { min: 200, max: 350 },
    keke: { min: 150, max: 300 },
    okada: { min: 100, max: 250 },
    bolt: { min: 800, max: 1500 }
  },
  'Victoria Island-Ikoyi': {
    bus: { min: 100, max: 200 },
    keke: { min: 80, max: 150 },
    okada: { min: 50, max: 120 },
    bolt: { min: 500, max: 1000 }
  },
  'Victoria Island-Ajah': {
    bus: { min: 300, max: 500 },
    keke: { min: 250, max: 400 },
    okada: { min: 200, max: 350 },
    bolt: { min: 1200, max: 2000 }
  },

  // Mainland routes
  'Surulere-Yaba': {
    bus: { min: 150, max: 250 },
    keke: { min: 100, max: 200 },
    okada: { min: 80, max: 150 },
    bolt: { min: 600, max: 1200 }
  },
  'Yaba-Gbagada': {
    bus: { min: 200, max: 300 },
    keke: { min: 150, max: 250 },
    okada: { min: 100, max: 200 },
    bolt: { min: 800, max: 1400 }
  },
  'Gbagada-Ketu': {
    bus: { min: 100, max: 200 },
    keke: { min: 80, max: 150 },
    okada: { min: 50, max: 120 },
    bolt: { min: 500, max: 1000 }
  },

  // Oshodi connections
  'Oshodi-Mile 2': {
    bus: { min: 150, max: 250 },
    keke: { min: 100, max: 200 },
    okada: { min: 80, max: 150 },
    bolt: { min: 600, max: 1200 }
  },
  'Oshodi-Alaba': {
    bus: { min: 200, max: 350 },
    keke: { min: 150, max: 300 },
    okada: { min: 100, max: 250 },
    bolt: { min: 800, max: 1500 }
  },
  'Oshodi-Festac': {
    bus: { min: 250, max: 400 },
    keke: { min: 200, max: 350 },
    okada: { min: 150, max: 300 },
    bolt: { min: 1000, max: 1800 }
  },

  // Outer Lagos routes
  'Ikeja-Ikorodu': {
    bus: { min: 400, max: 600 },
    keke: { min: 350, max: 500 },
    okada: { min: 300, max: 450 },
    bolt: { min: 1500, max: 2500 }
  },
  'Victoria Island-Epe': {
    bus: { min: 500, max: 800 },
    keke: { min: 400, max: 650 },
    okada: { min: 350, max: 550 },
    bolt: { min: 2000, max: 3500 }
  },
  'Ikeja-Badagry': {
    bus: { min: 600, max: 900 },
    keke: { min: 500, max: 750 },
    okada: { min: 400, max: 650 },
    bolt: { min: 2500, max: 4000 }
  },

  // Additional popular routes
  'Lekki-Ajah': {
    bus: { min: 150, max: 250 },
    keke: { min: 100, max: 200 },
    okada: { min: 80, max: 150 },
    bolt: { min: 600, max: 1200 }
  },
  'Mushin-Agege': {
    bus: { min: 200, max: 300 },
    keke: { min: 150, max: 250 },
    okada: { min: 100, max: 200 },
    bolt: { min: 800, max: 1400 }
  },
  'Apapa-Mile 2': {
    bus: { min: 100, max: 200 },
    keke: { min: 80, max: 150 },
    okada: { min: 50, max: 120 },
    bolt: { min: 500, max: 1000 }
  }
};

// Default fare structure for routes not in the data
export const defaultFares = {
  bus: { min: 200, max: 400 },
  keke: { min: 150, max: 300 },
  okada: { min: 100, max: 250 },
  bolt: { min: 800, max: 1500 }
};
