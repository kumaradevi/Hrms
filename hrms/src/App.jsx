
// import { AuthProvider } from './contexts/AuthContext';
// import { useAuth } from './hooks/useAuth';

// function App() {
//   const { user } = useAuth();

//   return (
//     <AuthProvider>
//       <Box sx={{ display: 'flex' }}>
//         {user && <Navbar />}
//         {user && <Sidebar />}
//         <Box component="main" sx={{ flexGrow: 1, p: 3, mt: user ? 8 : 0, ml: user ? 30 :0, minWidth: 0 }}>
//           <Routes>
//             <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/password-reset" element={<PasswordReset />} />
//             <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
//             <Route path="/" element={user ? <MainDashboard /> : <Navigate to="/login" />} />
//             <Route path="/employees" element={<EmployeeDirectory />} />
//             <Route path="/employees/:id" element={<EmployeeProfile />} />
//             <Route path="/employees/add" element={<AddEditEmployee />} />
//             <Route path="/employees/edit/:id" element={<AddEditEmployee />} />
//             <Route path="/departments" element={<DepartmentManagement />} />
//             <Route path="/leave/request" element={<LeaveRequest />} />
//             <Route path="/leave/approval" element={<LeaveApproval />} />
//             <Route path="/leave/history" element={<LeaveHistory />} />
//             <Route path="/payroll" element={<PayrollDashboard />} />
//             <Route path="/payroll/records" element={<PayrollRecords />} />
//             <Route path="/payroll/report" element={<PayrollReport />} />
//             <Route path="/performance/review" element={<PerformanceReview />} />
//             <Route path="/performance/analytics" element={<PerformanceAnalytics />} />
//             <Route path="/reports/employees" element={<EmployeeReports />} />
//             <Route path="/reports/leave" element={<LeaveReports />} />
//             <Route path="/reports/payroll" element={<PayrollReports />} />
//             <Route path="/reports/performance" element={<PerformanceReports />} />
//             <Route path="/settings/user" element={<UserSettings />} />
//             <Route path="/settings/admin" element={<AdminSettings />} />
//             <Route path="/help" element={<HelpCenter />} />
//             <Route path="/documentation" element={<Documentation />} />
//             <Route path="/notifications" element={<NotificationCenter />} />
//             <Route path="/error" element={<ErrorPage />} />
//             <Route path="/maintenance" element={<MaintenancePage />} />
//           </Routes>
//         </Box>
//       </Box>
//     </AuthProvider>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Login from './pages/auth/Login';
import MainDashboard from './pages/dashboard/MainDashboard';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PasswordResetConfirmation from './pages/auth/PasswordResetConfirmation';
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

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {user && <Navbar logout={logout} />}
      {user && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: user ? 8 : 0, ml: user ? 30 : 0, minWidth: 0 }}>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login login={login} />} />
          <Route path="/" element={user ? <MainDashboard /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
          <Route path="/employees" element={user ? <EmployeeDirectory /> : <Navigate to="/login" />} />
          <Route path="/employees/:id" element={user ? <EmployeeProfile /> : <Navigate to="/login" />} />
          <Route path="/employees/add" element={user ? <AddEditEmployee /> : <Navigate to="/login" />} />
          <Route path="/employees/edit/:id" element={user ? <AddEditEmployee /> : <Navigate to="/login" />} />
          <Route path="/departments" element={user ? <DepartmentManagement /> : <Navigate to="/login" />} />
          <Route path="/leave/request" element={user ? <LeaveRequest /> : <Navigate to="/login" />} />
          <Route path="/leave/approval" element={user ? <LeaveApproval /> : <Navigate to="/login" />} />
          <Route path="/leave/history" element={user ? <LeaveHistory /> : <Navigate to="/login" />} />
          <Route path="/payroll" element={user ? <PayrollDashboard /> : <Navigate to="/login" />} />
          <Route path="/payroll/records" element={user ? <PayrollRecords /> : <Navigate to="/login" />} />
          <Route path="/payroll/report" element={user ? <PayrollReport /> : <Navigate to="/login" />} />
          <Route path="/performance/review" element={user ? <PerformanceReview /> : <Navigate to="/login" />} />
          <Route path="/performance/analytics" element={user ? <PerformanceAnalytics /> : <Navigate to="/login" />} />
          <Route path="/reports/employees" element={user ? <EmployeeReports /> : <Navigate to="/login" />} />
          <Route path="/reports/leave" element={user ? <LeaveReports /> : <Navigate to="/login" />} />
          <Route path="/reports/payroll" element={user ? <PayrollReports /> : <Navigate to="/login" />} />
          <Route path="/reports/performance" element={user ? <PerformanceReports /> : <Navigate to="/login" />} />
          <Route path="/settings/user" element={user ? <UserSettings /> : <Navigate to="/login" />} />
          <Route path="/settings/admin" element={user ? <AdminSettings /> : <Navigate to="/login" />} />
          <Route path="/help" element={user ? <HelpCenter /> : <Navigate to="/login" />} />
          <Route path="/documentation" element={user ? <Documentation /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={user ? <NotificationCenter /> : <Navigate to="/login" />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;