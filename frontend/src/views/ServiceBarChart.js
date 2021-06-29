import React, { Component } from "react";
import Chart from "react-apexcharts";

class SNBarChart extends Component {
  constructor(props) {
    super(props);
    console.log("barchart - props", props);
    this.state = {
      options: {
        chart: {
          id: "ML - chart",
        },
        fill: {
          colors: ["#479700", "#0000FF", "#F41605"],
        },
        xaxis: {
          categories: props.service.users,
        },
      },
      series: [
        {
          name: "low-riskFactor",
          data: props.service.low,
          color: "#479700",
        },
        {
          name: "medium-riskFactor",
          data: props.service.medium,
          color: "#0000FF",
        },
        {
          name: "high-riskFactor",
          data: props.service.high,
          color: "#F41605",
        },
      ],
    };
  }
  render() {
    console.log("barchart render");
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={950}
        height={550}
      />
    );
  }
}
export default SNBarChart;
