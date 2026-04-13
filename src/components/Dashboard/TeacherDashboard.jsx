import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Filter, 
  ChevronRight, 
  Check, 
  X, 
  MessageSquare,
  BarChart3,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherDashboard = () => {
  const [pendingJournals, setPendingJournals] = useState([
    { id: 1, student: 'Juan Dela Cruz', strand: 'STEM', title: 'Network Setup', date: 'Mar 23', summary: 'Configured local area network for the office.' },
    { id: 2, student: 'Maria Clara', strand: 'ABM', title: 'Financial Audit', date: 'Mar 23', summary: 'Assisted in reconciling monthly expenses.' },
    { id: 3, student: 'Leonor Rivera', strand: 'HUMSS', title: 'Case Study Research', date: 'Mar 22', summary: 'Interviewed local residents for the social study.' },
  ]);

  const students = [
    { name: 'Juan Dela Cruz', strand: 'STEM', company: 'ABC Tech', hours: 64, grade: 92, status: 'On-Track' },
    { name: 'Maria Clara', strand: 'ABM', company: 'Global Log', hours: 40, grade: 88, status: 'Delayed' },
    { name: 'Crisostomo Ibarra', strand: 'STEM', company: 'DFA Office', hours: 80, grade: 95, status: 'Completed' },
    { name: 'Padre Damaso', strand: 'TVL', company: 'MNHS Lab', hours: 12, grade: 75, status: 'Critical' },
  ];

  const handleApprove = (id) => {
    setPendingJournals(pendingJournals.filter(j => j.id !== id));
  };

  return (
    <div style={{ padding: '2rem 3rem', background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#800000', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            COORDINATOR MONITORING HUB
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1px' }}>Immersion Oversight</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
           <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '12px', color: '#94A3B8' }} size={18} />
              <input 
                type="text" 
                placeholder="Find student..." 
                style={{ padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', background: 'white', fontWeight: 600, width: '240px' }}
              />
           </div>
           <button style={{ background: '#800000', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontWeight: 800, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Filter size={18} /> Filter List
           </button>
        </div>
      </header>

      {/* Top Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {[
          { label: 'MONITORED STUDENTS', val: '156', icon: Users, color: '#800000' },
          { label: 'AVERAGE PROGRESS', val: '72%', icon: BarChart3, color: '#3B82F6' },
          { label: 'HOURS VERIFIED', val: '12,480', icon: Clock, color: '#10B981' },
          { label: 'AT-RISK (ALERTS)', val: '14', icon: AlertCircle, color: '#EF4444' },
        ].map((stat, i) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={i} 
            style={{ background: 'white', padding: '2rem 1.5rem', borderRadius: '24px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', borderTop: `4px solid ${stat.color}` }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px' }}>{stat.label}</div>
                <stat.icon size={20} color={stat.color} />
             </div>
             <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e293b' }}>{stat.val}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        {/* Left: Overall Student Performance Table */}
        <div style={{ background: 'white', borderRadius: '32px', border: '1px solid #EDF2F7', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
           <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e293b' }}>Student Performance Matrix</h3>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#800000', cursor: 'pointer' }}>Generate PDF Report</div>
           </div>
           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid #F1F5F9', background: 'white' }}>
                  <th style={{ padding: '1.25rem 2rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Student / Strand</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Log Progress</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Grade</th>
                  <th style={{ padding: '1.25rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '1.5rem 2rem' }}>
                      <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700 }}>{s.strand} • {s.company}</div>
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                       <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#800000', marginBottom: '0.5rem' }}>{s.hours} / 80 hrs</div>
                       <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${(s.hours/80)*100}%`, height: '100%', background: s.hours >= 80 ? '#10B981' : (s.hours < 40 ? '#EF4444' : '#800000'), borderRadius: '3px' }} />
                       </div>
                    </td>
                    <td style={{ padding: '1.5rem', fontWeight: 800, color: '#1e293b' }}>{s.grade}%</td>
                    <td style={{ padding: '1.5rem' }}>
                       <span style={{ 
                         padding: '6px 14px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase',
                         background: s.status === 'Completed' ? '#ECFDF5' : (s.status === 'Critical' ? '#FEF2F2' : '#F1F5F9'),
                         color: s.status === 'Completed' ? '#065F46' : (s.status === 'Critical' ? '#991B1B' : '#475569')
                       }}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>

        {/* Right: Approval Queue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '32px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e293b' }}>Approval Queue</h3>
                <span style={{ background: '#800000', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 900 }}>{pendingJournals.length} NEW</span>
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <AnimatePresence>
                  {pendingJournals.map((journal) => (
                    <motion.div 
                      key={journal.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '20px', border: '1px solid #F1F5F9' }}
                    >
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#800000', textTransform: 'uppercase' }}>{journal.student} ({journal.strand})</div>
                            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginTop: '2px' }}>{journal.title}</div>
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700 }}>{journal.date}</div>
                       </div>
                       <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem', fontWeight: 500 }}>"{journal.summary}"</p>
                       <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleApprove(journal.id)}
                            style={{ flex: 1, padding: '0.75rem', background: '#800000', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                          >
                            <Check size={16} /> Approve
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ padding: '0.75rem', background: '#F1F5F9', color: '#64748B', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                          >
                            <X size={16} />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ padding: '0.75rem', background: '#F1F5F9', color: '#64748B', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                          >
                            <MessageSquare size={16} />
                          </motion.button>
                       </div>
                    </motion.div>
                  ))}
                  {pendingJournals.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94A3B8' }}>
                      <CheckCircle size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                      <div style={{ fontWeight: 800 }}>Queue Clean!</div>
                      <div style={{ fontSize: '0.85rem' }}>All journals have been processed.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #800000 0%, #300000 100%)', padding: '2rem', borderRadius: '32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
             <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>Teacher's Quick Action</h4>
             <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>Finalize all student grades for Week 4 and generate progress certificates.</p>
             <button style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '14px', color: 'white', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
               Batch Process All <ArrowUpRight size={18} />
             </button>
             <Users size={120} style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
