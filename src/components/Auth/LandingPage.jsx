import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Info, Phone, Globe } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-container" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Outfit', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Top Navbar */}
      <nav style={{
        backgroundColor: 'white',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            border: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
          }}>
            <img src="/marinduque-logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#1e3a8a', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Republic of the Philippines
            </div>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#333', lineHeight: 1.1 }}>
              Marinduque National High School
            </div>
            <div style={{ fontSize: '0.55rem', fontWeight: 500, color: '#666', lineHeight: 1.1 }}>
              Work Immersion Monitoring System
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: '#1e3a8a', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Info size={16} /> About Us
          </button>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: '#1e3a8a', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Phone size={16} /> Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Background Overlay with Image Grid simulation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/mnhs-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
          zIndex: 0
        }} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '2rem' }}
        >
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '0.5rem', 
              borderRadius: '50%', 
              width: '120px', 
              height: '120px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(0,0,0,0.3)',
              border: '4px solid #1e3a8a',
              overflow: 'hidden'
            }}>
              <img src="/marinduque-logo.png" alt="Main Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', lineHeight: 1.1 }}>
            Work Immersion <br /> Monitoring System
          </h1>
          
          <p style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.9, marginBottom: '2.5rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Bridging the gap between education and industry through efficient tracking of student performance and professional growth at Marinduque National High School
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEnter('login')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                backgroundColor: '#2563eb', 
                color: 'white', 
                padding: '1rem 2rem', 
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
              }}
            >
              <User size={20} /> IMMERSION PORTAL
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEnter('login')}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                padding: '1rem 2rem', 
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              <ShieldCheck size={20} /> COORDINATOR PORTAL
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer or Decorative Bar */}
      <div style={{
        height: '10px',
        background: 'linear-gradient(90deg, #1e3a8a, #2563eb, #10b981, #ffd700)',
        zIndex: 10
      }} />
    </div>
  );
};

export default LandingPage;
