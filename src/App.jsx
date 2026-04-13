import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import LoginPage from './components/Auth/LoginPage';
import LandingPage from './components/Auth/LandingPage';
import Sidebar from './components/Shared/Sidebar';
import Topbar from './components/Shared/Topbar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import MnhsDashboard from './components/Dashboard/MnhsDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import SupervisorDashboard from './components/Dashboard/SupervisorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PerformanceSection from './components/Sections/PerformanceSection';
import AttendanceSection from './components/Sections/AttendanceSection';
import EvaluationSection from './components/Sections/EvaluationSection';
import ReportsSection from './components/Sections/ReportsSection';
import JournalSection from './components/Sections/JournalSection';
import ResourceSection from './components/Sections/ResourceSection';

function App() {
  const [view, setView] = useState('landing'); // landing, login, dashboard
  const [role, setRole] = useState(null);
  const [activeTab, setActiveTab] = useState('mnhs-dashboard');

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setView('dashboard');
    setActiveTab('mnhs-dashboard');
  };

  const handleLogout = () => {
    setView('login');
    setRole(null);
    setActiveTab('mnhs-dashboard');
  };

  const handleBack = () => {
    if (view === 'dashboard') {
      setView('login');
      setRole(null);
    }
  };

  const renderDashboard = () => {
    switch(role) {
      case 'student': 
        if (activeTab === 'mnhs-dashboard') return <MnhsDashboard />;
        if (activeTab === 'profile') return <StudentDashboard />;
        if (activeTab === 'performance') return <PerformanceSection />;
        if (activeTab === 'attendance') return <AttendanceSection />;
        if (activeTab === 'evaluation') return <EvaluationSection />;
        if (activeTab === 'reports') return <ReportsSection />;
        if (activeTab === 'journal') return <JournalSection />;
        if (activeTab === 'toolkit') return <ResourceSection />;
        return <StudentDashboard />;
      case 'teacher': return <TeacherDashboard />;
      case 'supervisor': return <SupervisorDashboard />;
      case 'admin': return <AdminDashboard />;
      default: return <div className="card"><h1>Dashboard coming soon for this role</h1></div>;
    }
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setActiveTab(newRole === 'student' ? 'profile' : 'mnhs-dashboard');
  };

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' && (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onEnter={() => setView('login')} />
        </motion.div>
      )}

      {view === 'login' && (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      )}

      {view === 'dashboard' && (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="app-container"
        >
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            currentRole={role}
            onRoleChange={handleRoleChange} 
            onLogout={handleLogout} 
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            <Topbar />
            <main className="main-content" style={{ padding: 0, flex: 1, overflowY: 'auto' }}>
              {renderDashboard()}
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
