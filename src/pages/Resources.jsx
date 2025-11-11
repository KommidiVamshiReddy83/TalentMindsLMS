
import React, { useState } from "react";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 cards

  const styles = {
    section: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8fafc",
      padding: "60px 20px",
      color: "#1e293b",
      marginTop:"30px"
    },
    heading: {
      textAlign: "center",
      fontSize: "2.4rem",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#0f172a",
    },
    subheading: {
      textAlign: "center",
      fontSize: "1.1rem",
      maxWidth: "850px",
      margin: "0 auto 50px",
      color: "#475569",
      lineHeight: "1.6",
    },
    controls: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      marginBottom: "40px",
    },
    searchInput: {
      padding: "12px 18px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      fontSize: "1rem",
      width: "280px",
      outline: "none",
    },
    categorySelect: {
      padding: "12px 18px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
      fontSize: "1rem",
      outline: "none",
      background: "#fff",
      cursor: "pointer",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    },
    cardTitle: {
      fontSize: "1.25rem",
      color: "#2563eb",
      fontWeight: "600",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "0.95rem",
      color: "#475569",
      lineHeight: "1.6",
    },
    divider: {
      width: "80px",
      height: "3px",
      backgroundColor: "#2563eb",
      margin: "12px auto 40px",
      borderRadius: "4px",
    },
    loadMoreBtn: {
      display: "block",
      margin: "40px auto 0",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "12px 28px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    footer: {
      marginTop: "60px",
      textAlign: "center",
      color: "#64748b",
      fontSize: "0.9rem",
      lineHeight: "1.6",
    },
  };

  // ---------------- DATA ----------------
  const resources = [
    { title: "AI & Machine Learning Program", text: "Hands-on Generative AI and NLP using TensorFlow + OpenAI.", category: "AI & Machine Learning" },
    { title: "Data Analytics & Business Intelligence", text: "Power BI and Tableau projects turning data into business insights.", category: "Data & Analytics" },
    { title: "Cybersecurity Professional Training", text: "Ethical hacking, SOC analysis, and CompTIA Security+.", category: "Cybersecurity" },
    { title: "Cloud & DevOps Bootcamp", text: "AWS, Azure, Docker and CI/CD deployment pipelines.", category: "Cloud & DevOps" },
    { title: "Digital Marketing Certification", text: "SEO, SEM and Google Analytics for modern marketers.", category: "Business & Marketing" },
    { title: "Project & Product Management", text: "PMI®, Scrum and PRINCE2® certification prep.", category: "Management" },
    { title: "AI Engineer Career Playbook (Free Guide)", text: "Download career roadmaps and AI transition guides.", category: "Free Resources" },
    { title: "Free Micro Courses Library", text: "Access 500+ short courses for continuous upskilling.", category: "Free Courses" },
    { title: "Enterprise Learning Hub+", text: "Corporate AI-driven training with analytics dashboards.", category: "Enterprise Solutions" },
    { title: "Leadership Acceleration Program", text: "Upskill managers for digital strategy and innovation.", category: "Enterprise Solutions" },
    { title: "Career Transformation Webinar Series", text: "Weekly sessions from industry mentors and recruiters.", category: "Free Resources" },
    { title: "Advanced Data Engineering", text: "Big data pipelines with Spark, Kafka and Airflow.", category: "Data & Analytics" },
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Data & Analytics",
    "Cybersecurity",
    "Cloud & DevOps",
    "Management",
    "Business & Marketing",
    "Enterprise Solutions",
    "Free Courses",
    "Free Resources",
  ];

  // ------------- FILTER -------------
  const filtered = resources.filter((r) => {
    const matchesCat = selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const visibleResources = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  // ------------- RENDER -------------
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>HG’s TalentMinds Resource Hub</h1>
      <p style={styles.subheading}>
        Search, filter and explore our latest learning tracks, enterprise solutions, and free career resources designed to help you lead in the AI era.
      </p>

      {/* Filters */}
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.categorySelect}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div style={styles.divider}></div>

      {/* Cards */}
      <div style={styles.grid}>
        {visibleResources.length > 0 ? (
          visibleResources.map((r, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                })
              }
            >
              <h3 style={styles.cardTitle}>{r.title}</h3>
              <p style={styles.cardText}>{r.text}</p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                  marginTop: "10px",
                  fontStyle: "italic",
                }}
              >
                Category: {r.category}
              </p>
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              color: "#64748b",
              fontSize: "1rem",
            }}
          >
            No matching resources found.
          </p>
        )}
      </div>

      {/* Load More */}
      {canLoadMore && (
        <button
          style={styles.loadMoreBtn}
          onClick={() => setVisibleCount((v) => v + 3)}
        >
          Load More
        </button>
      )}

      <p style={styles.footer}>
        © 2025 <strong>HG’s TalentMinds</strong>. All Rights Reserved.  
        <br />
        Certification names such as PMP®, ITIL®, PRINCE2®, CISSP®, AWS®, and Scrum® are trademarks of their respective owners.  
        <br />
        HG’s TalentMinds empowers global professionals and enterprises through AI-powered learning and digital transformation.
      </p>
    </section>
  );
}
