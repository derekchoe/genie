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

    constructor(props){
      super(props);
     

    }

    componentDidMount(){
      
      this.props.monthly();
    }


  render() {
      const netIncome = this.props.monthlyTransactions.map( trans => {
        let month = trans.month;
        const income = trans.income || 0;
        const expense = trans.expense || 0;
        const net = income - expense;
        return {month: month,  NetIncome: net,};
      } ).reverse();

  
    return (
      <BarChart width={600} height={300} data={netIncome}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke='#000' />
  
        <Bar dataKey="NetIncome" fill={netIncome.net > 0 ? "#8884d8" : "#82ca9d"} />
      </BarChart>
    )
  }
}
