import React from 'react';
import { Clock, TrendingUp, Zap } from 'lucide-react';

export default function MyCourses() {
  const courses = [
    { title: 'Introduction to Web Development', instructor: 'J. Smith', progress: 75, status: 'Active', color: '#0f4f9f' },
    { title: 'Advanced Data Structures & Algorithms', instructor: 'Dr. K. Lee', progress: 32, status: 'Active', color: '#f97316' },
    { title: 'Modern European History', instructor: 'Prof. A. Bell', progress: 98, status: 'Finishing', color: '#10b981' },
    { title: 'Calculus I: Limits and Derivatives', instructor: 'T. Jones', progress: 5, status: 'Starting', color: '#64748b' },
  ];

  const styles = {
    container: { padding: '30px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '30px' },
    courseGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' },
    courseCard: { background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' },
    courseTitle: { fontSize: '1.4rem', fontWeight: 700, color: '#1e293b', marginBottom: '5px' },
    instructor: { color: '#64748b', fontSize: '.9rem', marginBottom: '15px' },
    progressLabel: { fontWeight: 600, color: '#475569', marginBottom: '5px' },
    progressBarContainer: { height: '10px', background: '#e2e8f0', borderRadius: '5px', marginBottom: '20px' },
    progressBar: (progress, color) => ({ width: `${progress}%`, height: '100%', background: color, borderRadius: '5px', transition: 'width 0.5s' }),
    button: (color) => ({ background: color, color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }),
    statusTag: (color) => ({ padding: '4px 10px', borderRadius: '4px', background: color, color: '#fff', fontSize: '.8rem', fontWeight: 700, alignSelf: 'flex-start', marginBottom: '10px' }),
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Enrolled Courses</h1>
      
      <div style={styles.courseGrid}>
        {courses.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <span style={styles.statusTag(course.color)}>{course.status}</span>
            <h2 style={styles.courseTitle}>{course.title}</h2>
            <p style={styles.instructor}>Instructor: {course.instructor}</p>

            <p style={styles.progressLabel}>Progress: {course.progress}%</p>
            <div style={styles.progressBarContainer}>
              <div style={styles.progressBar(course.progress, course.color)}></div>
            </div>

            <button 
              style={styles.button(course.color)}
              onClick={() => console.log(`Navigating to ${course.title} details`)}
            >
              <Zap size={18} /> Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}