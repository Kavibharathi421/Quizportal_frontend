import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import LiveMonitoringPage from "../pages/admin/LiveMonitoringPage";
import StudentDashboardPage from "../pages/student/StudentDashboardPage";
import StudentExamPage from "../pages/student/StudentExamPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login/student" replace />} />
      <Route path="/login/admin" element={<LoginPage role="admin" />} />
      <Route path="/login/student" element={<LoginPage role="student" />} />

      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/monitoring" element={<LiveMonitoringPage />} />
      <Route path="/admin/exams" element={<AdminDashboardPage />} />

      <Route path="/student" element={<StudentDashboardPage />} />
      <Route path="/student/exams" element={<StudentExamPage />} />
      <Route path="/student/exams/:id" element={<StudentExamPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
