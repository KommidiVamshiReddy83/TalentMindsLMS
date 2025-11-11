import React, { useState } from 'react';
import { Bell, Lock, Globe } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
  });

  const styles = {
    container: { padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#0f4f9f', marginBottom: '25px' },
    sectionTitle: { fontSize: '1.4rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '20px', marginTop: '20px' },
    settingItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #f1f5f9' },
    label: { fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', gap: '10px' },
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      
      <h2 style={styles.sectionTitle}><Bell size={20}/> Notification Preferences</h2>
      <div style={styles.settingItem}>
        <span style={styles.label}>Receive email notifications for new grades</span>
        <input 
          type="checkbox" 
          checked={settings.emailNotifications} 
          onChange={(e) => handleChange('emailNotifications', e.target.checked)} 
        />
      </div>

      <h2 style={styles.sectionTitle}><Lock size={20}/> Account & Privacy</h2>
      <div style={styles.settingItem}>
        <span style={styles.label}>Change Password</span>
        <button style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}>Update</button>
      </div>
    </div>
  );
}