import React from 'react';
import { CheckCircle, Clock, AlertTriangle, MessageSquare } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    { id: 1, type: 'grade', message: 'You received a grade of **A** on the Web Dev Final Quiz.', time: '5 minutes ago', icon: CheckCircle, color: '#10b981' },
    { id: 2, type: 'announcement', message: 'New **Course Announcement** posted in Data Structures.', time: '1 hour ago', icon: AlertTriangle, color: '#f97316' },
  ];

  const styles = {
    container: { padding: '30px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '25px' },
    list: { marginTop: '20px' },
    item: { display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', marginBottom: '10px', borderLeft: '4px solid', cursor: 'pointer', transition: 'box-shadow 0.2s' },
    message: { flex: 1, fontSize: '1rem' },
    time: { fontSize: '.8rem', color: '#64748b' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Notifications & Alerts</h1>
      
      <div style={{ textAlign: 'right', marginBottom: '15px' }}>
        <button style={{ background: '#94a3b8', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}>Mark All as Read</button>
      </div>

      <div style={styles.list}>
        {notifications.map((notif) => (
          <div key={notif.id} style={{ ...styles.item, borderLeftColor: notif.color }}>
            <notif.icon size={20} color={notif.color} style={{ flexShrink: 0 }} />
            <div style={styles.message}>
              <span dangerouslySetInnerHTML={{ __html: notif.message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              <div style={styles.time}>{notif.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}