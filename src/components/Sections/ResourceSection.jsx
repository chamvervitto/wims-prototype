import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  BookMarked, 
  ShieldAlert, 
  FileCheck,
  Search,
  FolderOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const ResourceSection = () => {
  const documents = [
    { name: 'WIMS Student Manual', size: '2.4 MB', type: 'PDF', category: 'Guidelines' },
    { name: 'DepEd Immersion Form 1', size: '1.2 MB', type: 'DOCX', category: 'Forms' },
    { name: 'Parental Consent Template', size: '850 KB', type: 'PDF', category: 'Forms' },
    { name: 'MNHS Work Safety Guide', size: '4.1 MB', type: 'PDF', category: 'Safety' },
    { name: 'Reflection Journal Template', size: '500 KB', type: 'PDF', category: 'Journal' },
    { name: 'Evaluation Rubrics', size: '1.1 MB', type: 'PDF', category: 'Assessment' },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>Resource Hub</h1>
        <p style={{ color: '#64748B', fontWeight: 600, fontSize: '1.1rem' }}>Central repository for immersion guidelines, forms, and safety materials.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2.5rem' }}>
        {/* Categories Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '12px', color: '#94A3B8' }} size={18} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', background: 'white', fontWeight: 600, fontSize: '0.9rem', outline: 'none' }}
            />
          </div>
          {['All Resources', 'Essential Forms', 'Guidelines', 'Safety Manuals', 'Learning Modules'].map((cat, i) => (
            <motion.button
              key={cat}
              whileHover={{ background: '#F8FAFC', x: 5 }}
              style={{ 
                padding: '1rem', textAlign: 'left', borderRadius: '12px', border: 'none', 
                background: i === 0 ? '#80000010' : 'transparent',
                color: i === 0 ? '#800000' : '#475569',
                fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}
            >
              <FolderOpen size={18} /> {cat}
            </motion.button>
          ))}
        </div>

        {/* Documents Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {documents.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}
              style={{ background: 'white', padding: '1.75rem', borderRadius: '24px', border: '1px solid #EDF2F7', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.85rem', background: '#F8FAFC', borderRadius: '14px', color: '#800000' }}>
                  <FileText size={24} />
                </div>
                <div style={{ padding: '0.4rem 0.8rem', background: '#F1F5F9', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 900, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {doc.type}
                </div>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 850, color: '#1e293b', marginBottom: '0.5rem', lineHeight: 1.3 }}>{doc.name}</h3>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8' }}>{doc.size}</span>
                <div style={{ width: '4px', height: '4px', background: '#CBD5E1', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#800000' }}>{doc.category}</span>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  style={{ flex: 1, padding: '0.85rem', background: '#800000', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <Download size={16} /> Download
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: '0.85rem', background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0', borderRadius: '12px', cursor: 'pointer' }}
                >
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
