import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from "recharts";

export default function Reports() {
  const userGrowth = [
    { month: "May", users: 320 },
    { month: "Jun", users: 460 },
    { month: "Jul", users: 540 },
    { month: "Aug", users: 720 },
    { month: "Sep", users: 810 },
    { month: "Oct", users: 940 },
  ];

  const revenueData = [
    { month: "May", revenue: 5400, profit: 1900 },
    { month: "Jun", revenue: 6900, profit: 2500 },
    { month: "Jul", revenue: 8800, profit: 3100 },
    { month: "Aug", revenue: 10400, profit: 3600 },
    { month: "Sep", revenue: 11200, profit: 4000 },
    { month: "Oct", revenue: 12100, profit: 4400 },
  ];

  const enrollmentData = [
    { course: "React Basics", learners: 480 },
    { course: "Data Science", learners: 420 },
    { course: "Python ML", learners: 390 },
    { course: "SQL Essentials", learners: 330 },
    { course: "UI Design", learners: 270 },
  ];

  return (
    <div className="reports">
      <h1>Reports & Analytics</h1>
      <p className="subtitle">
        Track user growth, enrollment trends, and platform revenue.
      </p>

      {/* User Growth Chart */}
      <div className="chart-card">
        <h3>User Growth (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={userGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Summary */}
      <div className="chart-card">
        <h3>Revenue Summary</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#60a5fa" name="Revenue ($)" />
            <Bar dataKey="profit" fill="#2563eb" name="Profit ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Enrolled Courses */}
      <div className="chart-card">
        <h3>Top Enrolled Courses</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Learners</th>
            </tr>
          </thead>
          <tbody>
            {enrollmentData.map((course) => (
              <tr key={course.course}>
                <td>{course.course}</td>
                <td>{course.learners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .reports {
          padding: 10px 4px;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 800;
        }
        .subtitle {
          color: #64748b;
          margin-bottom: 22px;
          font-size: 0.95rem;
        }
        .chart-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 22px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .chart-card h3 {
          margin: 0 0 12px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .data-table th, .data-table td {
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
          padding: 10px 8px;
        }
        .data-table th {
          background: #f8fafc;
          color: #475569;
          font-weight: 600;
        }
        .data-table tr:hover {
          background: #f1f5f9;
        }
      `}</style>
    </div>
  );
}
