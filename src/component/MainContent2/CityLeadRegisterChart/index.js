import { rCountChartOption } from "../../echarts/echartOptions";
import AppEchart from "../../echarts/AppEchart";
import { useEffect, useState } from "react";
import { thisMonthCheckinUrl, THISMONTH_CITY_WISE_LEAD_URL, thisWeekCheckinUrl, THISWEEK_CITY_WISE_LEAD_URL, todayCheckinUrl, TODAY_CITY_WISE_LEAD_URL } from "../../../utils";
import FilterDropDown from "../../FilterDropDown";
import "./style.css";
export default function CityLeadRegisterChart() {
  const [api, setApi] = useState([]);
  const [title, setTitle] = useState("Today's");
  const [renderChart, setRenderChart] = useState(false);
  const [chartOptions, setChartOptions] = useState({
    // color: ["#0277bd","#039be5",'#29b6f6', "#0277bd","#039be5",'#29b6f6'],
    color: ["#6BAD8F","#40A778",'#5AB58C', "#6BAD8F","#40A778",'#5AB58C'],
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)",
    },

    series: [
      {
        name: "City wise Registration",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data: [
          { value: 535, name: "Canges left" },
          { value: 310, name: "Brazil" },
          { value: 234, name: "France" },
          { value: 155, name: "BD" },
          { value: 130, name: "UK" },
          { value: 348, name: "India" },
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

  useEffect(() => {
    fetchCallTodaysRegistration();
  }, []);

  const fetchCallTodaysRegistration = async () => {
    const response1 = await fetch(TODAY_CITY_WISE_LEAD_URL);
    const response2 = await response1.json();
    console.log(response2,"todays checkin");
    if (response2.error) {
      console.error(response2.error_obj);
    } else {
      setApi(response2.data);
      let apiCopy = response2.data;
      let countOthers = 0;
      //for top 5 city to show +1 as other
      for (let i = 5; i < apiCopy.length; i++) { //count no. of checkins from top 5th city #include 5th to add in "others"
        countOthers = countOthers + apiCopy[i].value;
      }
      
      apiCopy.push({
        name: "Others",
        value: countOthers,
      });
     
      apiCopy.splice(5, apiCopy.length - 1 - 5); //include deletion at index 5 
      //first arg delete from this position
      //apiCopy.length - 1 => gives you total index
      // -5 at the end defines how many to remove all except top 5
      chartOptions.series[0].data = [...apiCopy];
      setChartOptions(chartOptions);
      setRenderChart(false);
      setRenderChart(true);
    }
  };

  const thisWeekRegistration = async () => {
    // setRenderChart(false);
    const response1 = await fetch(THISWEEK_CITY_WISE_LEAD_URL);
    if (response1.ok) {
      const response2 = await response1.json();
      console.log("this week checkin response", response2);

      let apiCopy = response2.data;
      let countOthers = 0;
      //for top 5 city to show +1 as other
      for (let i = 5; i < apiCopy.length; i++) { //count no. of checkins from top 5th city #include 5th to add in "others"
        countOthers = countOthers + apiCopy[i].value;
      }
      
      apiCopy.push({
        name: "Others",
        value: countOthers,
      });
     
      apiCopy.splice(5, apiCopy.length - 1 - 5); //include deletion at index 5 
      //first arg delete from this position
      //apiCopy.length - 1 => gives you total index
      // -5 at the end defines how many to remove all except top 5
      
      chartOptions.series[0].data = [...apiCopy];
      setChartOptions({ ...chartOptions });
      setRenderChart(false);
      setRenderChart(true);
    } else {
      console.error("Status", response1.status);
    }
  };

  const thisMonthRegistration = async () => {
    // setRenderChart(false);
    const response1 = await fetch(THISMONTH_CITY_WISE_LEAD_URL);
    if (response1.ok) {
      const response2 = await response1.json();
      console.log("this month checkin response", response2);

      let apiCopy = response2.data;
      let countOthers = 0;
      //for top 5 city to show +1 as other
      for (let i = 5; i < apiCopy.length; i++) { //count no. of checkins from top 5th city #include 5th to add in "others"
        countOthers = countOthers + apiCopy[i].value;
      }
      
      apiCopy.push({
        name: "Others",
        value: countOthers,
      });
     
      
      
      apiCopy.splice(5, apiCopy.length - 1 - 5); //include deletion at index 5 
      //first arg delete from this position
      //apiCopy.length - 1 => gives you total index
      // -5 at the end defines how many to remove all except top 5
      
      chartOptions.series[0].data = [...apiCopy];
      setChartOptions({ ...chartOptions });
      setRenderChart(false);
      setRenderChart(true);
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
              todays={fetchCallTodaysRegistration}
              thisWeek={thisWeekRegistration}
              thisMonth={thisMonthRegistration}
              title={title}
              setTitle={setTitle}
            />
          </div>

          {/* <button onClick={thisWeekRegistration} style={{ marginRight: "20px" }}>
            This Week
          </button>
          <button>This Month</button> */}
          <AppEchart option={chartOptions} height={300} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
