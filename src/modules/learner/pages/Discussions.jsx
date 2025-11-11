import React from 'react';
import { MessageSquare, ThumbsUp, User } from 'lucide-react';

export default function Discussions() {
  const threads = [
    { title: 'Best practices for using useEffect dependencies array', course: 'Web Development', author: 'Alex J.', replies: 12, likes: 5, time: '2h ago', new: true },
    { title: 'Proof of concept for Kruskal\'s Algorithm', course: 'Data Structures', author: 'Dr. Lee', replies: 8, likes: 3, time: '1d ago', new: false },
    { title: 'Seeking resources for primary sources on WWI', course: 'European History', author: 'Student X', replies: 3, likes: 1, time: '3d ago', new: false },
  ];

  const styles = {
    container: { padding: '30px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' },
    threadList: { display: 'flex', flexDirection: 'column', gap: '15px' },
    threadItem: (isNew) => ({ padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: isNew ? '5px solid #0f4f9f' : '5px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', transition: 'box-shadow 0.2s' }),
    content: { flex: 1 },
    threadTitle: { margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 700, color: '#0f4f9f' },
    meta: { fontSize: '.9rem', color: '#64748b', display: 'flex', gap: '15px', alignItems: 'center', marginTop: '5px' },
    stats: { width: '150px', display: 'flex', gap: '15px', justifyContent: 'flex-end', alignItems: 'center', flexShrink: 0 },
    statItem: { display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.9rem', fontWeight: 600, color: '#475569' },
    newTag: { background: '#ef4444', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '.75rem', fontWeight: 700, marginLeft: '10px' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}><MessageSquare size={30} /> Discussion Forums</h1>
      
      <div style={styles.threadList}>
        {threads.map((thread, index) => (
          <div key={index} style={styles.threadItem(thread.new)}>
            <div style={styles.content}>
              <h3 style={styles.threadTitle}>
                {thread.title}
                {thread.new && <span style={styles.newTag}>NEW</span>}
              </h3>
              <p style={styles.meta}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>{thread.course}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={16} /> {thread.author}</span>
                <span>{thread.time}</span>
              </p>
            </div>
            
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <MessageSquare size={18} color="#2563eb" />
                <span>{thread.replies}</span>
              </div>
              <div style={styles.statItem}>
                <ThumbsUp size={18} color="#10b981" />
                <span>{thread.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button style={{ background: '#0f4f9f', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}>
          Start New Discussion
        </button>
      </div>
    </div>
  );
}