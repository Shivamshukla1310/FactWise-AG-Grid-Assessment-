import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

const DataGrid = ({ rowData }) => {
  const columnDefs = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      filter: 'agNumberColumnFilter',
      sortable: true
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'department',
      headerName: 'Department',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'position',
      headerName: 'Position',
      width: 200,
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'salary',
      headerName: 'Salary',
      valueFormatter: params => '$' + params.value.toLocaleString(),
      filter: 'agNumberColumnFilter',
      sortable: true
    },
    {
      field: 'hireDate',
      headerName: 'Hire Date',
      filter: 'agDateColumnFilter',
      sortable: true
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 90,
      filter: 'agNumberColumnFilter',
      sortable: true
    },
    {
      field: 'location',
      headerName: 'Location',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'performanceRating',
      headerName: 'Rating',
      width: 100,
      filter: 'agNumberColumnFilter',
      sortable: true,
      cellStyle: params => {
        if (params.value >= 4.5) return { backgroundColor: '#d4edda', color: '#155724' };
        if (params.value >= 4.0) return { backgroundColor: '#d1ecf1', color: '#0c5460' };
        return { backgroundColor: '#fff3cd', color: '#856404' };
      }
    },
    {
      field: 'projectsCompleted',
      headerName: 'Projects',
      width: 110,
      filter: 'agNumberColumnFilter',
      sortable: true
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      cellRenderer: params => params.value ?
        '<span style="color: #28a745; font-weight: 600;">Active</span>' :
        '<span style="color: #dc3545; font-weight: 600;">Inactive</span>',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'skills',
      headerName: 'Skills',
      width: 250,
      valueFormatter: params => params.value.join(', '),
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 150,
      filter: 'agTextColumnFilter',
      sortable: true,
      valueFormatter: params => params.value || 'N/A'
    }
  ], []);

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true,
    filter: true,
  }), []);

  return (
    <div className="ag-theme-custom" style={{ height: '100%', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={20}
        animateRows={true}
        rowSelection="multiple"
        enableCellTextSelection={true}
      />
    </div>
  );
};

export default DataGrid;