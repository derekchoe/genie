import React, {Component} from 'react';
import PieChart from "./income_pie_chart";
import NetIncomeBarChart from './net_income_bar_chart'

class ChartDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

  }
  componentDidMount(){
    this.props.fetchCategories()
  }


  render() {
    return <div>
        <p>Chart Dashboard</p>
        <div>
          <PieChart
            cat={this.props.categories}
          />
        </div>

          <div>
            <NetIncomeBarChart />
          </div>
      </div>;
  }
  

};

export default ChartDashboard;