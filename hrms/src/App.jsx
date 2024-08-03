import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PasswordResetConfirmation from './pages/auth/PasswordResetConfirmation';
import MainDashboard from './pages/dashboard/MainDashboard';
import EmployeeDirectory from './pages/employee/EmployeeDirectory';
import EmployeeProfile from './pages/employee/EmployeeProfile';
import AddEditEmployee from './pages/employee/AddEditEmployee';
import DepartmentManagement from './pages/department/DepartmentManagement';
import LeaveRequest from './pages/leave/LeaveRequest';
import LeaveApproval from './pages/leave/LeaveApproval';
import LeaveHistory from './pages/leave/LeaveHistory';
import PayrollDashboard from './pages/payroll/PayrollDashboard';
import PayrollRecords from './pages/payroll/PayrollRecords';
import PayrollReport from './pages/payroll/PayrollReport';
import PerformanceReview from './pages/performance/PerformanceReview';
import PerformanceAnalytics from './pages/performance/PerformanceAnalytics';
import EmployeeReports from './pages/reports/EmployeeReports';
import LeaveReports from './pages/reports/LeaveReports';
import PayrollReports from './pages/reports/PayrollReports';
import PerformanceReports from './pages/reports/PerformanceReports';
import UserSettings from './pages/settings/UserSettings';
import AdminSettings from './pages/settings/AdminSettings';
import HelpCenter from './pages/help/HelpCenter';
import Documentation from './pages/help/Documentation';
import NotificationCenter from './pages/notification/NotificationCenter';
import ErrorPage from './pages/error/ErrorPage';
import MaintenancePage from './pages/maintenance/MaintenancePage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
            <Route path="/" element={<MainDashboard />} />
            <Route path="/employees" element={<EmployeeDirectory />} />
            <Route path="/employees/:id" element={<EmployeeProfile />} />
            <Route path="/employees/add" element={<AddEditEmployee />} />
            <Route path="/employees/edit/:id" element={<AddEditEmployee />} />
            <Route path="/departments" element={<DepartmentManagement />} />
            <Route path="/leave/request" element={<LeaveRequest />} />
            <Route path="/leave/approval" element={<LeaveApproval />} />
            <Route path="/leave/history" element={<LeaveHistory />} />
            <Route path="/payroll" element={<PayrollDashboard />} />
            <Route path="/payroll/records" element={<PayrollRecords />} />
            <Route path="/payroll/report" element={<PayrollReport />} />
            <Route path="/performance/review" element={<PerformanceReview />} />
            <Route path="/performance/analytics" element={<PerformanceAnalytics />} />
            <Route path="/reports/employees" element={<EmployeeReports />} />
            <Route path="/reports/leave" element={<LeaveReports />} />
            <Route path="/reports/payroll" element={<PayrollReports />} />
            <Route path="/reports/performance" element={<PerformanceReports />} />
            <Route path="/settings/user" element={<UserSettings />} />
            <Route path="/settings/admin" element={<AdminSettings />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/notifications" element={<NotificationCenter />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
          </Routes>
        </Box>
      </Box>
    </AuthProvider>
  );
}

export default App;