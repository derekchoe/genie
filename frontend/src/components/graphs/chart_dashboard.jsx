import React, {Component} from 'react';
import PieChart from "./income_pie_chart";

class ChartDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

  }
  componentDidMount(){
    this.props.fetchCategoriesByExpenses();
  }

  render() {
    return <div>
        <p>Chart Dashboard</p>
        <div>
          <PieChart transactionByCategory={this.props.transactionByCategory} />
        </div>
      </div>;
  }

};

export default ChartDashboard;