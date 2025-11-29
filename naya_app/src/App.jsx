import React, { useState, useMemo } from 'react';
import DataGrid from './components/DataGrid';
import { employeeData } from './data/SampleRows';
import './style.css';
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);


function App() {
  const [rowData] = useState(employeeData);

  const stats = useMemo(() => {
    const totalEmployees = rowData.length;
    const activeEmployees = rowData.filter(emp => emp.isActive).length;
    const avgSalary = Math.round(rowData.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees);
    const avgRating = (rowData.reduce((sum, emp) => sum + emp.performanceRating, 0) / totalEmployees).toFixed(2);

    return { totalEmployees, activeEmployees, avgSalary, avgRating };
  }, [rowData]);

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <header className="header">
          <h1 className="title">Employee Management Dashboard</h1>
          <p className="subtitle">FactWise Frontend Assessment</p>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Employees</div>
            <div className="stat-value stat-value-default">{stats.totalEmployees}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Active Employees</div>
            <div className="stat-value stat-value-success">{stats.activeEmployees}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Average Salary</div>
            <div className="stat-value stat-value-info">${stats.avgSalary.toLocaleString()}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Average Rating</div>
            <div className="stat-value stat-value-warning">{stats.avgRating}</div>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-header">
            <h2 className="grid-title">Employee Data Grid</h2>
          </div>

          <div className="grid-wrapper">
            <DataGrid rowData={rowData} />
          </div>
        </div>

        <footer className="footer">
          <p>Built with React + AG Grid | FactWise Assessment 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default App;