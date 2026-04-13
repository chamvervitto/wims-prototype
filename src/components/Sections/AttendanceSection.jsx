import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, AlertTriangle, CheckCircle2, UserCheck, Play, Square, Download } from 'lucide-react';

const AttendanceSection = () => {
  const [attendanceLog, setAttendanceLog] = useState([
    { date: 'March 18, 2026', signin: '07:45 AM', signout: '05:12 PM', status: 'Present', hours: 9, notes: '-' },
    { date: 'March 17, 2026', signin: '08:02 AM', signout: '05:30 PM', status: 'Late', hours: 9, notes: 'Traffic delay' },
    { date: 'March 16, 2026', signin: '07:55 AM', signout: '05:05 PM', status: 'Present', hours: 9, notes: '-' },
    { date: 'March 15, 2026', signin: '07:42 AM', signout: '05:22 PM', status: 'Present', hours: 9, notes: '-' },
  ]);

  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAttendance = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    if (!isClockedIn) {
      // Clock In
      const newEntry = {
        date: dateStr,
        signin: timeStr,
        signout: null,
        status: now.getHours() >= 8 ? 'Late' : 'Present',
        hours: 0,
        notes: '-'
      };
      setAttendanceLog([newEntry, ...attendanceLog]);
      setIsClockedIn(true);
    } else {
      // Clock Out
      const updatedLog = [...attendanceLog];
      updatedLog[0].signout = timeStr;
      updatedLog[0].hours = 8.5; // Simulated duration
      setAttendanceLog(updatedLog);
      setIsClockedIn(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Attendance Header & Clock-in Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', background: 'white', padding: '2.5rem', borderRadius: '32px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>Attendance Tracking</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ padding: '0.4rem 1rem', background: '#F1F5F9', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 800, color: '#475569', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={16} /> {currentTime.toLocaleTimeString()}
             </div>
             <div style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600 }}>Official MNHS Immersion Hours</div>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAttendance}
          style={{ 
            background: isClockedIn ? '#EF4444' : '#800000', 
            color: 'white', 
            padding: '1.25rem 2.5rem', 
            borderRadius: '20px', 
            fontSize: '1.1rem', 
            fontWeight: 900, 
            border: 'none', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: isClockedIn ? '0 10px 20px rgba(239, 68, 68, 0.2)' : '0 10px 20px rgba(128, 0, 0, 0.2)'
          }}
        >
          {isClockedIn ? <Square size={22} fill="white" /> : <Play size={22} fill="white" />}
          {isClockedIn ? 'END SHIFT (TIME OUT)' : 'START SHIFT (TIME IN)'}
        </motion.button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {[
          { label: 'WORK DAYS', val: attendanceLog.length, icon: Calendar, color: '#800000' },
          { label: 'TOTAL HOURS', val: '512h', icon: Clock, color: '#800000' },
          { label: 'LATE ARRIVALS', val: attendanceLog.filter(l => l.status === 'Late').length, icon: AlertTriangle, color: '#F9B115' },
          { label: 'CONSISTENCY', val: '98%', icon: CheckCircle2, color: '#2EB85C' },
        ].map((card, i) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={i} 
            style={{ background: 'white', padding: '2rem 1.5rem', borderRadius: '24px', border: '1px solid #EDF2F7', borderLeft: `6px solid ${card.color}`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px' }}>{card.label}</div>
                <card.icon size={20} color={card.color} />
             </div>
             <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e293b' }}>{card.val}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '32px', border: '1px solid #EDF2F7', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e293b' }}>Attendance Audit Log</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button style={{ background: 'white', color: '#444', padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800, border: '1px solid #E2E8F0', cursor: 'pointer' }}>Filter By Month</button>
             <button style={{ background: '#800000', color: 'white', padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800, border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
               <Download size={16} /> Export PDF
             </button>
          </div>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #F1F5F9', background: 'white' }}>
                <th style={{ padding: '1.5rem 2.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Date</th>
                <th style={{ padding: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Sign In</th>
                <th style={{ padding: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Sign Out</th>
                <th style={{ padding: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Duration</th>
                <th style={{ padding: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Status</th>
                <th style={{ padding: '1.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {attendanceLog.map((log, i) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={log.date + (log.signin || '')} 
                    style={{ borderBottom: '1px solid #F1F5F9', background: i === 0 && isClockedIn ? '#FFFBEB' : 'white' }}
                  >
                    <td style={{ padding: '1.5rem 2.5rem', fontWeight: 800, fontSize: '1rem', color: '#1e293b' }}>{log.date}</td>
                    <td style={{ padding: '1.5rem', fontWeight: 700, color: '#475569' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle2 size={14} color="#10B981" /> {log.signin || '--'}
                       </div>
                    </td>
                    <td style={{ padding: '1.5rem', fontWeight: 700, color: '#475569' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {log.signout ? <CheckCircle2 size={14} color="#10B981" /> : <Clock size={14} color="#CBD5E1" />}
                          {log.signout || '--'}
                       </div>
                    </td>
                    <td style={{ padding: '1.5rem', fontWeight: 800, color: '#800000' }}>{log.hours}h</td>
                    <td style={{ padding: '1.5rem' }}>
                       <span style={{ 
                         padding: '6px 14px', 
                         borderRadius: '30px', 
                         fontSize: '0.7rem', 
                         fontWeight: 900,
                         textTransform: 'uppercase',
                         letterSpacing: '0.5px',
                         background: log.status === 'Present' ? '#ECFDF5' : (log.status === 'Late' ? '#FFFBEB' : '#FEF2F2'),
                         color: log.status === 'Present' ? '#065F46' : (log.status === 'Late' ? '#92400E' : '#991B1B')
                       }}>{log.status}</span>
                    </td>
                    <td style={{ padding: '1.5rem', fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>{log.notes}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
