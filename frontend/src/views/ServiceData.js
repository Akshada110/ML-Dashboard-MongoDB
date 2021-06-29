import React, { Component } from "react";
import getServiceData from "../services/serviceAPI";
import ServiceBarChart from "./ServiceBarChart";

class ServiceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      low: [],
      medium: [],
      high: [],
      childRender: false,
    };
  }
  componentDidMount() {
    console.log("Component didmount");
    getServiceData().then((result) => {
      this.setState({
        users: result.map((ele) => ele.serviceName, +" "),
        low: result.map((ele) => ele.lowRisk, +" "),
        medium: result.map((ele) => ele.mediumRisk, +" "),
        high: result.map((ele) => ele.highRisk, +" "),
        childRender: true,
      });
    });
  }
  render() {
    console.log("render Graph1 ", this.state);
    return (
      <>
        {this.state.childRender && (
          <>
            <div className="container">
              <ServiceBarChart service={this.state} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default ServiceData;
