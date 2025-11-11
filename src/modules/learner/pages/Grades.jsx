import React, { useState } from 'react';
import { BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

export default function Grades() {
  const [openCourse, setOpenCourse] = useState('Web Development');
  const gradesData = [
    { 
      course: 'Web Development', 
      overall: '92.5%', 
      grade: 'A',
      items: [
        { name: 'HTML Basics Quiz', score: '10/10', weight: '5%', color: '#10b981' },
        { name: 'CSS Layout Project', score: '95/100', weight: '25%', color: '#0f4f9f' },
        { name: 'Module 5 Quiz', score: 'N/A', weight: '5%', color: '#f97316' },
      ]
    },
    { 
      course: 'Data Structures', 
      overall: '85.0%', 
      grade: 'B+',
      items: [
        { name: 'Midterm Exam', score: '79/100', weight: '40%', color: '#0f4f9f' },
        { name: 'Assignment 1: Linked Lists', score: '90/100', weight: '20%', color: '#10b981' },
      ]
    },
  ];

  const styles = {
    container: { padding: '30px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', marginBottom: '30px' },
    courseCard: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', marginBottom: '20px', overflow: 'hidden' },
    courseHeader: (gradeColor) => ({ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 25px', 
      background: '#f1f5f9', 
      cursor: 'pointer',
      borderLeft: `5px solid ${gradeColor}`
    }),
    courseName: { fontSize: '1.4rem', fontWeight: 700, color: '#1e293b', margin: 0 },
    overallGrade: { fontSize: '1.8rem', fontWeight: 900, color: '#10b981' },
    gradeDetails: { padding: '20px 25px', background: '#fff' },
    itemRow: (color) => ({ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f8fafc' }),
    itemName: { fontWeight: 600, color: '#475569', flex: 2 },
    itemScore: (color) => ({ fontWeight: 700, color: color, width: '100px', textAlign: 'right' }),
    itemWeight: { color: '#94a3b8', width: '80px', textAlign: 'right' },
  };
  
  const getGradeColor = (grade) => {
    if (grade.includes('A')) return '#10b981';
    if (grade.includes('B')) return '#2563eb';
    if (grade.includes('C')) return '#f97316';
    return '#ef4444';
  };

  const getScoreColor = (score) => {
    if (score === 'N/A') return '#f97316';
    const [num, den] = score.split('/').map(s => parseFloat(s.trim()));
    if (den && num / den >= 0.9) return '#10b981';
    if (den && num / den >= 0.8) return '#2563eb';
    return '#ef4444';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Course Grades</h1>
      
      {gradesData.map((course, index) => (
        <div key={index} style={styles.courseCard}>
          <div 
            style={styles.courseHeader(getGradeColor(course.grade))}
            onClick={() => setOpenCourse(openCourse === course.course ? null : course.course)}
          >
            <div>
              <h2 style={styles.courseName}>{course.course}</h2>
              <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>Overall Average: {course.overall}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ ...styles.overallGrade, color: getGradeColor(course.grade) }}>{course.grade}</span>
              {openCourse === course.course ? <ChevronUp size={24} color="#475569" /> : <ChevronDown size={24} color="#475569" />}
            </div>
          </div>

          {openCourse === course.course && (
            <div style={styles.gradeDetails}>
              <div style={{...styles.itemRow(), fontWeight: 700, borderBottom: '1px solid #e2e8f0', marginBottom: '5px'}}>
                <span style={styles.itemName}>Item Name</span>
                <span style={styles.itemWeight}>Weight</span>
                <span style={{...styles.itemScore(), color: '#1e293b'}}>Score</span>
              </div>
              {course.items.map((item, itemIndex) => (
                <div key={itemIndex} style={styles.itemRow(getScoreColor(item.score))}>
                  <span style={styles.itemName}>{item.name}</span>
                  <span style={styles.itemWeight}>{item.weight}</span>
                  <span style={styles.itemScore(getScoreColor(item.score))}>{item.score}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}