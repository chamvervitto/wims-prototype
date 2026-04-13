import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Star, MessageCircle, FileCheck, ThumbsUp, Brain } from 'lucide-react';

const EvaluationSection = () => {
  const evaluations = [
    { 
      type: 'Supervisor Evaluation', 
      score: 9.8, 
      max: 10,
      date: 'March 15, 2024',
      assessor: 'Engr. Roberto M. Laya',
      status: 'Finalized',
      comments: 'Exceptional problem-solving skills and highly proactive in team discussions.'
    },
    { 
      type: 'Self Evaluation', 
      score: 9.0, 
      max: 10,
      date: 'March 14, 2024',
      assessor: 'Juan Dela Cruz',
      status: 'Submitted',
      comments: 'I feel I have improved in my technical debugging skills but still need to work on public speaking.'
    },
    { 
      type: 'Teacher Final Review', 
      score: 95, 
      max: 100,
      date: 'March 20, 2024',
      assessor: 'Ms. Maria Santos',
      status: 'Approved',
      comments: 'Outstanding student. Consistent top performer.'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C' }}>Performance Evaluation</h2>
        <p style={{ color: '#718096', fontSize: '0.9rem' }}>Detailed assessment results from supervisors, teachers, and self-reviews.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'AVERAGE SCORE', val: '9.6', sub: '/ 10.0', icon: Star, color: '#800000' },
          { label: 'COMPLETED EVALS', val: '3', sub: '3 PENDING', icon: FileCheck, color: '#800000' },
          { label: 'STRENGTHS', val: 'Proactive', sub: 'TECHNICAL', icon: ThumbsUp, color: '#2EB85C' },
          { label: 'LEARNING INDEX', val: 'High', sub: 'MASTERING JS', icon: Brain, color: '#4A90E2' },
        ].map((card, i) => (
          <div key={i} className="card" style={{ padding: '2rem 1.5rem', background: 'white', borderRadius: '16px', border: '1px solid #EDF2F7', borderLeft: `6px solid ${card.color}` }}>
             <card.icon size={26} color={card.color} opacity={0.3} style={{ marginBottom: '1.25rem' }} />
             <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800 }}>{card.val}</span>
                <span style={{ fontSize: '0.8rem', color: '#A0AEC0', fontWeight: 700 }}>{card.sub}</span>
             </div>
             <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#A0AEC0', letterSpacing: '1px', textTransform: 'uppercase' }}>{card.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {evaluations.map((evalObj, i) => (
           <div key={i} className="card" style={{ padding: '2.5rem', background: 'white', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', background: '#F8FAFC', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#800000' }}>
                       <CheckSquare size={28} />
                    </div>
                    <div>
                       <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{evalObj.type}</h3>
                       <p style={{ fontSize: '0.75rem', color: '#718096', fontWeight: 700 }}>Assessed by <span style={{ color: '#800000' }}>{evalObj.assessor}</span> on {evalObj.date}</p>
                    </div>
                 </div>
                 <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#800000' }}>{evalObj.score}<span style={{ fontSize: '0.9rem', color: '#A0AEC0' }}>/{evalObj.max}</span></div>
                    <span style={{ fontSize: '0.65rem', background: '#DCFCE7', color: '#166534', padding: '4px 10px', borderRadius: '20px', fontWeight: 900 }}>{evalObj.status.toUpperCase()}</span>
                 </div>
              </div>
              
              <div style={{ background: '#F1F5F9', padding: '1.5rem', borderRadius: '16px', fontStyle: 'italic', fontSize: '1rem', color: '#475569', fontWeight: 500, borderLeft: '3px solid #800000' }}>
                 "{evalObj.comments}"
              </div>
              <MessageCircle size={100} color="#800000" opacity={0.03} style={{ position: 'absolute', right: '-20px', bottom: '-20px' }} />
           </div>
        ))}
      </div>
    </div>
  );
};

export default EvaluationSection;
