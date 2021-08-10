import React, { useEffect, useState } from "react";
// import MyDataTable from "../MyDataTable";
import "./Ninja.css";
import { Spinner } from 'react-bootstrap';

import ReactApexChart from "react-apexcharts";
import AppEchart from "../echarts/AppEchart";
import { apexNinja } from "./apexOptions";
import StatusBar from "../StatusBar/StatusBar";
import { leadReportAdminUrl, leadReportClientUrl, leadStats, tableList } from "../../utils";
import {
  leadStatChartOption,
  rCountChartOption,
} from "../echarts/echartOptions";
import Table from "../STable/Table";
import CityCheckinChart from "./CityCheckinChart";
import BarChart from "./BarChart";
import CityLeadRegisterChart from "./CityLeadRegisterChart";
function Ninja({ setLoggedIn, admin }) {
  const [searchText, setSearchText] = useState("");
  const [moreFocus, setMoreFocus] = useState(false);
  const [api, setApi] = useState([]);
  const [renderLeftChart, setRenderLeftChart] = useState(false);
  const [cardsApi, setCardsApi] = useState({});
  const [chartLeftOption, setChartLeftOption] = useState({
    color: ["#62549c", "#7566b5", "#7d6cbb", "#8877bd", "#9181bd", "#6957af"],
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)",
    },

    series: [
      {
        // name: 'Sales by Country',
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: [
          { value: 535, name: "Leads" },
          { value: 310, name: "Approved" },
          { value: 234, name: "1st Order" },
          { value: 155, name: "2nd Order" },
          { value: 130, name: "3rd Order" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
  const [chartRightOption, setChartRightOption] = useState({});
  const handleClick = (id) => {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  };

  useEffect(() => {
    fetch(tableList)
      .then((r) => r.json())
      .then((r) => {
        setApi([...r.leads]);
      })
      .catch((e) => {
        console.error(e);
      });
    fetch(leadStats)
      .then((r) => r.json())
      .then((r) => {
        if (r.message === "success") {
          setCardsApi({ ...r });
          chartLeftOption.series[0].data[0].value = r.total_leads;
          chartLeftOption.series[0].data[1].value = r.total_approved;
          chartLeftOption.series[0].data[2].value = r.total_first_order;
          chartLeftOption.series[0].data[3].value = r.total_first_order;
          chartLeftOption.series[0].data[4].value = r.total_first_order;
          console.log(chartLeftOption.series[0].data);
          setChartLeftOption({ ...chartLeftOption });
          setRenderLeftChart(true);
        } else {
          console.log(r);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  // useEffect(()=>{

  // },[searchText]);
  return (
    <div
      className="ninja"
      onClick={() => {
        if (moreFocus) {
          setMoreFocus(false);
        }
      }}
    >
      {/* <button onClick={()=>{
        chartLeftOption.series[0].data[0].name="mayur";
        setChartLeftOption({...chartLeftOption});
      }}>Click</button> */}
      <div className="ninja_page">
        <div className="ninja_row1">
          <p className="n_p1">Bijnis Merchant Onboarding</p>
          <div className="logout-container add-logout-style">
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("jma");
                setLoggedIn(false);
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="ninja_row1">
          {/* <div className="nin_row1">
            <div className="nin_box">
              <p className="nin_p1">Project ID:</p>
              <p className="nin_p2">1256</p>
            </div>
          </div> */}
          <div className="nin_row2">
            <div
              className="nin_cards"
              style={{ backgroundColor: "rgb(158, 129, 251)" }}
            >
              <p className="nin_p3">Total Leads</p>
              <p className="nin_p4">
                {Object.keys(cardsApi).length > 2
                  ? cardsApi.total_leads
                  : "XXXX"}
              </p>
              {/* <p className="nin_p5">+200</p> */}
            </div>
            <div
              className="nin_cards"
              style={{ backgroundColor: "rgb(136 119 189)" }}
            >
              <p className="nin_p3">Total Approved</p>
              <p className="nin_p4">
                {Object.keys(cardsApi).length > 2
                  ? cardsApi.total_approved
                  : "XXXX"}
              </p>
              {/* <p className="nin_p5">+180</p> */}
            </div>
            {/* <div
              className="nin_cards"
              style={{ backgroundColor: "rgb(158, 129, 251)" }}
            >
              <p className="nin_p3">Total MID Approved</p>
              <p className="nin_p4">
                {Object.keys(cardsApi).length > 2
                  ? cardsApi.total_mid_approved
                  : "XXXX"}
              </p>
              <p className="nin_p5">+150</p>
            </div>
            <div
              className="nin_cards"
              style={{ backgroundColor: "rgb(136 119 189)" }}
            >
              <p className="nin_p3">Total KYC Approved</p>
              <p className="nin_p4">
                {Object.keys(cardsApi).length > 2
                  ? cardsApi.total_kyc_approved
                  : "XXXX"}
              </p>
              <p className="nin_p5">+120</p>
            </div> */}
            <div
              className="nin_cards"
              style={{ backgroundColor: "rgb(158, 129, 251)" }}
            >
              <p className="nin_p3">Total Order Approved</p>
              <p className="nin_p4">
                {Object.keys(cardsApi).length > 2
                  ? cardsApi.total_order_approved
                  : "XXXX"}
              </p>
              {/* <p className="nin_p5">+100</p> */}
            </div>
            
          </div>
          <div className="charts-row">
          <div className="nin_col1">
              <p className="nin_p6">City-wise Lead Registration</p>
              <CityLeadRegisterChart />
            </div>
            <div className={`nin_col1 ${admin ? "adminStyleWidth" : "clientStyleWidth"}`} >
              <p className="nin_p6">Lead Registration Count</p>
              {/* <ReactApexChart
                options={apexNinja.options}
                series={apexNinja.series}
                type="pie"
                width={350}
                style={{ marginTop: "25px" }}
              /> */}
              {/* {renderLeftChart ? <AppEchart option={echartBarOption} /> : <></>} */}

              <BarChart />
            </div>
            {
              admin ? <>

                <div className="nin_col1">
                  <p className="nin_p6">City-wise Checkin</p>
                  {/* <ReactApexChart
                options={apexNinja.options}
                series={apexNinja.series}
                type="pie"
                width={350}
                style={{ marginTop: "25px" }}
              /> */}

                  <CityCheckinChart />
                </div>

              </> : <>

              </>
            }

          </div>
          
          {api.length > 0 ? <>
            <div >
              {/* <MyDataTable api={api}/> */}
              {localStorage.setItem("jiomart_data_table", JSON.stringify({ api: api.slice(0, 1000) }))}
              <Table api={api} admin={admin} />
            </div>
          </> : <>
            {console.log(localStorage.getItem("jiomart_data_table"))}
            {localStorage.getItem("jiomart_data_table") && JSON.parse(localStorage.getItem("jiomart_data_table")).api && JSON.parse(localStorage.getItem("jiomart_data_table")).api.length > 0 ? <>

              <div >
                {console.log(JSON.parse(localStorage.getItem("jiomart_data_table")).api, "jiomart_data_table local storage")}
                <div className="load-message" >
                  <div className="load-item"><Spinner animation="grow" variant="dark" /></div>
                  <div>Please wait ... remaining data is loading</div>
                  <div className="load-item"><Spinner animation="grow" variant="dark" /></div>
                </div>
                <Table api={JSON.parse(localStorage.getItem("jiomart_data_table")).api} admin={admin} />
              </div>
            </> : <>

              <div className="load">
                <div className="load-item"><Spinner animation="grow" variant="dark" /></div>
                <div className="load-item"><Spinner animation="grow" variant="dark" /></div>
                <div className="load-item"><Spinner animation="grow" variant="dark" /></div>


              </div>
            </>}
            {/* <Table/> */}
            {/* <MyDataTable api={api}/> */}
          </>}

          {/* {api.length>0?<>
            <div >
            <MyDataTable api={api}/>
            <Table api={api} admin={admin}/>
          </div>
          </>:<>
          <div className="load">
          <div className="load-item"><Spinner animation="grow" variant="dark"/></div>
          <div className="load-item"><Spinner animation="grow" variant="dark"/></div>
          <div className="load-item"><Spinner animation="grow" variant="dark"/></div>
          
          </div>
          <Table/>
          <MyDataTable api={api}/>
          </>} */}
        </div>
      </div>
    </div>
  );
}

export default Ninja;
