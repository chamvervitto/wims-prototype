import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, PieChart, Activity, User } from 'lucide-react';

const ReportsSection = () => {
  const downloadables = [
    { title: 'Immersion Completion Certificate', format: 'PDF', size: '256 KB', date: 'March 20, 2024', id: 'CERT_1' },
    { title: 'Detailed Performance Assessment Report', format: 'PDF', size: '1.2 MB', date: 'March 18, 2024', id: 'PERF_R_1' },
    { title: 'Final Attendance Audit Log', format: 'XLSX', size: '48 KB', date: 'March 15, 2024', id: 'ATTD_L_1' },
    { title: 'Technical Competency Portfolio', format: 'PDF', size: '3.5 MB', date: 'March 10, 2024', id: 'PORT_1' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C' }}>Generation & Export Reports</h2>
        <p style={{ color: '#718096', fontSize: '0.9rem' }}>Download official documentation and reports for your work immersion portfolio.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
         <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '16px', border: '1px solid #EDF2F7', borderTop: '4px solid #800000' }}>
            <div style={{ width: '64px', height: '64px', background: '#F8F9FA', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <PieChart size={32} color="#800000" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Analytics Export</h3>
            <p style={{ fontSize: '0.75rem', color: '#718096', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>Generate a consolidated view of all performance metrics.</p>
            <button style={{ width: '100%', background: '#800000', color: 'white', padding: '12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700, border: 'none' }}>Export to PDF</button>
         </div>

         <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '16px', border: '1px solid #EDF2F7', borderTop: '4px solid #F9B115' }}>
            <div style={{ width: '64px', height: '64px', background: '#F8F9FA', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Activity size={32} color="#F9B115" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Progress Summary</h3>
            <p style={{ fontSize: '0.75rem', color: '#718096', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>Brief overview for school coordinator and parents.</p>
            <button style={{ width: '100%', background: '#F9B115', color: 'white', padding: '12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700, border: 'none' }}>Quick Print</button>
         </div>

         <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '16px', border: '1px solid #EDF2F7', borderTop: '4px solid #2EB85C' }}>
            <div style={{ width: '64px', height: '64px', background: '#F8F9FA', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <User size={32} color="#2EB85C" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>Final Clearance</h3>
            <p style={{ fontSize: '0.75rem', color: '#718096', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem' }}>Official clearance from the host company supervisor.</p>
            <button style={{ width: '100%', background: '#2EB85C', color: 'white', padding: '12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700, border: 'none' }}>Request Link</button>
         </div>
      </div>

      <div style={{ background: 'white', padding: '0', borderRadius: '16px', border: '1px solid #EDF2F7', overflow: 'hidden' }}>
        <div style={{ padding: '2rem', borderBottom: '1px solid #EDF2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Available Documents</h3>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#A0AEC0' }}>AUTOFRESHED: 10:24 AM</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           {downloadables.map((doc, i) => (
              <div key={i} style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < downloadables.length - 1 ? '1px solid #F8FAFC' : 'none', background: i % 2 === 1 ? '#FAFBFC' : 'white' }}>
                 <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '12px', color: '#718096' }}>
                       <FileText size={20} />
                    </div>
                    <div>
                       <div style={{ fontWeight: 800, color: '#1A202C', fontSize: '1.05rem' }}>{doc.title}</div>
                       <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, marginTop: '2px' }}>{doc.format} • {doc.size} • Last modified {doc.date}</div>
                    </div>
                 </div>
                 <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button style={{ padding: '10px 20px', border: '1.5px solid #800000', color: '#800000', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800, background: 'none' }}>
                       <Download size={14} style={{ marginRight: '6px' }} /> Download
                    </button>
                    <button style={{ padding: '10px 20px', background: '#F1F5F9', color: '#64748b', borderRadius: '8px', border: 'none', fontWeight: 700 }}>
                       <Printer size={16} />
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
