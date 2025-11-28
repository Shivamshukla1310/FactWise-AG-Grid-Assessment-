// src/App.jsx
import React from "react";
import sampleData from "./data/SampleRows";
import DataGrid from "./components/DataGrid";
import "./style.css";

export default function App() {
  return (
    <div style={{ padding: 20, height: "100vh", boxSizing: "border-box", background: "#f6f7fb", color: "#080809ff", display: "flex", flexDirection: "column" }}>

      <DataGrid rowData={sampleData.employees} />
    </div>
  );
}
