import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  linearGradient,
  ReferenceArea,
  ReferenceDot,
  defs,

} from "recharts";

export default class NetIncomeBarChart extends Component {

  constructor(props){
    super(props);
    this.state = { net: false}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    
    this.props.monthly();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.net === false) { 
      this.setState({net: true})
    } else {
      this.setState({ net: false })
    }
  }


  render() {


    let buttonContent = this.state.net ? "Income/Expense instead": "Net Income instead";


    const netIncome = this.props.monthlyTransactions.map(trans => {
      let month = trans.month;
      const income = trans.income || 0;
      const expense = trans.expense || 0;
      const net = income - expense;
      return { month: month, NetIncome: net, };
    })

    if (this.state.net) {


      return (
        <div>

        <div>
          <button onClick={this.handleSubmit}>{buttonContent}</button>
        </div>
        <BarChart width={600} height={300} data={netIncome}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke='#000' />

          <Bar dataKey="NetIncome" fill="#8884d8" />
        </BarChart>
        </div>
      )

    } else {
      return <div>
          <div>
            <button onClick={this.handleSubmit}>{buttonContent}</button>
          </div>

          <AreaChart width={730} height={250} data={this.props.monthlyTransactions}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
          <Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="expense" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>

          
        </div>;
    }
  }
}
