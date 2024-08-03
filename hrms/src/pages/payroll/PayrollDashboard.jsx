import React from 'react';
import Dashboard from '../../components/common/Dashboard';

function PayrollDashboard() {
  const dashboardItems = [
    { title: 'Total Payroll', value: '$150,000', description: 'This month\'s total payroll' },
    { title: 'Employees Paid', value: '145', description: 'Number of employees paid this month' },
    { title: 'Pending Payments', value: '5', description: 'Payments yet to be processed' },
    { title: 'Next Pay Date', value: '2023-07-31', description: 'Date of next payroll run' },
    { title: 'YTD Payroll', value: '$900,000', description: 'Year-to-date total payroll' },
    { title: 'Tax Deductions', value: '$45,000', description: 'Total tax deductions this month' },
  ];

  return <Dashboard title="Payroll Dashboard" items={dashboardItems} />;
}

export default PayrollDashboard;