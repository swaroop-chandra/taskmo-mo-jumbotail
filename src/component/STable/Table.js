import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { table_data } from "./TableData";
import "./Table.css";
import StatusBar from "../StatusBar/StatusBar";
import TripleDotDropDown from "../TripleDotDropDown";

import DataTableExtensions from "react-data-table-component-extensions";
createTheme("solarized", {
  text: {
    primary: "black",
    secondary: "#b2b2b2",
  },
  background: {
    default: "#f2f2f2",
  },
  boxshadow: {
    default: "5px 5px 30px #DEDEDEBF",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#fafafa",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

function Table({ api, admin }) {
  const columns = [
    {
      name: "Lead ID",
      selector:"lead_id",
      sortable: true,
      center: true,
      cell: (d) => <div>{d.lead_id}</div>,
    },
    {
      name: "Date",
      center: true,
      cell: (d) => <div>{d.activity_date}</div>,
    },
    {
      name: "MID",
      selector: "mid",
      sortable: true,
      center: true,
      cell: (d) => <div>{d.mid}</div>,
    },
    {
      name: "Merchant Name",
      selector:"merchant_name",
      cell: (d) => <div>{d.merchant_name}</div>,
      sortable: true,
      center: true,
    },
    {
      name: "Store Name",
      selector:"shop_name",
      cell: (d) => <div>{d.shop_name}</div>,
      sortable: true,
      center: true,
    },
    {
      name: "Contact Number",
      selector:"merchant_number",
      cell: (d) => <div>{d.merchant_number}</div>,
      sortable: true,
      center: true,
    },
    {
      name: "City",
      selector:"city",
      cell: (d) => <div>{d.city}</div>,
      sortable: true,
      center: true,
    },
    {
      name: "MID status",
      cell: (d) => <div className={d.stage1_status}>{d.stage1_status}</div>,
      center: true,
    },
    {
      name: "KYC Status",
      cell: (d) => <div className={d.stage2_status}>{d.stage2_status}</div>,
      center: true,
    },
    {
      name: "Order Status",
      cell: (d) => <div className={d.stage3_status}>{d.stage3_status}</div>,
      center: true,
    },
  ];
  if (admin) {
    columns.splice(2, 0, {
      name: "FSE Id",
      selector:"user_id",
      cell: (d) => <div>{d.user_id}</div>,
      sortable: true,
      center: true,
    });
  }
  const tableData = {
    columns,
    data: api,
  };
  return (
    <div className="table_data">
      <div className="card_table">
        <div className="menu-container">
          <TripleDotDropDown admin={admin} />
        </div>
        <DataTableExtensions
          {...tableData}
          export={false}
          filterPlaceholder={`Search`}
        >
          <DataTable
            columns={columns}
            data={table_data.data}
            defaultSortFieldId={2}
            pagination
            theme="solarized"
          />
        </DataTableExtensions>
      </div>
    </div>
  );
}

export default Table;
