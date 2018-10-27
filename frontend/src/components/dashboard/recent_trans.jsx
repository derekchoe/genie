import React from 'react';

const RecentTrans = props => {
  const transactions = props.transactions.slice(0, 11).map(tran => {
    return (
      <ul key={tran.id} className="each-tran">
        <li>{tran.description}</li>
        <li>{tran.date.slice(5, 10)}</li>
        <li>{tran.categoryName}</li>
        <li>${tran.amount}</li>
      </ul>
    );
  });

  return (
    <div className="recent-trans-box">
      <div className="recent-trans-title">Recent Transactions</div>
      <div className="recent-trans-table">
        <ul>
          <li>Description</li>
          <li>Date</li>
          <li>Category</li>
          <li>Amount</li>
        </ul>
        {transactions}
      </div>
    </div>
  );
};

export default RecentTrans;
