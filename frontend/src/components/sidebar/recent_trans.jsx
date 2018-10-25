import React from 'reat';

const RecentTrans = props => {
  const transactions = this.props.transactions.map(tran => {
    <ul key={tran.id} className="each-tran">
      <li>{tran.decription}</li>
      <li>{tran.date}</li>
      <li>{tran.categoryName}</li>
    </ul>;
  });

  return (
    <div className="recent-trans-box">
      <div className="recent-trans-table">{transactions}</div>
    </div>
  );
};

export default RecentTrans;
