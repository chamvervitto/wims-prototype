import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, Award, Target, Zap } from 'lucide-react';

const PerformanceSection = () => {
  const competencies = [
    { label: 'Technical Proficiency', level: 92, drift: '+2.5%', color: '#800000' },
    { label: 'Work Ethics', level: 98, drift: '+1.0%', color: '#800000' },
    { label: 'Initiative & Creativity', level: 85, drift: '+5.2%', color: '#800000' },
    { label: 'Team Collaboration', level: 95, drift: '0.0%', color: '#800000' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C' }}>Performance Analytics</h2>
        <p style={{ color: '#718096', fontSize: '0.9rem' }}>Comprehensive breakdown of your immersion competencies and academic growth.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'OVERALL RATING', val: '94.8%', icon: Award, sub: 'GRADE: OUTSTANDING' },
          { label: 'COMPETENCY SCORE', val: 'A+', icon: Zap, sub: 'TOP 5% OF STRAND' },
          { label: 'GOAL COMPLETION', val: '12/15', icon: Target, sub: '3 TARGETS REMAINING' },
        ].map((card, i) => (
          <div key={i} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #800000' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#A0AEC0', letterSpacing: '1px', marginBottom: '1rem' }}>{card.label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
               <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>{card.val}</h3>
               <card.icon size={28} color="#800000" opacity={0.3} />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#800000', fontWeight: 800 }}>{card.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #EDF2F7', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '2rem' }}>Competency Mastery Matrix</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {competencies.map((comp, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>{comp.label}</span>
                  <span style={{ fontSize: '0.7rem', color: '#2EB85C', fontWeight: 900 }}>{comp.drift}</span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#800000' }}>{comp.level}%</span>
              </div>
              <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '4px' }}>
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${comp.level}%` }} 
                  transition={{ duration: 1 }} 
                  style={{ height: '100%', background: comp.color, borderRadius: '4px' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.5rem' }}>Skill Proficiency Evolution</h3>
        <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 2rem' }}>
          {[65, 78, 82, 94, 91, 98].map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: `${h}%` }} 
                style={{ width: '30px', background: '#800000', borderRadius: '6px 6px 0 0', opacity: 0.1 + (i * 0.15) }} 
              />
              <span style={{ fontSize: '0.65rem', color: '#999', marginTop: '1rem', fontWeight: 700 }}>MONTH {i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
