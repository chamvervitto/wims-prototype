import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Settings,
  LogOut,
  User,
  Users,
  UserCheck,
  ShieldCheck,
  Edit2,
  BookOpen,
  BookMarked,
  Sparkles
} from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange, currentRole, onRoleChange, onLogout }) => {
  const links = [
    { id: 'mnhs-dashboard', label: 'MNHS DASHBOARD', icon: LayoutDashboard },
    { id: 'profile', label: 'MY PROFILE', icon: User },
    { id: 'performance', label: 'PERFORMANCE', icon: TrendingUp },
    { id: 'attendance', label: 'ATTENDANCE', icon: Calendar },
    { id: 'evaluation', label: 'EVALUATION', icon: CheckSquare },
    { id: 'journal', label: 'WORK JOURNAL', icon: BookOpen },
    { id: 'toolkit', label: 'RESOURCE HUB', icon: BookMarked },
    { id: 'reports', label: 'REPORTS', icon: FileText },
  ];

  const roles = [
    { id: 'student', label: 'STUDENT', icon: User },
    { id: 'teacher', label: 'TEACHER', icon: Users },
    { id: 'supervisor', label: 'SUPERVISOR', icon: UserCheck },
    { id: 'admin', label: 'ADMIN', icon: ShieldCheck },
  ];

  return (
    <aside style={{ 
      width: '260px', 
      background: '#8B0000', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      boxShadow: '8px 0 25px rgba(0,0,0,0.2)',
      color: 'white',
      position: 'relative',
      zIndex: 20
    }}>
      <div style={{ padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '45px', height: '45px', background: 'transparent', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/marinduque-logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '-10px', right: '-12px', color: '#FFD700' }}>
              <Sparkles size={16} fill="#FFD700" />
            </div>
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 950, color: 'white', letterSpacing: '-1px' }}>WIMS</h1>
        </div>
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>Academic Architect V1.0</div>
      </div>

      <nav style={{ flex: 1, marginTop: '1rem', overflowY: 'auto', padding: '0 1rem' }}>
        <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '2px' }}>MAIN NAVIGATION</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => onTabChange(link.id)}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: activeTab === link.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                color: activeTab === link.id ? 'white' : 'rgba(255,255,255,0.6)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <link.icon size={20} color={activeTab === link.id ? '#FFD700' : 'rgba(255,255,255,0.4)'} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.3px' }}>{link.label}</span>
              {activeTab === link.id && (
                <motion.div 
                  layoutId="sidebar-active"
                  style={{ position: 'absolute', left: 0, width: '4px', height: '60%', background: '#FFD700', borderRadius: '0 4px 4px 0' }} 
                />
              )}
            </motion.button>
          ))}
        </div>

        <div style={{ padding: '2.5rem 1.25rem 1rem', fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '2px' }}>ROLES & ACCESS</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {roles.map((r) => (
            <motion.button
              key={r.id}
              onClick={() => onRoleChange(r.id)}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: currentRole === r.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                color: currentRole === r.id ? 'white' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              <r.icon size={18} color={currentRole === r.id ? '#FFD700' : 'rgba(255,255,255,0.3)'} />
              <span style={{ fontSize: '0.75rem', fontWeight: currentRole === r.id ? 800 : 500 }}>{r.label}</span>
              {currentRole === r.id && (
                <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 8px #FFD700' }} />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'transparent',
            borderRadius: '12px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '0.5rem'
          }}
        >
          <Settings size={20} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>SYSTEM SETTINGS</span>
        </button>
        
        <button
          onClick={onLogout}
          style={{
            width: '100%',
            padding: '0.85rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255, 68, 68, 0.1)',
            borderRadius: '12px',
            color: '#FF6B6B',
            fontWeight: 800,
            fontSize: '0.8rem'
          }}
        >
          <LogOut size={20} />
          <span>SIGN OUT</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
