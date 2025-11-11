import React, { useState } from 'react';
import { BookOpen, PlayCircle, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const courseData = {
  title: 'Mastering React Hooks and Advanced Concepts',
  instructor: 'Jane Doe',
  duration: '12.5 hours',
  lessonsCompleted: 8,
  totalLessons: 15,
  modules: [
    { name: 'Introduction to Hooks', lessons: [{ title: 'What are Hooks?', completed: true }, { title: 'useState and useEffect', completed: true }] },
    { name: 'Advanced State Management', lessons: [{ title: 'useReducer Deep Dive', completed: true }, { title: 'The Context API', completed: false }] },
  ],
};

export default function CourseDetails() {
  const [openModule, setOpenModule] = useState(courseData.modules[0].name);
  const completionPercentage = Math.round((courseData.lessonsCompleted / courseData.totalLessons) * 100);

  const styles = {
    container: { padding: '30px' },
    header: { marginBottom: '30px', background: '#0f4f9f', color: '#fff', padding: '30px', borderRadius: '12px' },
    title: { fontSize: '2.5rem', fontWeight: 800, margin: 0 },
    meta: { display: 'flex', gap: '20px', fontSize: '1rem', marginTop: '10px' },
    progressBox: { background: '#fff', color: '#1e293b', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginTop: '20px' },
    moduleTitle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#e2e8f0', cursor: 'pointer', borderRadius: '8px', marginBottom: '5px' },
    lessonItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 30px', borderLeft: '3px solid #cbd5e1', cursor: 'pointer', transition: 'background 0.2s' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{courseData.title}</h1>
        <div style={styles.meta}>
          <span>By {courseData.instructor}</span>
          <span><Clock size={16} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> {courseData.duration} total</span>
        </div>
        <div style={styles.progressBox}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 700 }}>Your Progress: {completionPercentage}%</p>
          <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
            <div 
              style={{ width: `${completionPercentage}%`, height: '100%', background: '#22c55e', borderRadius: '4px', transition: 'width 0.5s' }}
            />
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '20px' }}>Course Curriculum</h2>
      {courseData.modules.map((module, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
          <div 
            style={styles.moduleTitle}
            onClick={() => setOpenModule(openModule === module.name ? null : module.name)}
          >
            <span style={{ fontWeight: 700, color: '#1e293b' }}>{index + 1}. {module.name}</span>
            {openModule === module.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {openModule === module.name && (
            <div style={{ background: '#f8fafc' }}>
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} style={{ ...styles.lessonItem, background: lesson.completed ? '#f0f9ff' : '#fff' }}>
                  {lesson.completed ? <CheckCircle size={18} color="#22c55e" /> : <PlayCircle size={18} color="#94a3b8" />}
                  <span>Lesson {lessonIndex + 1}: {lesson.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}