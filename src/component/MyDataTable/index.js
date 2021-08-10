import React, { useEffect, useState } from "react";
// import DataTable ,{createTheme} from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
// import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";

import "./index.css";
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});



export default function MyDataTable({api}) {
    console.log("I am api",api);
  const [tableData,setTableData] = useState({
    columns,
    api
  });

//   useEffect(()=>{
//     setTableData
//   },[])


  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={api}
          title="List of Leads"
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          // theme="solarized"
          
        />
      </DataTableExtensions>
    </div>
  );
}


