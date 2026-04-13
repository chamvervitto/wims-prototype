import React from 'react';
import { Edit2, FileText, AlertCircle, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const requirements = [
    { name: 'Resume', file: 'resume.pdf', status: 'uploaded', action: 'Update' },
    { name: 'ABC Document', file: 'abc_corp.pdf', status: 'pending', action: 'Update' },
    { name: 'Parent Consent', file: 'consent_form.pdf', status: 'approved', action: 'View' },
    { name: 'Medical Certificate', file: null, status: 'missing', action: 'Upload File' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'uploaded': return <span style={{ padding: '0.25rem 0.75rem', background: '#D4EDDA', color: '#155724', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>Uploaded</span>;
      case 'pending': return <span style={{ padding: '0.25rem 0.75rem', background: '#FFF3CD', color: '#856404', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>Pending</span>;
      case 'approved': return <span style={{ padding: '0.25rem 0.75rem', background: '#CCE5FF', color: '#004085', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>Approved</span>;
      case 'missing': return <span style={{ padding: '0.25rem 0.75rem', background: '#F8D7DA', color: '#721C24', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>Missing</span>;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #EDF2F7', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>Registration & Profile</h2>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#800000', fontWeight: 700, border: 'none', background: 'none' }}>
            <Edit2 size={16} /> Edit Profile
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#F1F5F9', overflow: 'hidden', border: '3px solid #EDF2F7' }}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" alt="avatar" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', flex: 1 }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#A0AEC0', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Full Name</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Juan Dela Cruz</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#A0AEC0', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Strand</div>
              <div style={{ fontSize: '1rem', fontWeight: 700 }}>STEM (Science, Technology, Engineering & Mathematics)</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#A0AEC0', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Assigned Company</div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: '#F1F5F9', 
                padding: '6px 12px', 
                borderRadius: '8px',
                color: '#475569',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                Innovatech Solutions <AlertCircle size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #EDF2F7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Upload Requirements</h2>
          <span style={{ fontWeight: 800, color: '#800000' }}>50% Complete</span>
        </div>
        
        <div style={{ height: '8px', background: '#F1F1F1', borderRadius: '4px', marginBottom: '1rem', overflow: 'hidden' }}>
          <div style={{ width: '50%', height: '100%', background: '#800000' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#718096', marginBottom: '2.5rem', fontWeight: 700 }}>2 OF 4 DOCUMENTS VERIFIED</p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #F1F5F9' }}>
                <th style={{ padding: '1rem', color: '#A0AEC0', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase' }}>Requirement Name</th>
                <th style={{ padding: '1rem', color: '#A0AEC0', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase' }}>File Attachment</th>
                <th style={{ padding: '1rem', color: '#A0AEC0', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '1rem', color: '#A0AEC0', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((req, i) => (
                <tr key={i} style={{ borderBottom: i < requirements.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <td style={{ padding: '1.25rem 1rem', fontWeight: 800, fontSize: '0.9rem' }}>{req.name}</td>
                  <td style={{ padding: '1.25rem 1rem' }}>
                    {req.file ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A5568', fontWeight: 600, fontSize: '0.85rem' }}>
                        <FileText size={16} color="#A0AEC0" /> {req.file}
                      </div>
                    ) : (
                      <span style={{ color: '#CBD5E0', fontStyle: 'italic', fontSize: '0.85rem' }}>No file attached</span>
                    )}
                  </td>
                  <td style={{ padding: '1.25rem 1rem' }}>{getStatusBadge(req.status)}</td>
                  <td style={{ padding: '1.25rem 1rem', textAlign: 'right' }}>
                    <button style={{ 
                      color: req.status === 'missing' ? 'white' : '#800000', 
                      background: req.status === 'missing' ? '#800000' : 'none',
                      padding: req.status === 'missing' ? '8px 16px' : '0',
                      borderRadius: '8px',
                      fontWeight: 800,
                      border: 'none',
                      fontSize: '0.85rem'
                    }}>
                      {req.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
