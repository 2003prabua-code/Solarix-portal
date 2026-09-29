export const SOLAR_SYSTEMS = [
  {
    id: 'ongrid',
    title: 'On-Grid Grid-Tied System',
    badge: 'High ROI • Zero Battery Overhead',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Feeds directly into your utility network with bidirectional net-metering. Surplus power earns direct DISCOM tariff deductions.',
    baseCostPerKw: 58000,
    hasBattery: false,
    idealFor: 'Urban residences, software tech parks, and commercial enterprises operating during daytime peak hours.',
    highlights: [
      'Fastest capital amortization (3.2 – 4 Years)',
      '100% eligibility for central subsidy (PM Surya Ghar)',
      'Zero battery replacement lifecycle costs'
    ]
  },
  {
    id: 'offgrid',
    title: 'Off-Grid Standalone System',
    badge: '100% Autonomy • Blackout Immune',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb39f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Engineered for complete energy self-sufficiency using high-cycle LiFePO4 battery banks. Operates entirely off the utility grid.',
    baseCostPerKw: 84000,
    hasBattery: true,
    idealFor: 'Agricultural pump houses, rural resorts, remote health clinics, and frequent outage territories.',
    highlights: [
      'Total immunity from grid outages & voltage surges',
      'No net-metering red tape or permission delays',
      'High-depth-of-discharge lithium energy storage'
    ]
  },
  {
    id: 'hybrid',
    title: 'Intelligent Hybrid System',
    badge: 'Smart Export + Emergency Storage',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Synchronizes utility grid net-metering with microsecond battery switchovers, preventing equipment downtime during line trips.',
    baseCostPerKw: 94000,
    hasBattery: true,
    idealFor: 'Premium modern residences, cold storage units, data centers, and multi-specialty hospitals.',
    highlights: [
      'Instantaneous 10ms UPS-grade backup transfer',
      'Monetize excess power while keeping backup reserves',
      'AI-driven peak-tariff load shaving algorithm'
    ]
  }
];

export const CLIENT_REVIEWS = [
  {
    id: 1,
    name: 'Dr. K. Senthil Nathan',
    role: 'Chief Medical Officer',
    location: 'Fairlands, Salem, TN',
    system: '4.5 kW Bifacial On-Grid Array',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Our summer bi-monthly power bill was regularly crossing ₹9,400. After the installation and net-metering integration, our DISCOM bill dropped to ₹160 standard fixed charges. The subsidy reached my account within 35 days.'
  },
  {
    id: 2,
    name: 'V. Sundaramurthy',
    role: 'Managing Director, Sundar Precision Engineering',
    location: 'SIDCO Industrial Estate, Coimbatore',
    system: '45 kW Commercial Rooftop EPC',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Daytime spindle and compressor loads were our highest operational expenditure. Helios deployed a heavy-duty 45 kW array with zero disruption to our machining schedules. We unlocked 40% accelerated depreciation tax relief in year one.'
  },
  {
    id: 3,
    name: 'Anitha Rajendran',
    role: 'Architect & Organic Farm Proprietor',
    location: 'Namakkal Agro Corridor',
    system: '6 kW Hybrid Storage Setup',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Low voltages in our farm sector frequently tripped our borehole pumps. Their hybrid lithium solution balances daytime solar feed with clean voltage regulation. It runs flawlessly without human intervention.'
  }
];