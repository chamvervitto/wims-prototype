import React from 'react';
import { 
  BarChart3, 
  Clock, 
  UserCheck, 
  Search,
  Star, 
  Download, 
  CheckCircle2,
  MapPin,
  Briefcase,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const MnhsDashboard = () => {
  const progressMetrics = [
    { label: 'Technical Skills', value: 88, color: '#800000' },
    { label: 'Communication', value: 95, color: '#800000' },
    { label: 'Punctuality', value: 100, color: '#85892D' },
    { label: 'Attitude', value: 92, color: '#800000' },
  ];

  const feedback = [
    {
      initials: 'RL',
      title: 'Technical Proficiency Enhancement',
      date: 'Posted 2 days ago • Week 4 Summary',
      text: '"Juan has demonstrated exceptional growth in his ability to debug complex JavaScript modules. He proactively researches solutions before escalating issues, showing great initiative. His contribution to the UI migration project was noteworthy."',
      stars: 5
    },
    {
      initials: 'RL',
      title: 'Interpersonal Skills & Teamwork',
      date: 'Posted 1 week ago • Week 3 Summary',
      text: '"Integrated well into the Scrum team meetings. Communication is clear, though he could be slightly more vocal during brainstorming sessions. Overall very reliable student."',
      stars: 5
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '0', background: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ padding: '2rem 3rem' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#800000', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              STUDENT PERFORMANCE & EVALUATION
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1A202C', letterSpacing: '-0.5px' }}>Academic Analytics Dashboard</h1>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <motion.button 
              whileHover={{ scale: 1.05, background: '#F1F5F9' }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.85rem 1.75rem', borderRadius: '12px', fontWeight: 800, color: '#475569', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}
            >
              <Download size={18} /> Export Report
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: '#A52A2A', boxShadow: '0 8px 20px rgba(128, 0, 0, 0.25)' }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ['0 0 0 0 rgba(128, 0, 0, 0.2)', '0 0 0 10px rgba(128, 0, 0, 0)', '0 0 0 0 rgba(128, 0, 0, 0)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#800000', padding: '0.85rem 1.75rem', borderRadius: '12px', fontWeight: 800, color: 'white', border: 'none', boxShadow: '0 4px 12px rgba(128, 0, 0, 0.15)'
              }}
            >
              <CheckCircle2 size={18} /> Finalize Hours
            </motion.button>
          </div>
        </div>

        {/* Analytics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.5fr', gap: '1.5rem', marginBottom: '3rem', alignItems: 'stretch' }}>
          {/* Hours Card */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
            style={{ background: 'white', padding: '2rem 1.75rem', borderRadius: '20px', border: '1px solid #EDF2F7', borderTop: '4px solid #800000' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px' }}>IMMERSION HOURS</div>
              <Clock size={16} color="#94A3B8" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1e293b' }}>64</span>
              <span style={{ color: '#94A3B8', fontWeight: 700, fontSize: '0.9rem' }}>/ 80 hrs</span>
            </div>
            <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '4px', marginTop: '1.5rem', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '80%' }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #800000, #A52A2A)', borderRadius: '4px' }} 
              />
            </div>
            <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '0.75rem', fontWeight: 700 }}>80% COMPLETED • 16 HRS LEFT</div>
          </motion.div>

          {/* Performance Card */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
            style={{ background: 'white', padding: '2rem 1.75rem', borderRadius: '20px', border: '1px solid #EDF2F7', borderTop: '4px solid #3B82F6' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px' }}>PERFORMANCE RATING</div>
              <BarChart3 size={16} color="#3B82F6" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1e293b' }}>92%</span>
              <div style={{ background: '#DBEAFE', color: '#1E40AF', fontSize: '0.65rem', fontWeight: 900, padding: '6px 10px', borderRadius: '30px', textTransform: 'uppercase' }}>Superior</div>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#3B82F6', marginTop: '1.25rem', fontWeight: 800 }}>RANKED #3 IN STEM COHORT</div>
          </motion.div>

          {/* Attendance Card */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
            style={{ background: 'white', padding: '2rem 1.75rem', borderRadius: '20px', border: '1px solid #EDF2F7', borderTop: '4px solid #10B981' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px' }}>ATTENDANCE RATE</div>
              <UserCheck size={16} color="#10B981" />
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1e293b' }}>98%</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '1.25rem' }}>
              <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 800, background: '#ECFDF5', padding: '4px 8px', borderRadius: '4px' }}>✅ Present: 19</span>
              <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 800, background: '#FEF2F2', padding: '4px 8px', borderRadius: '4px' }}>❌ Absent: 1</span>
            </div>
          </motion.div>

          {/* Journal Preview Card */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)' }}
            style={{ background: 'white', padding: '2rem 1.75rem', borderRadius: '20px', border: '1px solid #EDF2F7', borderTop: '4px solid #F59E0B' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.5px' }}>LATEST JOURNAL</div>
              <BookOpen size={16} color="#F59E0B" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', lineHeight: 1.1 }}>Office Management</div>
            <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.75rem', fontWeight: 600, display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              Digitized old student records and organized the 2024 archive...
            </p>
            <div style={{ background: '#FFF7ED', color: '#D97706', fontSize: '0.65rem', fontWeight: 900, padding: '4px 8px', borderRadius: '4px', marginTop: '1rem', display: 'inline-block' }}>WAITING FOR VERIFICATION</div>
          </motion.div>

          {/* Weekly Grade Card (Prominent) */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(128, 0, 0, 0.25)' }}
            style={{ 
              background: 'linear-gradient(135deg, #800000 0%, #300000 100%)', 
              padding: '2.5rem', 
              borderRadius: '24px', 
              color: 'white', 
              position: 'relative', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(128,0,0,0.15)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.7, marginBottom: '0.5rem', letterSpacing: '2px' }}>WEEKLY EVALUATION</div>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1 }}>Outstanding</div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
                {[1,2,3,4,5].map(s => (
                  <motion.div
                    key={s}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (s * 0.1) }}
                  >
                    <Star size={20} fill="#FFD700" color="#FFD700" />
                  </motion.div>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(255,255,255,0.15)', display: 'inline-block', padding: '6px 12px', borderRadius: '8px' }}>
                UPDATED TODAY • 9:10 PM
              </div>
            </div>
            <Star style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.08, color: 'white' }} size={160} />
            <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Chart */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e293b' }}>Weekly Performance Progress</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>Student competency tracking (Actual vs Target Score)</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.7rem', fontWeight: 900 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#334155' }} /> TARGET (85%)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'linear-gradient(to top, #800000, #A52A2A)' }} /> ACTUAL
                  </div>
                </div>
              </div>
              
              <div style={{ height: '320px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', paddingTop: '20px' }}>
                {/* Y-Axis Lines Simulation */}
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
                  {[100, 75, 50, 25, 0].map(val => (
                    <div key={val} style={{ width: '100%', borderTop: '1px dashed #F1F5F9', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-35px', top: '-10px', fontSize: '0.65rem', color: '#94A3B8', fontWeight: 700 }}>{val}%</span>
                    </div>
                  ))}
                </div>

                {[
                  { week: 'WK 1', val: 75, target: 85, date: 'Mar 1-7' },
                  { week: 'WK 2', val: 82, target: 85, date: 'Mar 8-14' },
                  { week: 'WK 3', val: 88, target: 85, date: 'Mar 15-21' },
                  { week: 'WK 4', val: 94, target: 85, date: 'Current' }
                ].map((bar, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px', height: '100%', justifyContent: 'flex-end' }}
                  >
                    <div style={{ position: 'relative', width: '48px', height: '240px', background: '#F8FAFC', borderRadius: '10px', overflow: 'hidden' }}>
                      {/* Target Marker */}
                      <div style={{ position: 'absolute', bottom: `${bar.target}%`, width: '100%', height: '2px', background: '#334155', borderTop: '1px solid white', zIndex: 10 }} />
                      
                      {/* Actual Bar */}
                      <motion.div 
                        whileHover={{ brightness: 1.2 }}
                        initial={{ height: 0 }} 
                        animate={{ height: `${bar.val}%` }} 
                        transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }} 
                        style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(to top, #300000, #800000)', borderRadius: '6px' }} 
                      >
                        <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem', fontWeight: 900, color: 'white' }}>{bar.val}%</div>
                      </motion.div>
                    </div>
                    <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#1e293b' }}>{bar.week}</div>
                      <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{bar.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e293b' }}>Supervisor Perspective</h3>
                <div style={{ background: '#F1F5F9', padding: '8px 20px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: 900, color: '#334155', letterSpacing: '0.5px' }}>3 LOGGED ENTRIES</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {feedback.map((item, i) => (
                  <motion.div 
                    whileHover={{ x: 10, background: '#F8FAFC' }}
                    key={i} 
                    style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #F1F5F9', transition: 'all 0.3s ease' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                        <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #800000, #300000)', borderRadius: '12px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.1rem' }}>{item.initials}</div>
                        <div>
                          <div style={{ fontWeight: 800, color: '#1A202C', fontSize: '1rem' }}>{item.title}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>{item.date}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {[...Array(item.stars)].map((_, s) => <Star key={s} size={15} fill="#C084FC" color="#C084FC" />)}
                      </div>
                    </div>
                    <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.8, color: '#475569', fontWeight: 500, paddingLeft: '1rem', borderLeft: '4px solid #E2E8F0' }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Company */}
            <motion.div 
              whileHover={{ y: -5 }}
              style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}
            >
              <div style={{ height: '120px', background: 'linear-gradient(to right, #800000, #300000)' }} />
              <div style={{ padding: '2.5rem', marginTop: '-60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '85px', height: '85px', background: 'white', padding: '12px', borderRadius: '20px', boxShadow: '0 12px 20px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
                  <div style={{ height: '100%', background: '#1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Briefcase size={32} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b' }}>Innovatech Solutions</h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '2rem', fontWeight: 600 }}>Web Engineering & AI Systems</p>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ background: '#F1F5F9', padding: '12px', borderRadius: '12px' }}><UserCheck size={18} color="#475569" /></div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 800, letterSpacing: '0.5px' }}>COORDINATOR</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b' }}>Engr. Roberto M. Laya</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ background: '#F1F5F9', padding: '12px', borderRadius: '12px' }}><MapPin size={18} color="#475569" /></div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 800, letterSpacing: '0.5px' }}>OFFICE SITE</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b' }}>Boac, Marinduque</div>
                    </div>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ background: '#1e293b', color: 'white', scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: '100%', marginTop: '2.5rem', background: '#F1F5F9', color: '#475569', padding: '1rem', borderRadius: '12px', border: 'none', fontWeight: 800, fontSize: '0.85rem', transition: 'all 0.3s ease' }}
                >
                  VIEW FULL PROFILE
                </motion.button>
              </div>
            </motion.div>

            {/* Progress */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '2.5rem', color: '#1e293b' }}>Skills Matrix</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {progressMetrics.map((m, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#475569' }}>{m.label}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#800000' }}>{m.value}%</span>
                    </div>
                    <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '6px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${m.value}%` }} 
                        transition={{ duration: 1.5, delay: i * 0.1 }} 
                        style={{ height: '100%', background: 'linear-gradient(90deg, #800000, #300000)', borderRadius: '6px' }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '3rem' }}>
                {['ADAPTABLE', 'PROACTIVE', 'FAST LEARNER', 'COMMUNICATIVE'].map((tag) => (
                  <motion.span 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    key={tag} 
                    style={{ 
                      background: tag === 'ADAPTABLE' ? '#DBEAFE' : (tag === 'PROACTIVE' ? '#FEE2E2' : (tag === 'COMMUNICATIVE' ? '#D1FAE5' : '#F1F5F9')), 
                      color: tag === 'ADAPTABLE' ? '#1E40AF' : (tag === 'PROACTIVE' ? '#991B1B' : (tag === 'COMMUNICATIVE' ? '#065F46' : '#475569')), 
                      fontSize: '0.65rem', fontWeight: 900, padding: '7px 15px', borderRadius: '30px', cursor: 'default'
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ background: 'white', padding: '2.5rem 4rem', borderTop: '1px solid #EDF2F7', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
          MNHS Work Immersion © 2024 Marinduque National High School - SHS Dept.
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.85rem', color: '#475569', fontWeight: 800 }}>
          {['Support', 'Privacy', 'Contact', 'Guidelines'].map(l => (
            <motion.span whileHover={{ color: '#800000' }} key={l} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>{l}</motion.span>
          ))}
        </div>
      </footer>
    </motion.div>
  );
};

export default MnhsDashboard;
