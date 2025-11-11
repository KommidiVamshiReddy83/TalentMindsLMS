import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Earnings() {
  const data = [
    { month: "May", earnings: 320 },
    { month: "Jun", earnings: 420 },
    { month: "Jul", earnings: 510 },
    { month: "Aug", earnings: 590 },
    { month: "Sep", earnings: 640 },
    { month: "Oct", earnings: 700 },
  ];

  return (
    <div>
      <h1>Earnings Overview</h1>
      <p className="sub">Track monthly payouts and revenue trends.</p>

      <div className="chart">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#2563eb" name="Earnings ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:18px;}
        .chart {background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px;}
      `}</style>
    </div>
  );
}
