import React, { useState } from 'react'; // Removed useEffect as it was unused
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Bell } from 'lucide-react';

// Helper function to safely get learner data
const getLearner = () => {
  try {
    const data = localStorage.getItem("learner");
    return data ? JSON.parse(data) : { firstName: "Learner" };
  } catch {
    return { firstName: "Learner" };
  }
};

export default function LearnerDashboard() {
  const learner = getLearner();
  const navigate = useNavigate();

  // Mock data for the dashboard summary
  const [stats, setStats] = useState({
    activeCourses: 3,
    assignmentsDue: 1,
    certificatesEarned: 2,
    latestActivity: "Completed Module 5 Quiz in 'React Basics'."
  });
  
  const accentColor = "#0f4f9f";
  const cardShadow = "0 4px 12px rgba(0,0,0,0.05)";

  return (
    <div style={{ padding: '0 0 20px 0' }}>
      
      {/* Welcome Banner */}
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: cardShadow,
        marginBottom: '20px'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 800, 
          color: accentColor, 
          margin: '0 0 8px 0' 
        }}>
          Hello, {learner.firstName}!
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', margin: 0 }}>
          Ready to continue your learning journey? Here’s a snapshot of your progress.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginBottom: '20px'
      }}>
        
        {/* Active Courses Card */}
        <DashboardCard 
          icon={<BookOpen size={32} color={accentColor} />} 
          title="Active Courses" 
          value={stats.activeCourses} 
          onClick={() => navigate('/dashboard/my-courses')}
        />
        
        {/* Assignments Due Card */}
        <DashboardCard 
          icon={<Bell size={32} color={stats.assignmentsDue > 0 ? '#ef4444' : '#65a30d'} />} 
          title="Assignments Due" 
          value={stats.assignmentsDue} 
          subtitle={stats.assignmentsDue > 0 ? 'Action Required' : 'All Clear'}
          onClick={() => navigate('/dashboard/assignments')}
        />

        {/* Certificates Card */}
        <DashboardCard 
          icon={<Award size={32} color={accentColor} />} 
          title="Certificates Earned" 
          value={stats.certificatesEarned} 
          onClick={() => navigate('/dashboard/profile')}
        />
      </div>

      {/* Latest Activity/Quick Actions Section */}
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: cardShadow 
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginTop: 0 }}>
          Latest Activity
        </h2>
        <p style={{ color: '#475569', borderLeft: `4px solid ${accentColor}`, paddingLeft: '15px' }}>
          {stats.latestActivity}
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => navigate('/dashboard/my-courses')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: accentColor, 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer', 
              fontWeight: 600,
              transition: 'background-color 0.2s',
            }}
            // Note: Direct hover is not possible with inline styles, use a CSS class or CSS-in-JS for :hover
          >
            Go To My Courses
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component (styled with hover state via local state)
const DashboardCard = ({ icon, title, value, subtitle, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.2s, box-shadow 0.2s',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
  };

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        {icon}
        <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e293b' }}>{value}</span>
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', margin: '0 0 4px 0' }}>{title}</h3>
      {subtitle && <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>{subtitle}</p>}
    </div>
  );
};