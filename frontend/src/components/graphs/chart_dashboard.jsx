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
    this.props.fetchCategories()
  }

  
  render() {
    console.log(this.props)
    const categories = this.props.categories
    return <div>
        <p>Chart Dashboard</p>
        <div>
        <PieChart />
        <p>{categories}</p>
        </div>
      </div>;
  }
  

};

export default ChartDashboard;