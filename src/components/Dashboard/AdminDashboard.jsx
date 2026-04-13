import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, Edit3, Trash2, Search, MoreVertical, ChevronLeft, ChevronRight, GraduationCap, UserCheck, ShieldCheck, Filter } from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Dela Cruz', role: 'Student', icon: GraduationCap, color: '#2EB85C', email: 'juan.dc@student.wims.edu' },
    { id: 2, name: 'Maria Santos', role: 'Teacher', icon: Users, color: '#321FDB', email: 'm.santos@faculty.wims.edu' },
    { id: 3, name: 'Ricardo Gomez', role: 'Supervisor', icon: UserCheck, color: '#F9B115', email: 'rgomez@partner.com' },
    { id: 4, name: 'Admin Staff', role: 'Admin', icon: ShieldCheck, color: '#E55353', email: 'staff@admin.wims.edu' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', role: 'Student', email: '' });

  const getRoleBadgeStyle = (role) => {
    switch (role) {
      case 'Student': return { background: '#ECFDF5', color: '#065F46' };
      case 'Teacher': return { background: '#EFF6FF', color: '#1E40AF' };
      case 'Supervisor': return { background: '#FFFBEB', color: '#92400E' };
      case 'Admin': return { background: '#FEF2F2', color: '#991B1B' };
      default: return { background: '#F8F9FA', color: '#64748B' };
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const roleIcons = { Student: GraduationCap, Teacher: Users, Supervisor: UserCheck, Admin: ShieldCheck };
    const roleColors = { Student: '#2EB85C', Teacher: '#321FDB', Supervisor: '#F9B115', Admin: '#E55353' };
    
    setUsers([...users, { 
      ...newUser, 
      id: Date.now(), 
      icon: roleIcons[newUser.role], 
      color: roleColors[newUser.role] 
    }]);
    setIsModalOpen(false);
    setNewUser({ name: '', role: 'Student', email: '' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '0 1rem 3rem 1rem' }}>
      <AnimatePresence>
        {isModalOpen && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', width: '100%', maxWidth: '450px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem', color: '#1e293b' }}>Provision New Identity</h2>
              <form onSubmit={handleAddUser}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>FULL NAME</label>
                  <input required value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontWeight: 600 }} placeholder="e.g. Juan Luna" />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>AUTH ROLE</label>
                  <select value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontWeight: 600 }}>
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Supervisor</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem' }}>SYSTEM EMAIL</label>
                  <input type="email" required value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontWeight: 600 }} placeholder="user@mnhs.edu.ph" />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="submit" style={{ flex: 1, padding: '1rem', background: '#800000', color: 'white', borderRadius: '12px', border: 'none', fontWeight: 800, cursor: 'pointer' }}>Create Account</button>
                  <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '1rem', background: '#F1F5F9', color: '#64748B', borderRadius: '12px', border: 'none', fontWeight: 800, cursor: 'pointer' }}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1.5px', marginBottom: '0.5rem' }}>Personnel Registry</h1>
          <p style={{ color: '#64748B', fontSize: '1rem', fontWeight: 500 }}>System-wide user provisioning and access controls.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, background: '#A52A2A', boxShadow: '0 10px 20px rgba(128, 0, 0, 0.15)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '1rem 2rem', background: '#800000', color: 'white', borderRadius: '16px', border: 'none', fontWeight: 900, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <UserPlus size={20} /> Provision User
        </motion.button>
      </div>

      <motion.div layout className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '32px', border: '1px solid #EDF2F7', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
        <div style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
          <div style={{ position: 'relative', width: '400px' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '16px', color: '#94A3B8' }} />
            <input type="text" placeholder="Omni-search users..." style={{ width: '100%', paddingLeft: '3.5rem', height: '52px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #EDF2F7', outline: 'none', fontWeight: 600 }} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
             <button style={{ padding: '12px 18px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #EDF2F7', fontWeight: 700, color: '#64748B', cursor: 'pointer' }}>Export CSV</button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', background: '#F8FAFC', borderBottom: '2px solid #F1F5F9' }}>
                <th style={{ padding: '1.5rem 2.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Identify</th>
                <th style={{ padding: '1.5rem 2.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Permissions</th>
                <th style={{ padding: '1.5rem 2.5rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {users.map((user) => (
                  <motion.tr key={user.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} whileHover={{ background: '#F1F5F9' }} style={{ borderBottom: '1px solid #F1F5F9', transition: 'background 0.2s' }}>
                    <td style={{ padding: '1.5rem 2.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '20px', background: `${user.color}15`, color: user.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <user.icon size={26} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e293b' }}>{user.name}</div>
                          <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem 2.5rem' }}>
                      <span style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5px', ...getRoleBadgeStyle(user.role) }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '1.5rem 2.5rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                        <button style={{ padding: '10px', borderRadius: '12px', border: '1px solid #EDF2F7', background: 'white', color: '#64748B', cursor: 'pointer' }}><Edit3 size={18} /></button>
                        <button onClick={() => handleDelete(user.id)} style={{ padding: '10px', borderRadius: '12px', border: 'none', background: '#FEF2F2', color: '#EF4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
