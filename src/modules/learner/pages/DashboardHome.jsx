import React from 'react';
import { BookOpen, AlertTriangle, BarChart3 } from 'lucide-react';

export default function DashboardHome() {
  const styles = {
    container: { padding: '30px', background: '#f8fafc' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '30px' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' },
    card: { background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: '5px solid' },
    cardTitle: { margin: '0 0 10px 0', fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' },
    cardValue: { fontSize: '2rem', fontWeight: 900, color: '#0f4f9f' },
    
    // Activity section
    activitySection: { background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
    activityTitle: { fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '15px' },
    activityItem: { padding: '15px 0', borderBottom: '1px dashed #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    activityText: { color: '#475569', fontSize: '1rem' },
    activityDate: { color: '#94a3b8', fontSize: '.9rem' },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Learning Hub Summary 👋</h1>

      {/* Quick Stat Cards */}
      <div style={styles.cardGrid}>
        <div style={{ ...styles.card, borderLeftColor: '#0f4f9f' }}>
          <h3 style={styles.cardTitle}><BookOpen size={24} color="#0f4f9f" /> Active Courses</h3>
          <p style={styles.cardValue}>4</p>
          <span style={{ color: '#64748b' }}>Keep up the great work!</span>
        </div>
        <div style={{ ...styles.card, borderLeftColor: '#ef4444' }}>
          <h3 style={styles.cardTitle}><AlertTriangle size={24} color="#ef4444" /> Pending Assignments</h3>
          <p style={{ ...styles.cardValue, color: '#ef4444' }}>2</p>
          <span style={{ color: '#64748b' }}>Deadlines approaching this week.</span>
        </div>
        <div style={{ ...styles.card, borderLeftColor: '#10b981' }}>
          <h3 style={styles.cardTitle}><BarChart3 size={24} color="#10b981" /> Overall Progress</h3>
          <p style={{ ...styles.cardValue, color: '#10b981' }}>85%</p>
          <span style={{ color: '#64748b' }}>View detailed grade reports.</span>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div style={styles.activitySection}>
        <h2 style={styles.activityTitle}>Recent Activity & Deadlines</h2>
        
        <div style={styles.activityItem}>
          <span style={styles.activityText}>**Assignment:** Web Dev Module 5 Quiz is due.</span>
          <span style={styles.activityDate}>Today, 11:59 PM</span>
        </div>
        <div style={styles.activityItem}>
          <span style={styles.activityText}>**New Grade:** Received B+ on Data Structures Midterm.</span>
          <span style={styles.activityDate}>2 hours ago</span>
        </div>
        <div style={styles.activityItem}>
          <span style={styles.activityText}>**Course Announcement:** History lecture rescheduled to 3 PM.</span>
          <span style={styles.activityDate}>Yesterday</span>
        </div>
        <div style={styles.activityItem}>
          <span style={styles.activityText}>**Discussion:** New reply in "Context API usage" thread.</span>
          <span style={styles.activityDate}>3 days ago</span>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="/dashboard/notifications" style={{ color: '#0f4f9f', textDecoration: 'none', fontWeight: 600 }}>View all notifications &rarr;</a>
        </div>
      </div>
    </div>
  );
}