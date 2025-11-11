// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import LearnerLayout from "./layouts/LearnerLayout";
import TrainerLayout from "./layouts/TrainerLayout";

// Public Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Resources from "./pages/Resources";
import Business from "./pages/Business";
import Reviews from "./pages/Reviews";
import HireTalent from "./pages/HireTalent";
import Partnerships from "./pages/Partnerships";
import Scholarships from "./pages/Scholarships";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import BecomeMentorPage from "./pages/BecomeMentorPage";
import PlacementReport from "./components/PlacementReport.jsx";

// Hero Banner Subpages
import ExplorePrograms from "./pages/HeroBannerSlider/ExplorePrograms";
import JoinNow from "./pages/HeroBannerSlider/JoinNow";
import LearnMore from "./pages/HeroBannerSlider/LearnMore";
import BrowseCourses from "./pages/HeroBannerSlider/BrowseCourses";
import BusinessSolutions from "./pages/HeroBannerSlider/BusinessSolutions";

// Program Details
import FullStackProgramDetails from "./pages/ExploreProgramDetails/FullStackProgramDetails";
import DataScienceProgramDetails from "./pages/ExploreProgramDetails/DataScienceProgramDetails";
import CyberSecurityProgramDetails from "./pages/ExploreProgramDetails/CyberSecurityProgramDetails";
import CloudDevOpsProgramDetails from "./pages/ExploreProgramDetails/CloudDevOpsProgramDetails";

// Courses
import CoursesPage from "./pages/CoursesPage";
import CourseDetail from "./pages/CourseDetail";

// Contact / Auth
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OtpVerifyPage from "./pages/OtpVerifyPage";
import ForgotPasswordPage from "./pages/forgotPasswordFlow/ForgotPasswordPage";
import ResetOtpVerifyPage from "./pages/forgotPasswordFlow/ResetOtpVerifyPage";
import ResetPasswordPage from "./pages/forgotPasswordFlow/ResetPasswordPage";

// Learner Dashboard
import DashboardHome from "./modules/learner/pages/DashboardHome";
import MyCourses from "./modules/learner/pages/MyCourses";
import CourseDetails from "./modules/learner/pages/CourseDetails";
import Assignments from "./modules/learner/pages/Assignments";
import Discussions from "./modules/learner/pages/Discussions";
import Notifications from "./modules/learner/pages/Notifications";
import Grades from "./modules/learner/pages/Grades";
import MyProfile from "./modules/learner/pages/MyProfile";
import Settings from "./modules/learner/pages/Settings";
import MyCart from "./modules/learner/pages/MyCart";

// Trainer Dashboard
import TrainerDashboardHome from "./modules/trainer/pages/DashboardHome.jsx";
import CourseManagement from "./modules/trainer/pages/CourseManagement.jsx";
import MyTrainerCourses from "./modules/trainer/pages/MyCourses.jsx";
import StudentProgress from "./modules/trainer/pages/StudentProgress.jsx";
import TrainerEarnings from "./modules/trainer/pages/Earnings.jsx";
import TrainerDiscussions from "./modules/trainer/pages/Discussions.jsx";
import TrainerNotifications from "./modules/trainer/pages/Notifications.jsx";
import TrainerSettings from "./modules/trainer/pages/Settings.jsx";
import TrainerProfile from "./modules/trainer/pages/MyProfile.jsx";

// Admin Dashboard
import AdminDashboardHome from "./modules/admin/pages/DashboardHome";
import ManageUsers from "./modules/admin/pages/ManageUsers";
import ManageCourses from "./modules/admin/pages/ManageCourses";
import MentorRequests from "./modules/admin/pages/MentorRequests";
import Reports from "./modules/admin/pages/Reports";
import AdminNotifications from "./modules/admin/pages/Notifications";
import AdminSettings from "./modules/admin/pages/Settings";

/* ============ 404 PAGE ============ */
const NotFoundPage = () => (
  <div
    style={{
      textAlign: "center",
      padding: "120px 20px",
      background: "#f8fafc",
      minHeight: "70vh",
    }}
  >
    <h1 style={{ color: "#0b4da3", fontSize: "2.5rem", fontWeight: "800" }}>
      404 - Page Not Found
    </h1>
    <p style={{ color: "#475569", marginTop: "10px", fontSize: "1.1rem" }}>
      Oops! The page you’re looking for doesn’t exist or has been moved.
    </p>
  </div>
);

export default function App() {
  return (
    <Routes>
      {/* 🌐 MAIN LAYOUT (Public Site) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Core Public Pages */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/business" element={<Business />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/hire" element={<HireTalent />} />
        <Route path="/become-mentor" element={<BecomeMentorPage />} />
        <Route path="/placement-report" element={<PlacementReport />} />

        {/* Partnerships & More */}
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />

        {/* Courses */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />

        {/* Auth & Contact */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OtpVerifyPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-otp-verify" element={<ResetOtpVerifyPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Hero Banner Subpages */}
        <Route path="/explore-programs" element={<ExplorePrograms />} />
        <Route path="/join-learning-community" element={<JoinNow />} />
        <Route path="/learn-more-about-us" element={<LearnMore />} />
        <Route path="/browse-all-courses" element={<BrowseCourses />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />

        {/* Program Details */}
        <Route path="/programs/fullstack" element={<FullStackProgramDetails />} />
        <Route path="/programs/datascience" element={<DataScienceProgramDetails />} />
        <Route path="/programs/cybersecurity" element={<CyberSecurityProgramDetails />} />
        <Route path="/programs/cloud-devops" element={<CloudDevOpsProgramDetails />} />

        {/* Redirect Example */}
        <Route path="/start" element={<Navigate to="/login" replace />} />
      </Route>

      {/* 🧑‍🎓 LEARNER DASHBOARD */}
      <Route path="/dashboard" element={<LearnerLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="course/:id" element={<CourseDetails />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="discussions" element={<Discussions />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="grades" element={<Grades />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="cart" element={<MyCart />} />
      </Route>

      {/* 🧑‍🏫 TRAINER DASHBOARD */}
      <Route path="/trainer" element={<TrainerLayout />}>
        <Route path="dashboard" element={<TrainerDashboardHome />} />
        <Route path="my-courses" element={<MyTrainerCourses />} />
        <Route path="course-management" element={<CourseManagement />} />
        <Route path="student-progress" element={<StudentProgress />} />
        <Route path="earnings" element={<TrainerEarnings />} />
        <Route path="discussions" element={<TrainerDiscussions />} />
        <Route path="notifications" element={<TrainerNotifications />} />
        <Route path="settings" element={<TrainerSettings />} />
        <Route path="profile" element={<TrainerProfile />} />
      </Route>

      {/* 🧑‍💼 ADMIN DASHBOARD */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardHome />} />
        <Route path="dashboard" element={<AdminDashboardHome />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="courses" element={<ManageCourses />} />
        <Route path="mentors" element={<MentorRequests />} />
        <Route path="reports" element={<Reports />} />
        <Route path="notifications" element={<AdminNotifications />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* ❌ 404 PAGE */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
