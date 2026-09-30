import React, { useState, useMemo } from 'react';
import { SYSTEMS } from './data/solarData';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import Topologies from './components/Topologies';
import PowerFlow from './components/PowerFlow';
import Calculator from './components/Calculator';
import Credentials from './components/Credentials';
import SurveyModal from './components/SurveyModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedId, setSelectedId] = useState('ongrid');
  const [monthlyBill, setMonthlyBill] = useState(5500);
  const [roofArea, setRoofArea] = useState(500);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#121816] font-sans antialiased selection:bg-[#E2DACB]">
      <Navbar onOpenSurvey={() => setIsModalOpen(true)} />
      <HeroVideo />
      <Topologies 
        systems={SYSTEMS} 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
      />
      <PowerFlow 
        kw={ledger.kw} 
        activeSystem={activeSystem} 
      />
      <Calculator 
        monthlyBill={monthlyBill}
        setMonthlyBill={setMonthlyBill}
        roofArea={roofArea}
        setRoofArea={setRoofArea}
        ledger={ledger}
        activeSystem={activeSystem}
        onOpenSurvey={() => setIsModalOpen(true)}
      />
      <Credentials />
      <SurveyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        targetKw={ledger.kw}
        systemTitle={activeSystem.title}
      />
      <Footer />
    </div>
  );
}