import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Image as ImageIcon,
  ChevronRight,
  MoreVertical,
  Search,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JournalSection = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2026-03-23',
      title: 'Office Management & File Organization',
      summary: 'Assisted the administrative department in digitizing old student records and organizing the 2024 archive.',
      learnings: 'I learned the importance of proper indexing and how a well-organized filing system improves office efficiency.',
      status: 'approved',
      time: '8:00 AM - 5:00 PM',
      hours: 8
    },
    {
      id: 2,
      date: '2026-03-22',
      title: 'Inventory Audit & Software Troubleshooting',
      summary: 'Performed a hardware audit of the IT lab and helped troubleshoot network connectivity issues in the main office.',
      learnings: 'Improved my basic networking skills and learned how to document hardware specifications systematically.',
      status: 'pending',
      time: '8:00 AM - 5:00 PM',
      hours: 8
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [newEntry, setNewEntry] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    summary: '',
    learnings: '',
    timeIn: '08:00',
    timeOut: '17:00'
  });

  const handleAddEntry = (e) => {
    e.preventDefault();
    const entry = {
      id: Date.now(),
      ...newEntry,
      date: new Date(newEntry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      status: 'pending',
      time: `${newEntry.timeIn} AM - ${newEntry.timeOut} PM`,
      hours: 8
    };
    setEntries([entry, ...entries]);
    setIsModalOpen(false);
    setNewEntry({ title: '', date: new Date().toISOString().split('T')[0], summary: '', learnings: '', timeIn: '08:00', timeOut: '17:00' });
  };

  const filteredEntries = entries.filter(e => activeTab === 'all' || e.status === activeTab);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>Work Journal</h1>
          <p style={{ color: '#64748B', fontWeight: 600, fontSize: '1.1rem' }}>Document your daily tasks, reflections, and learning evidence.</p>
        </div>
        <motion.button 
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05, background: '#A52A2A', boxShadow: '0 10px 20px rgba(128, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            background: '#800000', color: 'white', border: 'none', padding: '1rem 1.75rem', borderRadius: '14px', 
            fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(128, 0, 0, 0.15)'
          }}
        >
          <Plus size={20} /> Create New Entry
        </motion.button>
      </header>

      {/* NEW ENTRY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                position: 'relative', background: 'white', width: '90%', maxWidth: '600px', padding: '2.5rem', 
                borderRadius: '32px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25)', overflowY: 'auto', maxHeight: '90vh'
              }}
            >
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', marginBottom: '1.5rem' }}>New Journal Entry</h2>
              <form onSubmit={handleAddEntry}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>DATE</label>
                    <input 
                      type="date" 
                      required
                      value={newEntry.date}
                      onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontWeight: 600 }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>TASK CATEGORY / TITLE</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Technical Support"
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #E2E8F0', fontWeight: 600 }} 
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>DAILY SUMMARY</label>
                  <textarea 
                    required
                    placeholder="Describe what you did today..."
                    value={newEntry.summary}
                    onChange={(e) => setNewEntry({...newEntry, summary: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #E2E8F0', height: '100px', fontWeight: 500, resize: 'none' }} 
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>KEY LEARNINGS</label>
                  <textarea 
                    required
                    placeholder="What did you learn today?"
                    value={newEntry.learnings}
                    onChange={(e) => setNewEntry({...newEntry, learnings: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #E2E8F0', height: '80px', fontWeight: 500, resize: 'none' }} 
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    style={{ flex: 1, padding: '1rem', background: '#F1F5F9', border: 'none', borderRadius: '14px', fontWeight: 800, cursor: 'pointer', color: '#64748B' }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    style={{ flex: 2, padding: '1rem', background: '#800000', color: 'white', border: 'none', borderRadius: '14px', fontWeight: 800, cursor: 'pointer' }}
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem' }}>
        {/* Left: Journal Entries Timeline */}
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: '#F1F5F9', padding: '0.5rem', borderRadius: '14px', width: 'fit-content' }}>
            {['all', 'approved', 'pending'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  padding: '0.65rem 1.5rem', borderRadius: '10px', border: 'none', fontWeight: 800, fontSize: '0.85rem',
                  background: activeTab === tab ? 'white' : 'transparent',
                  color: activeTab === tab ? '#800000' : '#64748B',
                  boxShadow: activeTab === tab ? '0 4px 10px rgba(0,0,0,0.05)' : 'none',
                  cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px'
                }}
              >
                {tab} logs
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <AnimatePresence>
              {filteredEntries.map((entry, index) => (
                <motion.div 
                  layout
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}
                  style={{ 
                    background: 'white', padding: '2rem', borderRadius: '24px', border: '1px solid #EDF2F7',
                    position: 'relative', overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '12px', color: '#800000' }}>
                        <CalendarIcon size={22} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>{entry.date}</div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 850, color: '#1e293b', marginTop: '4px' }}>{entry.title}</h3>
                      </div>
                    </div>
                    <div style={{ 
                      padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase',
                      letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem',
                      background: entry.status === 'approved' ? '#ECFDF5' : '#FFF7ED',
                      color: entry.status === 'approved' ? '#059669' : '#D97706'
                    }}>
                      {entry.status === 'approved' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {entry.status}
                    </div>
                  </div>

                  <div style={{ borderLeft: '3px solid #F1F5F9', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                    <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>{entry.summary}</p>
                    <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '16px', border: '1px solid #F1F5F9' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#800000', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>KEY LEARNING</div>
                      <p style={{ color: '#64748B', fontWeight: 600, fontSize: '0.95rem', fontStyle: 'italic' }}>"{entry.learnings}"</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem', fontWeight: 700 }}>
                        <Clock size={16} /> {entry.time}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem', fontWeight: 700 }}>
                        <BookOpen size={16} /> {entry.hours} Hours Logged
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, x: 5 }}
                      style={{ background: 'none', border: 'none', color: '#800000', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                    >
                      View Full Entry <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Journal Statistics & Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Progress Card */}
          <div style={{ background: '#800000', padding: '2.25rem', borderRadius: '32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }}>
              <BookOpen size={180} />
            </div>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Journal Progress</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 950 }}>14</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.8 }}>/ 40 Logs</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
              <div style={{ width: '35%', height: '100%', background: '#FFD700', borderRadius: '4px' }} />
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>35% of required journal logs completed.</p>
          </div>

          {/* Quick Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '24px', border: '1px solid #F1F5F9' }}>
              <div style={{ color: '#059669', marginBottom: '0.75rem' }}><CheckCircle2 size={24} /></div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b' }}>12</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Verified</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '24px', border: '1px solid #F1F5F9' }}>
              <div style={{ color: '#D97706', marginBottom: '0.75rem' }}><Clock size={24} /></div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b' }}>2</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>Waiting</div>
            </div>
          </div>

          {/* Attachments & Files Quick View */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', border: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e293b' }}>Recent Evidence</h4>
              <ImageIcon size={18} color="#94A3B8" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} style={{ aspectRatio: '1', background: '#F8FAFC', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #E2E8F0' }}>
                  <ImageIcon size={20} color="#CBD5E1" />
                </div>
              ))}
            </div>
            <button style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', color: '#800000', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>View All Documents</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalSection;
