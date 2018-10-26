import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
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
      <div className= 'net-income-graph'>
      <h1>Net Income </h1>
      <BarChart width={600} height={300} data={netIncome}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fill: 'white' }}/>
        <YAxis tick={{fill: 'white'}}/>
        <Tooltip cursor={{ fill: 'none' }} />
        <ReferenceLine y={0} stroke='#ffff' />

        <Bar dataKey="NetIncome" barSize={60}>
          {netIncome.map((income, index) => (
            <Cell fill={income.NetIncome > 0 ? '#b3ff99' : '#b30047'} stroke={'#ffff'} strokeWidth={1}/ >
          ))}
        </Bar>
      </BarChart>
      </div>
      )
    }
  }
  
// {/* <Bar dataKey="NetIncome" fill={netIncome.net > 0 ? "#8884d8" : "#82ca9d"} /> */}