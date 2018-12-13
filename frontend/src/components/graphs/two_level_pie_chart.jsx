import { PieChart, Pie, Sector } from 'recharts';
import React, { Component } from "react";


class TwoLevelPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.renderActiveShape = this.renderActiveShape.bind(this);
    this.onPieEnter = this.onPieEnter.bind(this);
    this.formatBetter = this.formatBetter.bind(this);
  }

  formatBetter= (categoryData) => {
    let result = [];

    categoryData.forEach(datum => {
      result.push({ value: datum.totalExpense, name: datum.categoryName });
    });
    return result;
  }
  // data = this.formatBetter(this.props.transactionByCategory);




  onPieEnter(data, index) {
    this.setState({
      activeIndex: index
    });
  }

  renderActiveShape(props) {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="rgb(91,173,214)"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill="rgb(91,173,214)"
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill="rgb(91,173,214)" stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#fff"
        >{`Spent $${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }



  render() {
    if (!this.props.transactionByCategory) {return null}
    return (
      <div className="chart-handler">
        <div className="chart-container">
          <p className="chart-labels">Monthly Expenses</p>
          <PieChart width={500} height={300}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={this.renderActiveShape}
              data={this.formatBetter(this.props.transactionByCategory)}
              cx={245}
              cy={150}
              innerRadius={80}
              outerRadius={110}
              fill="rgb(91,173,214)"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </div>
      </div>
    );
  }
}

export default TwoLevelPieChart;