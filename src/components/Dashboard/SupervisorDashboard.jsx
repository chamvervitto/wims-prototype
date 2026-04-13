import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  MapPin, 
  ZoomIn, 
  ZoomOut, 
  MousePointer2, 
  Printer, 
  FileBarChart,
  X,
  Star,
  ChevronRight,
  Send,
  Target
} from 'lucide-react';

const StudentEvaluationPanel = ({ isOpen, onClose, studentName = "Alice Johnson" }) => {
  const [ratings, setRatings] = useState({ technical: 0, attitude: 0, punctuality: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      alert(`Evaluation for ${studentName} submitted successfully!`);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', zIndex: 999 }} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '450px', backgroundColor: 'white', boxShadow: '-10px 0 40px rgba(0,0,0,0.1)', zIndex: 1000, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            <div style={{ backgroundColor: '#800000', padding: '2.5rem 2rem', color: 'white', position: 'relative' }}>
              <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'white', opacity: 0.8, background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.5px' }}>Performance Review</h2>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', fontWeight: 600 }}>Weekly Supervisor Assessment</p>
            </div>

            <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '24px', border: '1px solid #EDF2F7' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', backgroundColor: 'white', overflow: 'hidden', border: '2px solid #E2E8F0', padding: '4px' }}>
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${studentName}`} alt="avatar" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 850, color: '#1e293b' }}>{studentName}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 700 }}>STEM • IT Department</p>
                </div>
              </div>

              {['Technical Skills', 'Work Ethic', 'Punctuality'].map((label) => {
                const key = label.toLowerCase().split(' ')[0];
                return (
                  <div key={label}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, marginBottom: '1rem', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          key={star}
                          onClick={() => setRatings({...ratings, [key]: star})}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          <Star size={32} fill={star <= ratings[key] ? '#FFD700' : 'none'} color={star <= ratings[key] ? '#FFD700' : '#CBD5E1'} />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, marginBottom: '1rem', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '1px' }}>Industry Supervisor Remarks</label>
                <textarea placeholder="Write specific feedback on student performance..." style={{ width: '100%', height: '140px', padding: '1.25rem', borderRadius: '20px', border: '1px solid #E2E8F0', fontFamily: 'inherit', resize: 'none', fontSize: '0.95rem', fontWeight: 500 }} />
              </div>
            </div>

            <div style={{ padding: '2rem', borderTop: '1px solid #F1F5F9', background: '#F8FAFC', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <motion.button 
                whileHover={{ scale: 1.02, background: '#A52A2A' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{ backgroundColor: '#800000', color: 'white', border: 'none', padding: '1.25rem', borderRadius: '18px', fontWeight: 900, fontSize: '1rem', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? "Submitting..." : "Submit Evaluation"}
              </motion.button>
              <button onClick={onClose} style={{ backgroundColor: 'white', color: '#64748B', border: '1px solid #E2E8F0', padding: '1.25rem', borderRadius: '18px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}>Cancel</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SupervisorDashboard = () => {
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("Alice Johnson");

  const openEvaluation = (student) => {
    setSelectedStudent(student);
    setIsEvaluationOpen(true);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 3rem', background: '#F8FAFC', minHeight: '100vh' }}>
      <StudentEvaluationPanel 
        isOpen={isEvaluationOpen} 
        onClose={() => setIsEvaluationOpen(false)} 
        studentName={selectedStudent}
      />

      <header style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#800000', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>INDUSTRY SITE MANAGEMENT</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1A202C', letterSpacing: '-0.5px' }}>Partner Site Dashboard</h1>
      </header>

      <div className="dashboard-grid" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'Assigned Students', val: '20', icon: Users, color: '#800000' },
          { label: 'Present Today', val: '18', icon: Calendar, color: '#10B981' },
          { label: 'Pending Evaluations', val: '10', icon: MessageSquare, color: '#F59E0B' },
          { label: 'Site Safety Status', val: 'SAFE', icon: Target, color: '#3B82F6' },
        ].map((stat, i) => (
          <motion.div 
            whileHover={{ y: -8 }}
            key={i} 
            style={{ background: 'white', padding: '2rem 1.75rem', borderRadius: '24px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)', borderTop: `4px solid ${stat.color}` }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px' }}>{stat.label}</div>
                <stat.icon size={20} color={stat.color} />
             </div>
             <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e293b' }}>{stat.val}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2rem' }}>
        {/* Site Tracking Map */}
        <div style={{ background: 'white', borderRadius: '32px', border: '1px solid #EDF2F7', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e293b' }}>Deployment Map</h2>
              <p style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 500 }}>Live location of assigned immersion students</p>
            </div>
          </div>
          <div style={{ height: '500px', background: '#F1F5F9', margin: '0 2rem 2rem 2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} alt="map" />
             {/* Dynamic Markers */}
             {[
               { top: '30%', left: '40%', name: 'Juan' },
               { top: '60%', left: '20%', name: 'Alice' },
               { top: '45%', left: '70%', name: 'Bob' }
             ].map((m, i) => (
               <motion.div 
                key={i}
                initial={{ scale: 0 }} animate={{ scale: 1, delay: i * 0.2 }}
                style={{ position: 'absolute', top: m.top, left: m.left, cursor: 'pointer' }}
               >
                 <div style={{ width: '40px', height: '40px', borderRadius: '15px', border: '3px solid white', background: '#800000', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`} alt="p" />
                 </div>
                 <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#1e293b', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 800, whiteSpace: 'nowrap' }}>{m.name} Logged In</div>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Action Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: '32px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '2rem', color: '#1e293b' }}>Due Evaluations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {["Alice Johnson", "Robert Chen", "Elena Lopez"].map((name, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', background: '#F8FAFC', borderRadius: '20px', border: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt="avatar" />
                    </div>
                    <span style={{ fontWeight: 800, color: '#1e293b' }}>{name}</span>
                  </div>
                  <motion.button 
                    whileHover={{ x: 5, color: '#800000' }}
                    onClick={() => openEvaluation(name)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#800000', padding: '2.5rem', borderRadius: '32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>End of Week Report</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.5 }}>Generate the weekly productivity report for the SHS immersion coordinator.</p>
            <button style={{ width: '100%', background: 'white', color: '#800000', border: 'none', padding: '1rem', borderRadius: '14px', fontWeight: 900, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Printer size={18} /> Print Summaries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
