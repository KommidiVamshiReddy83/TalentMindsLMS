import React, { useState } from 'react';
import { User, Mail, Smartphone } from 'lucide-react';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '555-123-4567',
    bio: 'Avid learner of web development and data science.',
  });

  const styles = {
    container: { padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#0f4f9f', marginBottom: '25px' },
    card: { marginBottom: '20px', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' },
    label: { fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' },
    value: { fontSize: '1rem', color: '#1e293b' },
    button: { background: isEditing ? '#ef4444' : '#0f4f9f', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s' },
    input: { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', marginTop: '5px' },
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Profile</h1>
      <div style={styles.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* ... input fields for first name, last name, email, phone ... */}
        </div>
        <div style={{ marginTop: '20px' }}>
          <label style={styles.label}>Bio</label>
          {isEditing ? (
            <textarea name="bio" value={profileData.bio} onChange={handleChange} style={{ ...styles.input, height: '100px' }} />
          ) : (
            <p style={styles.value}>{profileData.bio}</p>
          )}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button 
          style={styles.button}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}