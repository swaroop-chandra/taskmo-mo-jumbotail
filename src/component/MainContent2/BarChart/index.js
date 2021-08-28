import { echartBarOptionRapido, rCountChartOption } from "../../echarts/echartOptions";
import AppEchart from "../../echarts/AppEchart";
import { useEffect, useState } from "react";
import { TODAY_LEAD_URL,THIS_MONTH_LEAD_URL} from "../../../utils";
import FilterDropDown from "../../FilterDropDown";
import "./style.css";
import { getTimeString } from "../../../myFunctions";
export default function BarChart() {
  const [api, setApi] = useState([]);
  const [xAxisTitle,setXAxisTitle]=useState("Time")
  const [title, setTitle] = useState("Today's");
  const [renderChart, setRenderChart] = useState(false);
  const [chartOptions, setChartOptions] = useState(echartBarOptionRapido);

  useEffect(() => {
    fetchCallTodaysLeads();
  }, []);

  const fetchCallTodaysLeads = async () => {
    const response1 = await fetch(TODAY_LEAD_URL);
    if (response1.ok) {
      const response2 = await response1.json();
      console.log(response2, "todays lead");
      if (response2.error) {
        console.error(response2.error_obj,"TODAYS leads response");
      } else {
        setApi(response2.data);
        let apiCopy = response2.data;
        const xAxisDataArr=apiCopy.map(({leads})=>{
          return leads;
        })
        const xAxisLabels=apiCopy.map(({hour})=>{
          return getTimeString(hour);
        })
        chartOptions.xAxis[0].data=xAxisLabels;
        chartOptions.series[0].data = [...xAxisDataArr];
        chartOptions.series[0].name="Today's Timely Count";
        setXAxisTitle("Time")
        setChartOptions(chartOptions);
        setRenderChart(false);
        setRenderChart(true);
      }
    } else {
      console.error("Status", response1.status);
    }
  };

  const fetchCallThisMonthLeads = async () => {
    // setRenderChart(false);
    const response1 = await fetch(THIS_MONTH_LEAD_URL);
    if (response1.ok) {
      const response2 = await response1.json();
      console.log(response2, "this month lead");
      if (response2.error) {
        console.error(response2.error_obj,"this month leads response");
      } else {
        setApi(response2.data);
        let apiCopy = response2.data;
        const xAxisDataArr=apiCopy.map((obj)=>{
          return obj.leads;
        })
        const xAxisLabelArr=apiCopy.map((obj)=>{
          return obj.day;
        });
        chartOptions.xAxis[0].data=[...xAxisLabelArr
          // " 1",
          // " 2",
          // " 3",
          // " 4",
          // " 5",
          // " 6",
          // " 7",
          // " 8",
          // " 9",
          // " 10",
          // " 11",
          // " 12",
          // " 13",
          // " 14",
          // " 15",
          // " 16",
          // " 17",
          // " 18",
          // " 19",
          // " 20",
          // " 21",
          // " 22",
          // " 23",
          // " 24",
          // " 25",
          // " 26",
          // " 27",
          // " 28",
          // " 29",
          // " 30",
          // " 31",
        ]

        chartOptions.xAxis[0].name="Mayur";
        chartOptions.xAxis[0].nameLocation="end";
        chartOptions.series[0].data = [...xAxisDataArr];
        chartOptions.series[0].name="Monthly Day Wise Count";
        setXAxisTitle("Day")
        setChartOptions(chartOptions);
        setRenderChart(false);
        setRenderChart(true);
      }
    } else {
      console.error("Status", response1.status);
    }
  };
  return (
    <>
      {renderChart ? (
        <>
          <div className="dropdown-container">
            <FilterDropDown
              todays={fetchCallTodaysLeads}
              // thisWeek={thisWeekCheckinApi}
              thisMonth={fetchCallThisMonthLeads}
              title={title}
              setTitle={setTitle}
            />
          </div>

          {/* <button onClick={thisWeekCheckinApi} style={{ marginRight: "20px" }}>
            This Week
          </button>
          <button>This Month</button> */}
          <AppEchart option={chartOptions} />
          <div>{xAxisTitle}</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
