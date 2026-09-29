import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sun, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Calculator, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp,
  Activity,
  Play,
  RotateCw,
  Cpu,
  Check,
  X
} from 'lucide-react';

const IMAGES = {
  // 1. On-Grid: Working high-res modern residential solar panels on a tiled roof
  ongrid: 'https://images.unsplash.com/photo-1508873696983-2df5293cb39f?auto=format&fit=crop&w=900&q=80',
  // 2. Off-Grid: Rural open field ground-mounted solar system
  offgrid: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80',
  // 3. Hybrid: Aerial commercial rooftop solar grid on a facility
  hybrid: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
  // Technical Inspection Photo
  technician: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
};

const SYSTEMS = [
  {
    id: 'ongrid',
    title: 'On-Grid Net-Metered Array',
    badge: 'PM Surya Ghar DBT',
    rate: 58000,
    image: IMAGES.ongrid,
    desc: 'Surplus kilowatt-hours generated during peak noon automatically turn your bidirectional utility meter backwards.',
    specs: ['Direct TNEB Net-Meter', 'Up to ₹78,000 Subsidy', '3.1 Yrs Capital Amortization']
  },
  {
    id: 'offgrid',
    title: 'Off-Grid Autonomous Microgrid',
    badge: '100% Island Mode',
    rate: 84000,
    image: IMAGES.offgrid,
    desc: 'Operates completely severed from utility cables. High-cycle LiFePO4 battery banks power heavy agricultural loads 24/7.',
    specs: ['Deep-Cycle Lithium Rack', 'Zero Grid Dependency', 'Heavy Surge Motor Tolerant']
  },
  {
    id: 'hybrid',
    title: 'Intelligent Hybrid Storage',
    badge: 'Export + 10ms UPS',
    rate: 94000,
    image: IMAGES.hybrid,
    desc: 'The master configuration: exports daytime surplus for tariff deductions while maintaining 10ms UPS reserves.',
    specs: ['Smart Peak Load Shaving', 'Simultaneous Net-Export', 'Emergency Reserve Buffer']
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState('ongrid');
  const [monthlyBill, setMonthlyBill] = useState(5500);
  const [roofArea, setRoofArea] = useState(500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '' });
  
  // Motion Graphic Pulse Counter
  const [ticker, setTicker] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTicker((t) => (t + 1) % 100), 50);
    return () => clearInterval(timer);
  }, []);

  const activeSystem = useMemo(() => {
    return SYSTEMS.find(s => s.id === selectedId) || SYSTEMS[0];
  }, [selectedId]);

  const ledger = useMemo(() => {
    const units = Math.round(monthlyBill / 7.8);
    const maxKwBySpace = Math.max(1, Math.floor(roofArea / 80));
    const idealKw = Math.max(1, Math.round((units / 120) * 10) / 10);
    const kw = Math.min(idealKw, maxKwBySpace);
    const requiredSpace = kw * 80;
    const gross = kw * activeSystem.rate;
    const subsidy = activeSystem.id === 'ongrid' ? (kw >= 3 ? 78000 : kw === 2 ? 60000 : 30000) : 0;
    const net = Math.max(0, gross - subsidy);
    const annualSavings = Math.round(kw * 120 * 12 * 7.8);
    const payback = annualSavings > 0 ? (net / annualSavings).toFixed(1) : '3.2';
    const lifetimeSavings = (annualSavings * 25) - net;

    return { kw, requiredSpace, gross, subsidy, net, annualSavings, payback, lifetimeSavings };
  }, [monthlyBill, roofArea, activeSystem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#121816] font-sans antialiased selection:bg-[#E2DACB]">
      
      {/* ─── 1. TOP UTILITY HEADER ─────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-amber-300 flex items-center justify-center font-bold shadow-md">
              <Sun className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-[#1B4332] block leading-none">HELIOS</span>
              <span className="text-[10px] tracking-widest text-slate-500 font-mono uppercase block mt-1">Solar Dynamics</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#video-stage" className="hover:text-[#1B4332] transition">Atmosphere</a>
            <a href="#architectures" className="hover:text-[#1B4332] transition">Topologies</a>
            <a href="#motion-grid" className="hover:text-[#1B4332] transition">Power Flow</a>
            <a href="#calculator" className="hover:text-[#1B4332] transition">Yield Desk</a>
            <a href="#credentials" className="hover:text-[#1B4332] transition">Verification</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-100 font-extrabold px-6 py-3 rounded-full text-xs transition shadow-sm flex items-center gap-2"
          >
            <span>Book Site Survey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ─── 2. CINEMATIC VIDEO & HERO SHOWCASE ───────────────────── */}
      <section id="video-stage" className="relative pt-8 pb-16 border-b border-[#E8E1D5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline & Action Desk */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#1B4332] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>MNRE Approved • PM Surya Ghar ₹78,000 Subsidy Active</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121816] leading-[1.08]">
                Architectural solar. <br />
                <span className="text-[#2D6A4F] italic font-serif font-normal">Engineered to cut bills by 95%.</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Transition to clean energy with Tier-1 bifacial TOPCon monocrystalline modules, German inverters, and certified bidirectional TNEB net-metering.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#architectures" 
                  className="bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-200 font-extrabold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
                >
                  <span>Select Solar Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="#calculator" 
                  className="bg-white hover:bg-slate-50 text-[#121816] border border-[#DFD6C7] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-xs"
                >
                  Open ROI Desk
                </a>
              </div>

              {/* Data Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8E1D5]">
                <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                  <div className="text-xl font-extrabold text-[#1B4332] font-mono">4.2+ MW</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Grid Connected</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                  <div className="text-xl font-extrabold text-[#2D6A4F] font-mono">3.2 Yrs</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Avg Payback</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                  <div className="text-xl font-extrabold text-[#121816] font-mono">25 Yrs</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Linear SLA</div>
                </div>
              </div>
            </div>

           {/* Right: Unbreakable Local Cinema Player */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-[#1B4332]/25 shadow-2xl bg-[#0B1510] relative group">
                
                {/* 16:9 Video Viewport */}
                <div className="aspect-video w-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    className="w-full h-full object-cover pointer-events-none select-none"
                  >
                    <source src="/solar.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Top Floating Telemetry Overlay */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] flex items-center gap-2 pointer-events-none z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>LOCAL FEED // 4K 60FPS</span>
                  </div>
                </div>

                {/* Video Info Bar */}
                <div className="p-4 bg-[#12231A] text-white flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <div className="text-xs font-bold font-mono text-emerald-300">AERIAL RECON // SALEM SUBSTATION ARRAY</div>
                      <div className="text-[10px] text-slate-400 font-mono">550W Bifacial Commercial Commissioning</div>
                    </div>
                  </div>
                  <div className="text-right font-mono text-[11px] text-amber-300 font-bold">
                    ACTIVE FEED
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 3. INTERACTIVE 3-TOPOLOGY SELECTOR ───────────────────── */}
      <section id="architectures" className="py-20 border-b border-[#E8E1D5] bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DFD6C7] pb-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Phase 01 // Configuration</span>
              <h2 className="text-3xl font-extrabold text-[#1A201E] tracking-tight">Choose Your Solar Topology</h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Select one of the 3 certified setups below to dynamically synchronize the power flow diagram and financial calculation desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SYSTEMS.map((s) => {
              const isSelected = selectedId === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between bg-white relative group ${
                    isSelected 
                      ? 'border-[#1B4332] ring-2 ring-[#1B4332] shadow-2xl scale-[1.01]' 
                      : 'border-[#DFD6C7] hover:border-slate-400 shadow-sm'
                  }`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Unique fallback for each individual card type
                        if (s.id === 'ongrid') {
                          e.target.src = 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80';
                        } else if (s.id === 'offgrid') {
                          e.target.src = 'https://images.unsplash.com/photo-1545208942-e1c5c91152c7?auto=format&fit=crop&w=900&q=80';
                        } else {
                          e.target.src = 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80';
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <span className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md text-[#1B4332] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-xs">
                      {s.badge}
                    </span>

                    {isSelected && (
                      <span className="absolute bottom-4 right-4 bg-[#1B4332] text-amber-200 text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> ACTIVE SETUP
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-xl text-[#1A201E]">{s.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>

                      <div className="space-y-2 pt-3 border-t border-[#F2ECE1] text-xs">
                        {s.specs.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase block">EPC Benchmark</span>
                        <span className="font-bold text-[#1B4332] text-base">₹{s.rate.toLocaleString('en-IN')}/kW</span>
                      </div>
                      <span className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                        isSelected ? 'bg-[#1B4332] text-amber-200' : 'bg-[#F4EFE6] text-slate-700 group-hover:bg-[#EAE2D3]'
                      }`}>
                        {isSelected ? 'Configuring Below' : 'Select'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 4. DYNAMIC MOTION GRAPHIC: POWER DISTRIBUTION FLOW ────── */}
      <section id="motion-grid" className="py-20 border-b border-[#E8E1D5] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Real-Time Circuit</span>
            <h2 className="text-3xl font-extrabold text-[#1A201E]">Dynamic Power Flow Telemetry</h2>
            <p className="text-xs text-slate-600">Simulating electricity generation, inverter inversion, and grid feedback for your active setup.</p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#12231A] text-white border border-[#234433] shadow-2xl relative overflow-hidden">
            
            {/* Animated Motion Vectors (SVG) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              
              {/* Node 1: Solar Array */}
              <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/30 text-center space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
                  <Sun className="w-6 h-6 animate-spin-slow" />
                </div>
                <div className="font-bold text-sm">Solar Rooftop Array</div>
                <div className="text-[11px] font-mono text-emerald-400">Yield: {ledger.kw} kW Generating</div>
                <div className="text-[10px] text-slate-400">Direct Current (DC)</div>
              </div>

              {/* Node 2: Smart MPPT Inverter */}
              <div className="p-5 rounded-2xl bg-black/40 border border-teal-500/30 text-center space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-teal-400/20 text-teal-400 flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 animate-bounce" />
                </div>
                <div className="font-bold text-sm">Hybrid Smart Inverter</div>
                <div className="text-[11px] font-mono text-teal-300">230V Pure Sine Wave</div>
                <div className="text-[10px] text-slate-400">Efficiency: 98.7%</div>
              </div>

              {/* Node 3: Home / Industrial Facility Load */}
              <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 text-center space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="font-bold text-sm">Facility Loads Active</div>
                <div className="text-[11px] font-mono text-amber-300">Loads: 100% Offset</div>
                <div className="text-[10px] text-slate-400">Zero Grid Import</div>
              </div>

              {/* Node 4: Bidirectional Net-Meter */}
              <div className="p-5 rounded-2xl bg-black/40 border border-sky-500/30 text-center space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center mx-auto">
                  <RotateCw className="w-6 h-6 animate-spin" />
                </div>
                <div className="font-bold text-sm">Bidirectional Meter</div>
                <div className="text-[11px] font-mono text-sky-300">
                  {activeSystem.hasBattery ? 'Battery Bank Charging' : 'Grid Net-Exporting'}
                </div>
                <div className="text-[10px] text-slate-400">Tariff Deductions Live</div>
              </div>

            </div>

            {/* Circuit Line Pulse Indicator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Circuit Pulse: <strong className="text-white">Active Feed Nominal</strong></span>
              </div>
              <div>Harmonic Distortion (THD): <strong className="text-emerald-400">&lt; 2.1%</strong></div>
              <div>DISCOM Sync Phase: <strong className="text-amber-300">415V Three-Phase Locked</strong></div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 5. INTERACTIVE FINANCIAL SIZING LEDGER ────────────────── */}
      <section id="calculator" className="py-20 border-b border-[#E8E1D5] bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DFD6C7] shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EFE8DC]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#2D6A4F] font-bold block">Phase 02 // Financial Engineering</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A201E]">Interactive ROI Desk: {activeSystem.title}</h3>
              </div>
              <div className="text-xs font-mono text-slate-600 bg-[#FAF7F2] px-4 py-2 rounded-xl border border-[#DFD6C7]">
                Terrace Allocation: <strong className="text-[#1B4332]">~{ledger.requiredSpace} sq. ft.</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders Input */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD6C7] space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>Average Monthly Electricity Bill:</span>
                    <span className="font-mono text-2xl text-[#1B4332]">₹{monthlyBill.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="35000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-[#E2DACB] rounded-lg appearance-none cursor-pointer accent-[#1B4332]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>₹1,000 / mo</span>
                    <span>₹18,000 / mo</span>
                    <span>₹35,000+ / mo</span>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD6C7] space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>Available Shadow-Free Roof Space:</span>
                    <span className="font-mono text-2xl text-[#1B4332]">{roofArea} sq. ft.</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2500"
                    step="50"
                    value={roofArea}
                    onChange={(e) => setRoofArea(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-[#E2DACB] rounded-lg appearance-none cursor-pointer accent-[#1B4332]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>100 sq. ft.</span>
                    <span>1,200 sq. ft.</span>
                    <span>2,500 sq. ft.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EDF4F0] border border-[#C5DDD0] text-xs text-[#1B4332] flex items-center justify-between">
                  <span className="font-semibold">Calculated Monthly Generation:</span>
                  <span className="font-mono font-bold text-sm">{Math.round(ledger.kw * 120)} Units (kWh)</span>
                </div>
              </div>

              {/* Financial Box */}
              <div className="lg:col-span-6 bg-[#162B21] text-white p-8 rounded-3xl space-y-5 font-mono text-xs shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase">Recommended Plant Capacity</span>
                    <div className="text-3xl font-extrabold text-amber-300">{ledger.kw} kW Array</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase">Amortization</span>
                    <div className="text-xl font-bold text-emerald-400">{ledger.payback} Years</div>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Gross Turnkey Project Cost:</span>
                    <span>₹{ledger.gross.toLocaleString('en-IN')}</span>
                  </div>

                  {ledger.subsidy > 0 ? (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Central Govt Subsidy (Surya Ghar DBT):</span>
                      <span>- ₹{ledger.subsidy.toLocaleString('en-IN')}</span>
                    </div>
                  ) : (
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Central Subsidy:</span>
                      <span>Applicable for on-grid domestic meters</span>
                    </div>
                  )}

                  <div className="flex justify-between py-2 border-y border-white/15 text-sm font-bold">
                    <span>Net Out-of-Pocket Investment:</span>
                    <span className="text-amber-300">₹{ledger.net.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Yearly Electricity Savings:</span>
                    <span className="text-white font-bold">₹{ledger.annualSavings.toLocaleString('en-IN')} / yr</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>25-Year Cumulative Yield:</span>
                    <span className="text-emerald-400 font-bold">₹{ledger.lifetimeSavings.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-[#121A15] font-extrabold py-4 rounded-xl transition text-center tracking-tight text-xs uppercase shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Free Inspection For {ledger.kw} kW System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── 6. TECHNICAL VERIFICATION & CREDENTIALS ───────────────── */}
      <section id="credentials" className="py-20 bg-[#FAF7F2] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Engineered Precision</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A201E] tracking-tight">
                Designed By Power Systems Specialists.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most subcontracted systems fail to generate advertised units due to poor azimuth tilt, DC line drops, or substandard earthing pits. Helios supervises every deployment directly with certified electrical engineers using hot-dip galvanized mounting structures rated for 170 km/h wind shear.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                  <div className="text-2xl font-extrabold text-[#1B4332] font-mono">4.2+ MW</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Grid Energized</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                  <div className="text-2xl font-extrabold text-[#1B4332] font-mono">1,250+</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Sites Active</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                  <div className="text-2xl font-extrabold text-[#1B4332] font-mono">25 Yrs</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Linear SLA</div>
                </div>
              </div>
            </div>

            {/* Photo: Field Verification */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#DFD6C7] shadow-xl">
              <img 
                src={IMAGES.technician} 
                alt="Solar Technicians Conducting Field Testing" 
                className="w-full h-80 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% DISCOM Net-Metering Feasibility Clearance</span>
                </div>
                <p className="text-[11px] text-slate-200">
                  We handle the state portal paperwork, physical DISCOM safety inspections, and bidirectional meter synchronization with zero contractor friction.
                </p>
              </div>
            </div>

          </div>

          {/* Customer Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#DFD6C7] space-y-3 shadow-xs">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "Our bi-monthly summer bill in Salem was regularly crossing ₹9,400. After the 4.5 kW on-grid setup was commissioned, our DISCOM bill dropped to ₹160 standard fixed charges. The ₹78,000 subsidy arrived in my account within 35 days."
              </p>
              <div className="font-bold text-xs text-[#1A201E]">Dr. K. Senthil Nathan • <span className="font-normal text-slate-500">Fairlands, Salem, TN</span></div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DFD6C7] space-y-3 shadow-xs">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "We run an auto precision components milling facility with high daytime spindle loads. Helios installed a 35 kW commercial array with zero downtime to our machining floor. Operating energy costs fell by nearly 75% immediately."
              </p>
              <div className="font-bold text-xs text-[#1A201E]">Murugan Precision Engineering • <span className="font-normal text-slate-500">SIDCO, Coimbatore</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── MODAL LEAD SURVEY FORM ───────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-md w-full p-8 border border-[#DFD6C7] shadow-2xl relative space-y-5">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-mono text-[#2D6A4F] uppercase font-bold">On-Site Dispatch</span>
              <h3 className="text-xl font-extrabold text-[#1A201E] mt-0.5">Book Rooftop Feasibility Audit</h3>
              <p className="text-xs text-slate-600">Tailored for {ledger.kw} kW {activeSystem.title}</p>
            </div>

            {submitted ? (
              <div className="p-6 text-center space-y-2 bg-[#EDF4F0] rounded-2xl border border-[#C5DDD0]">
                <Check className="w-8 h-8 text-[#2D6A4F] mx-auto" />
                <h4 className="font-bold text-sm text-[#1B4332]">Survey Dispatched Successfully</h4>
                <p className="text-xs text-slate-600">A structural engineer will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. S. Ramanathan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Contact *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98400 12345"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">City / Region *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Salem, Tamil Nadu"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-200 font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition mt-2 shadow-sm"
                >
                  Confirm Free Engineering Survey
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─── 7. FOOTER ─────────────────────────────────────────────── */}
      <footer className="py-10 bg-[#FAF7F2] text-xs font-mono text-slate-500 border-t border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 HELIOS Solar Dynamics • Clean Energy EPC Standard</div>
          <div>Salem • Coimbatore • Namakkal</div>
        </div>
      </footer>

    </div>
  );
}