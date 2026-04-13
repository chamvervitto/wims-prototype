import React from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Topbar = () => {
  return (
    <header style={{ 
      height: '70px', 
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '0 3rem',
      borderBottom: '1px solid #EDF2F7',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#1A202C', letterSpacing: '0.5px' }}>
          MNHS WORK IMMERSION
        </h2>
        <div style={{ position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#A0AEC0' }} />
          <input 
            type="text" 
            placeholder="Search records..." 
            style={{ 
              background: '#F1F5F9', 
              border: 'none', 
              padding: '0.6rem 1rem 0.6rem 2.5rem', 
              borderRadius: '8px', 
              fontSize: '0.8rem', 
              width: '250px',
              outline: 'none'
            }} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ position: 'relative', cursor: 'pointer', padding: '8px', borderRadius: '10px', transition: 'background 0.2s' }}>
          <Bell size={20} color="#4A5568" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ position: 'absolute', top: '6px', right: '6px', width: '10px', height: '10px', background: '#E53E3E', borderRadius: '50%', border: '2px solid white' }} 
          />
        </div>
        
        <motion.div 
          whileHover={{ background: '#F8FAFC' }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', padding: '6px 12px', borderRadius: '14px', border: '1px solid transparent', transition: 'all 0.3s ease' }}
        >
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#1A202C', lineHeight: 1 }}>Juan Dela Cruz</div>
            <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 700, marginTop: '2px' }}>Student • Grade 12</div>
          </div>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, #E2E8F0, #CBD5E0)',
            border: '2px solid white',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juan" alt="avatar" style={{ width: '100%' }} />
          </div>
          <ChevronDown size={14} color="#94A3B8" />
        </motion.div>
      </div>
    </header>
  );
};

export default Topbar;
