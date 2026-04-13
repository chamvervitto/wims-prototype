import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  UserCircle, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Capstone Validation Logic
    if ((role === 'student' || role === 'teacher') && !email.endsWith('@mnhs.edu.ph')) {
      setError('Please use your official @mnhs.edu.ph email.');
      return;
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onLogin(role);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 45%) 1fr', minHeight: '100vh', background: '#F8FAFC' }}>
      {/* LEFT SIDE: Branding & Background */}
      <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Slow Zoom Background Animation */}
        <motion.div
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundImage: 'url("/login-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Rich Gradient & Glass Overlay */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, rgba(128, 0, 0, 0.9) 0%, rgba(48, 0, 0, 0.75) 100%)',
          zIndex: 1,
          backdropFilter: 'blur(2px)'
        }} />

        <div style={{ position: 'relative', zIndex: 10, padding: '4rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* School Identity */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '5rem' }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ width: '55px', height: '55px', background: 'transparent', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/marinduque-logo.png" alt="MNHS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-8px', right: '-8px' }}>
                <Sparkles color="#FFD700" size={20} />
              </motion.div>
            </div>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'white', letterSpacing: '-1px', lineHeight: 1 }}>WIMS</h1>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#FFD700', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>MNHS Official Portal</div>
            </div>
          </motion.div>

          <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '4.8rem', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-3px', marginBottom: '2rem' }}>
                Track.<br/>Improve.<br/><span style={{ color: '#FFD700' }}>Succeed.</span>
              </h2>
              <div style={{ height: '4px', width: '80px', background: '#FFD700', borderRadius: '2px', marginBottom: '2rem' }} />
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, maxWidth: '440px', fontWeight: 500 }}>
                Your official Work Immersion Monitoring System of <span style={{ fontWeight: 800, color: 'white' }}>Marinduque National High School.</span>
              </p>
            </motion.div>
          </div>

          {/* Institutional Branding */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FFD700', letterSpacing: '1px', textTransform: 'uppercase' }}>Department of Education</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>Marinduque SHS Department</div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_the_Philippines_Department_of_Education.svg" alt="DepEd" style={{ height: '45px', opacity: 0.9 }} />
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Login Card */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', maxWidth: '440px' }}
        >
          {/* Login Card */}
            <div style={{ 
              background: 'white', 
              borderRadius: '24px', 
              padding: '2.5rem', 
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12), 0 20px 40px -10px rgba(0,0,0,0.08)',
              border: '1px solid #E2E8F0'
            }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-0.5px' }}>Portal Authentication</h3>
              <p style={{ color: '#64748B', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>Authorized access only</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Role Selection Upgrade */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem', letterSpacing: '1px' }}>PORTAL ACCESS ROLE</label>
                <div style={{ position: 'relative' }}>
                  <UserCircle style={{ position: 'absolute', left: '16px', top: '14px', color: '#800000', zIndex: 10 }} size={20} />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '0.9rem 0.9rem 0.9rem 3.2rem', 
                      borderRadius: '12px', 
                      border: '2px solid #F1F5F9', 
                      background: '#F8FAFC', 
                      outline: 'none', 
                      fontWeight: 700, 
                      fontSize: '0.9rem', 
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="student">Student – Track progress</option>
                    <option value="teacher">Coordinator – Monitor skills</option>
                    <option value="supervisor">Supervisor – Performance eval</option>
                    <option value="admin">Admin – Database management</option>
                  </select>
                  <ChevronDown style={{ position: 'absolute', right: '16px', top: '16px', color: '#94A3B8', pointerEvents: 'none' }} size={16} />
                </div>
              </div>

              {/* Email Input */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', marginBottom: '0.5rem', letterSpacing: '1px' }}>INSTITUTIONAL EMAIL</label>
                <div style={{ position: 'relative' }}>
                  <Mail style={{ position: 'absolute', left: '16px', top: '14px', color: '#94A3B8' }} size={18} />
                  <input 
                    type="email" 
                    placeholder="name@mnhs.edu.ph" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.9rem 0.9rem 0.9rem 3.2rem', borderRadius: '12px', border: '2px solid #F1F5F9', background: '#F8FAFC', outline: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'border-color 0.2s' }} 
                    onFocus={(e) => e.target.style.borderColor = '#800000'}
                    onBlur={(e) => e.target.style.borderColor = '#F1F5F9'}
                    required
                  />
                </div>
              </div>

              {/* Password Input with Toggle */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px' }}>PASSWORD</label>
                  <button type="button" style={{ background: 'none', border: 'none', color: '#800000', fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer' }}>FORGOT?</button>
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock style={{ position: 'absolute', left: '16px', top: '14px', color: '#94A3B8' }} size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '0.9rem 3.2rem 0.9rem 3.2rem', borderRadius: '12px', border: '2px solid #F1F5F9', background: '#F8FAFC', outline: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'border-color 0.2s' }} 
                    onFocus={(e) => e.target.style.borderColor = '#800000'}
                    onBlur={(e) => e.target.style.borderColor = '#F1F5F9'}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '16px', top: '14px', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                <input type="checkbox" id="remember" style={{ width: '16px', height: '16px', accentColor: '#800000' }} />
                <label htmlFor="remember" style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, cursor: 'pointer' }}>Remember this device</label>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ color: '#EF4444', background: '#FEF2F2', padding: '0.75rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem', border: '1px solid #FEE2E2', textAlign: 'center' }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileHover={{ scale: 1.02, background: '#A52A2A', boxShadow: '0 8px 16px rgba(128, 0, 0, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  background: '#800000', 
                  color: 'white', 
                  borderRadius: '12px', 
                  border: 'none', 
                  fontWeight: 900, 
                  fontSize: '1rem', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.75rem',
                  opacity: isSubmitting ? 0.8 : 1
                }}
              >
                {isSubmitting ? "Authenticating..." : "Access Dashboard"}
                {!isSubmitting && <ArrowRight size={20} />}
              </motion.button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ color: '#64748B', fontWeight: 600, fontSize: '0.85rem' }}>
                New to WIMS? <a href="#" style={{ color: '#800000', fontWeight: 800 }}>Apply for Access</a>
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', opacity: 0.5, fontSize: '0.7rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase' }}>
            <span style={{ cursor: 'pointer' }}>Security</span>
            <span style={{ cursor: 'pointer' }}>Support</span>
            <span style={{ cursor: 'pointer' }}>User Guide</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
