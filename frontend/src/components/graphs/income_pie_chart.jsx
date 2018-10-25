import React from 'react';
import { Pie, PieChart, Tooltip} from 'recharts';

const PieChartDB = ({cat}) => {
  // const stuff = [];

  // for (var value in cat) {
  //   console.log('categories')

  //   if (cat) {
  //     // const description = parseFloat(cat.description);
  //     const budget = cat.budget;

  //     stuff.push({
  //       budget: budget
  //     })
  //   }
  // }
// (


  // const stuff = Object.values(cat).map(category=> {
  //   return category.budget
  // });

  // console.log(stuff)
 
  return <div>
      <PieChart width={730} height={300}>
      <Pie data={cat} dataKey="budget" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"/>
        <Pie data={cat} dataKey="budget" nameKey="name" cx="50%" cy="50%"  outerRadius={50} fill="#8884d8" />
        <Tooltip/>
      </PieChart>
    </div>;
};

export default PieChartDB;