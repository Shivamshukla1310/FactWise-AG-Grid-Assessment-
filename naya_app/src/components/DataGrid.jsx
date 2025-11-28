// src/components/DataGrid.jsx
import React, { useMemo, useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ActionRenderer = (props) => {
  const onView = () => alert(`View ${props.data.firstName} (ID ${props.data.id})`);
  return <button onClick={onView}>View</button>;
};

const DataGrid = ({ rowData }) => {
  const gridApiRef = useRef(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [density, setDensity] = useState("comfortable");

  const columnDefs = [
    { field: "id" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "email" },
    { field: "department" },
    { field: "position" },
    { field: "salary" },
    { field: "hireDate" },
    { field: "age" },
    { field: "location" },
    { field: "performanceRating" },
    { field: "projectsCompleted" },
    { field: "isActive" },
    { field: "manager" },
    {
      headerName: "Actions",
      cellRenderer: "actionRenderer",
      width: 120
    }
  ];

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  const frameworkComponents = useMemo(
    () => ({ actionRenderer: ActionRenderer }),
    []
  );

  const onGridReady = useCallback((params) => {
    gridApiRef.current = params.api;
    params.api.sizeColumnsToFit();
  }, []);

  const exportCsv = () =>
    gridApiRef.current?.exportDataAsCsv({ fileName: "export.csv" });

  const toggleDensity = () =>
    setDensity((d) => (d === "comfortable" ? "compact" : "comfortable"));

  console.log("ROW DATA:", rowData);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>

      {/* 🔹 TOP TOOLBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>AG Grid Dashboard</h2>
          <div style={{ fontSize: 12 }}>{rowData?.length ?? 0} rows </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            value={quickFilter}
            onChange={(e) => {
              setQuickFilter(e.target.value);
              gridApiRef.current?.setQuickFilter(e.target.value);
            }}
            placeholder="Quick search..."
            style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #ddd" }}
          />

          <button onClick={exportCsv}>Export CSV</button>
          <button onClick={toggleDensity}>
            {density === "comfortable" ? "Compact" : "Comfortable"}
          </button>
        </div>
      </div>

      {/* 🔹 GRID */}
      <div className={`ag-theme-alpine grid-container ${density}`} style={{ flex: 1, minHeight: 400 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          frameworkComponents={frameworkComponents}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          animateRows={true}
          rowSelection="multiple"
          sideBar={{ toolPanels: ["columns", "filters"] }}
        />
      </div>
    </div>
  );
};

export default DataGrid;
