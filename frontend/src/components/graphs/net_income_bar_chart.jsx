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
  Cell
} from 'recharts';
import Switch from 'react-switch';

export default class NetIncomeBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = { net: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.monthly();
  }

  handleChange(net) {
    this.setState({ net });
  }

  render() {
    let buttonContent = this.state.net
      ? 'Income/Expense instead'
      : 'Net Income instead';

    const netIncome = this.props.monthlyTransactions.map(trans => {
      let month = trans.month;
      const income = trans.income || 0;
      const expense = trans.expense || 0;
      const net = income - expense;
      return { month: month, NetIncome: net };
    });
    const linedata = this.props.monthlyTransactions.reverse();

    const netIncomeChart = () => (
      <BarChart
        width={600}
        height={300}
        data={netIncome}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip cursor={{ fill: 'none' }} />
        <ReferenceLine y={0} stroke="#ffff" />

        <Bar dataKey="NetIncome" barSize={60}>
          {netIncome.map((income, index) => (
            <Cell
              fill={income.NetIncome > 0 ? '#b3ff99' : '#b30047'}
              stroke={'#ffff'}
              strokeWidth={1}
            />
          ))}
        </Bar>
      </BarChart>
    );

    const areaChart = () => (
      <div>
        <AreaChart
          width={600}
          height={300}
          data={linedata}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
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
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    );
    const content = this.state.net ? netIncomeChart() : areaChart();
    return (
      <div className="net-income-graph-container">
        <div className="title-switch-wrapper">
          <h1>{this.state.net ? 'Net Income' : 'Income/Expense Comparison'}</h1>
          <Switch
            checked={this.state.net}
            onChange={this.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={true}
            checkedIcon={true}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
        {content}
      </div>
    );
  }
}
