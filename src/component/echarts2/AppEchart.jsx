import { Row, Col } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";
import {
    echartBarOption,
    echartPieOption,
    leadStatChartOption,
    rCountChartOption,
    echartBasicLineOption,
    echartMultilineOption,
    echartBasicBarOption,
    echartMultipleBarOption,
    echartMultipleBar2Option,
    echartZoomBarOption,
    echartBasicDoughnutOption,
    echartBasicAreaOption,
    echartStackedAreaOption,
    echartStackedPieOption,
    echartSolidAreaOption,
    echartBasicPie,
    echartBubbleOption
  } from "./echartOptions";

  const AppEchart=({option})=>{
        return <>
            <ReactEcharts
              style={{ height: "280px" }}
              option={option}
            />
        </>
  }

  export default AppEchart;