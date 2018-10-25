import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class NetIncomeBarChart extends Component {
  render() {
    debugger
    return (
      <BarChart width={600} height={300} data={this.props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke='#000' />
        <Bar dataKey="pv" fill="#8884d8" />

      </BarChart>
    )
  }
}
