import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const ROLE_OPTIONS = [
  { id: "learner", label: "Learner Account" },
  { id: "trainer", label: "Mentor / Instructor" },
  { id: "admin", label: "Admin Access" },
];

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState(ROLE_OPTIONS[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    expertise: "",
    yearsExperience: "",
    linkedInUrl: "",
    bio: "",
    resume: "",
    adminCode: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const role = selectedRole.id;
    const requiredFields = ["firstName", "lastName", "email", "phone", "password"];

    // Validation logic per role
    if (role === "learner") {
      if (requiredFields.some((f) => !formData[f])) return setError("Please fill in all required fields.");
      if (formData.password !== formData.confirmPassword) return setError("Passwords do not match.");
    } 
    else if (role === "trainer") {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.expertise)
        return setError("Please complete all required fields.");
    } 
    else if (role === "admin") {
      if (!formData.adminCode.trim()) return setError("Access Code is required for admin registration.");
      if (formData.adminCode !== "TALENTMINDS-ACCESS") return setError("Invalid access code.");
    }

    // Simulate API
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "",
        expertise: "", yearsExperience: "", linkedInUrl: "", bio: "", resume: "", adminCode: "",
      });
    }, 1000);
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div className="auth-modal">
          <h1>Create Your TalentMinds Account</h1>
          <p className="subtitle">Choose your account type to begin your journey.</p>

          {/* Role Selector */}
          <div className="role-card-selection">
            {ROLE_OPTIONS.map((role) => (
              <div
                key={role.id}
                className={`role-card ${selectedRole.id === role.id ? "active" : ""}`}
                onClick={() => setSelectedRole(role)}
              >
                {role.label}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Common Fields */}
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder=" " required />
                <label>First Name</label>
              </div>
              <div className="form-group">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder=" " required />
                <label>Last Name</label>
              </div>
            </div>

            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
              <label>Email Address</label>
            </div>

            {/* Learner Fields */}
            {selectedRole.id === "learner" && (
              <>
                <div className="form-group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder=" " required />
                  <label>Mobile Number</label>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type={showPwd ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label>Create Password</label>
                    <button type="button" className="eye-btn" onClick={() => setShowPwd(!showPwd)}>
                      {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="form-group">
                    <input
                      type={showPwd2 ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label>Confirm Password</label>
                    <button type="button" className="eye-btn" onClick={() => setShowPwd2(!showPwd2)}>
                      {showPwd2 ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Mentor Fields */}
            {selectedRole.id === "trainer" && (
              <>
                <div className="form-group">
                  <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} placeholder=" " required />
                  <label>Area of Expertise</label>
                </div>

                <div className="form-group">
                  <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} placeholder=" " />
                  <label>Years of Experience</label>
                </div>

                <div className="form-group">
                  <input type="url" name="linkedInUrl" value={formData.linkedInUrl} onChange={handleChange} placeholder=" " />
                  <label>LinkedIn Profile (optional)</label>
                </div>

                <div className="form-group">
                  <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder=" " rows="3" />
                  <label>Short Bio</label>
                </div>

                <div className="form-group">
                  <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" />
                  <label>Upload Resume / CV</label>
                </div>
              </>
            )}

            {/* Admin Fields */}
            {selectedRole.id === "admin" && (
              <div className="form-group">
                <input
                  type="text"
                  name="adminCode"
                  value={formData.adminCode}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Admin Access Code</label>
              </div>
            )}

            {error && <p className="error-msg">⚠️ {error}</p>}
            {success && (
              <p className="success-msg">
                ✅ {selectedRole.label} signup successful!{" "}
                <Link to="/login">Go to Login</Link>.
              </p>
            )}

            <button className="signup-btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : `Register as ${selectedRole.label}`}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="line" />
            <span>or sign up with</span>
            <span className="line" />
          </div>

          {/* Social Logins */}
          <div className="social-login-row">
            {[
              { src: "https://www.svgrepo.com/show/475656/google-color.svg", alt: "Google" },
              { src: "https://www.svgrepo.com/show/448234/linkedin.svg", alt: "LinkedIn" },
              { src: "https://www.svgrepo.com/show/512317/github-142.svg", alt: "GitHub" },
              { src: "https://www.svgrepo.com/show/303115/facebook-3-logo.svg", alt: "Facebook" },
            ].map((icon, i) => (
              <button key={i} className="social" type="button" title={icon.alt}>
                <img src={icon.src} alt={icon.alt} />
              </button>
            ))}
          </div>

          {/* Login Link */}
          <div className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>

      <style>{`
        .auth-bg {
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .auth-container { width: 100%; display: flex; justify-content: center; padding: 40px 16px; }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        h1 { text-align: center; font-size: 1.7rem; font-weight: 700; margin-bottom: 6px; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-card-selection { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .role-card { flex: 1; text-align: center; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: 0.2s; margin: 0 5px; }
        .role-card.active { background: #2563eb; color: #fff; border-color: #2563eb; }
        .form-row { display: flex; gap: 10px; }
        .form-group { position: relative; margin-bottom: 16px; flex: 1; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 12px 12px 12px 10px; border: 1px solid #d1d5db;
          border-radius: 8px; font-size: 1rem; outline: none; resize: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #2563eb; }
        .form-group label {
          position: absolute; top: 50%; left: 12px; transform: translateY(-50%);
          color: #9ca3af; background: #fff; padding: 0 4px; transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label, .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label, .form-group textarea:not(:placeholder-shown) + label {
          top: -8px; font-size: 0.8rem; color: #2563eb;
        }
        .eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: #6b7280;
        }
        .signup-btn {
          width: 100%; padding: 12px; background: #2563eb; border: none; color: #fff;
          font-weight: 700; border-radius: 8px; cursor: pointer; font-size: 1rem;
        }
        .signup-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social { flex: 1; display: flex; justify-content: center; align-items: center;
          border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
          height: 42px; cursor: pointer; transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .login-link { text-align: center; margin-top: 18px; font-size: 0.9rem; }
        .login-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) { .auth-modal { padding: 24px; } .form-row { flex-direction: column; } }
      `}</style>
    </div>
  );
}
