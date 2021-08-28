const apexOptions = {
  series: [70],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["QC score"],
};

const apexNinja = {
  series: [44, 55, 13, 43, 22],
  legend:{
    show:false
  },
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    dataLabels: {
      enabled: false,
    },legend: {
      show:false,
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show:false,
            position: "bottom",
          },
        },
      },
    ],
  },
};
export { apexOptions, apexNinja };
