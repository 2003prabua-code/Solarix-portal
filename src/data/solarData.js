export const IMAGES = {
  ongrid: 'https://images.unsplash.com/photo-1508873696983-2df5293cb39f?auto=format&fit=crop&w=900&q=80',
  offgrid: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80',
  hybrid: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=80',
  technician: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
};

export const SYSTEMS = [
  {
    id: 'ongrid',
    title: 'On-Grid Net-Metered Array',
    badge: 'PM Surya Ghar DBT',
    rate: 58000,
    hasBattery: false,
    image: IMAGES.ongrid,
    desc: 'Surplus kilowatt-hours generated during peak noon automatically turn your bidirectional utility meter backwards.',
    specs: ['Direct TNEB Net-Meter', 'Up to ₹78,000 Subsidy', '3.1 Yrs Capital Amortization']
  },
  {
    id: 'offgrid',
    title: 'Off-Grid Autonomous Microgrid',
    badge: '100% Island Mode',
    rate: 84000,
    hasBattery: true,
    image: IMAGES.offgrid,
    desc: 'Operates completely severed from utility cables. High-cycle LiFePO4 battery banks power heavy agricultural loads 24/7.',
    specs: ['Deep-Cycle Lithium Rack', 'Zero Grid Dependency', 'Heavy Surge Motor Tolerant']
  },
  {
    id: 'hybrid',
    title: 'Intelligent Hybrid Storage',
    badge: 'Export + 10ms UPS',
    rate: 94000,
    hasBattery: true,
    image: IMAGES.hybrid,
    desc: 'The master configuration: exports daytime surplus for tariff deductions while maintaining 10ms UPS reserves.',
    specs: ['Smart Peak Load Shaving', 'Simultaneous Net-Export', 'Emergency Reserve Buffer']
  }
];