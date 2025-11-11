import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Phone, Lock, Eye, EyeOff, User, Briefcase, Shield } from "lucide-react";

const USER_ROLES = [
  { id: "learner", label: "Learner", icon: User },
  { id: "trainer", label: "Mentor", icon: Briefcase },
  { id: "admin", label: "Admin", icon: Shield },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [selectedRole, setSelectedRole] = useState(USER_ROLES[0].id);
  const [loginData, setLoginData] = useState({ email: "", phone: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((p) => ({ ...p, [name]: value }));
  };

  const handleRoleChange = (id) => setSelectedRole(id);
  const switchLoginType = () => setLoginType((t) => (t === "email" ? "phone" : "email"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const idValue = loginType === "email" ? loginData.email.trim() : loginData.phone.trim();
    if (!idValue) {
      setError(`${loginType === "email" ? "Email" : "Phone number"} is required.`);
      return;
    }
    if (!loginData.password.trim()) {
      setError("Password is required.");
      return;
    }

    setLoading(true);
    
    // Simulate login and store user data
    setTimeout(() => {
      // Store user data in localStorage
     const userData = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: loginData.email || 'admin@talentminds.com',
  role: selectedRole,
};

localStorage.setItem(selectedRole, JSON.stringify(userData)); // store by role

setSuccess(true);
setLoading(false);

    setTimeout(() => {
      // ensure a common user object is available for any auth checks
      const userPayload = { ...userData, role: selectedRole, isAdmin: selectedRole === "admin" };
      localStorage.setItem("user", JSON.stringify(userPayload));
      // keep role-specific key as before (optional)
      localStorage.setItem(selectedRole, JSON.stringify(userData));

      // debug log to verify stored values & navigation target
      // (remove console.logs in production)
      // eslint-disable-next-line no-console
      console.log("Login success:", userPayload);

      // navigate to correct dashboard
      if (selectedRole === "learner") {
        navigate("/dashboard", { replace: true });
      } else if (selectedRole === "trainer") {
        navigate("/trainer/dashboard", { replace: true });
      } else if (selectedRole === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }, 1000);

    }, 1000);
  };

  const currentRole = USER_ROLES.find((r) => r.id === selectedRole);

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div className="auth-modal">
          <h1>Welcome Back 👋</h1>
          <p className="subtitle">Sign in to your <b>{currentRole.label}</b> dashboard.</p>

          {/* Role Selection */}
          <div className="role-selection">
            {USER_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  className={`role-card ${selectedRole === role.id ? "active" : ""}`}
                  onClick={() => handleRoleChange(role.id)}
                >
                  <Icon size={16} />
                  <span>{role.label}</span>
                </div>
              );
            })}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {loginType === "email" ? (
              <div className="form-group">
                <Mail className="icon" size={18} />
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Email Address</label>
              </div>
            ) : (
              <div className="form-group">
                <Phone className="icon" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={loginData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label>Phone Number</label>
              </div>
            )}

            <div className="switch-type" onClick={switchLoginType}>
              {loginType === "email" ? "Use Phone Instead" : "Use Email Instead"}
            </div>

            <div className="form-group">
              <Lock className="icon" size={18} />
              <input
                type={showPwd ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label>Password</label>
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPwd((s) => !s)}
                aria-label="Toggle Password"
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && <p className="error-msg">⚠️ {error}</p>}
            {success && <p className="success-msg">✅ Login successful — redirecting...</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing in..." : `Continue as ${currentRole.label}`}
            </button>
          </form>

          {/* OR Divider */}
          <div className="divider">
            <span className="line" />
            <span>or sign in with</span>
            <span className="line" />
          </div>

          {/* Social Icons */}
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

          {/* Signup Redirect */}
          <div className="signup-link">
            New to <b>TalentMinds</b>? <Link to="/signup">Create an account</Link>
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
        .auth-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 16px;
        }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 { text-align: center; margin-bottom: 8px; font-size: 1.7rem; font-weight: 700; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-selection { display: flex; gap: 10px; margin-bottom: 20px; }
        .role-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.9rem;
        }
        .role-card.active {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
        }
        .form-group {
          position: relative;
          margin-bottom: 18px;
        }
        .form-group input {
          width: 100%;
          padding: 12px 12px 12px 38px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
        }
        .form-group input:focus {
          border-color: #2563eb;
        }
        .form-group label {
          position: absolute;
          left: 38px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          background: #fff;
          padding: 0 4px;
          transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.8rem;
          color: #2563eb;
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        .eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
        }
        .switch-type {
          text-align: right;
          color: #2563eb;
          font-size: 0.85rem;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .login-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.2s;
        }
        .login-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .signup-link { text-align: center; margin-top: 20px; font-size: 0.9rem; }
        .signup-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) {
          .auth-modal { padding: 24px; }
          .auth-container { padding-top: 60px; }
        }
      `}</style>
    </div>
  );
}
