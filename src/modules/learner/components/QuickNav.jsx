import React from 'react';
import { User, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickNav({ open, onClose, onLogout, name, styles }) {

  if (!open) return null;

  // Use local styles as fallback if none are passed
  const defaultStyles = styles || { 
    quickNav: { position: 'absolute', top: '60px', right: '15px', width: '200px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 3000, padding: '10px 0', border: '1px solid #e2e8f0' },
    menuItem: { padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', textDecoration: 'none', cursor: 'pointer', fontWeight: 500 },
    header: { padding: '10px 15px', borderBottom: '1px solid #e2e8f0', marginBottom: '10px', fontWeight: 700, color: '#0f4f9f' }
  };

  const handleItemClick = () => {
    // Closes the quick nav when an item is clicked
    onClose();
  };

  return (
    <div 
      id="quick-nav-menu"
      style={defaultStyles.quickNav}
    >
      <div style={defaultStyles.header}>
        Signed in as: {name}
      </div>

      <Link to="/dashboard/profile" style={defaultStyles.menuItem} onClick={handleItemClick}>
        <User size={18} />
        My Profile
        <ChevronRight size={16} style={{ marginLeft: 'auto', color: '#94a3b8' }} />
      </Link>
      
      <Link to="/dashboard/settings" style={defaultStyles.menuItem} onClick={handleItemClick}>
        <Settings size={18} />
        Settings
        <ChevronRight size={16} style={{ marginLeft: 'auto', color: '#94a3b8' }} />
      </Link>
      
      <div 
        onClick={() => { handleItemClick(); onLogout(); }} 
        style={{ ...defaultStyles.menuItem, color: '#ef4444', borderTop: '1px solid #e2e8f0', marginTop: '10px', paddingTop: '10px' }}
      >
        <LogOut size={18} />
        Log Out
      </div>
    </div>
  );
}