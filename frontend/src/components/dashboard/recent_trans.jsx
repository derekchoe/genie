import React from 'react';
import Modal from 'react-modal';
import RecentTransItem from './recent_trans_item';


const statusStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class RecentTrans extends React.Component {
  constructor(props) {
    super(props)
  };

 


  render() {
    const transactions = this.props.transactions.slice(0, 11).map(tran => {

      return (
        <RecentTransItem deleteTrans={this.props.deleteTransaction} tran={tran} />
      );
    });

  

    return (
      <div className="recent-trans-box">

        <div className="recent-trans-title">Recent Transactions</div>
        <div className="recent-trans-table">
          <ul className='rec-titles'>
            <li>Description</li>
            <li>Date</li>
            <li>Category</li>
            <li>Amount</li>
          </ul>
          {transactions}
          
        </div>
      </div>

    );
  }

}

export default RecentTrans;



// const RecentTrans = props => {
//   const transactions = props.transactions.slice(0, 5).map(tran => {

//     return (
//       <ul key={tran.id} className={tran.typeOfTrans === 'expense' ? 'negative' : 'positive'}>
//         <li>{tran.description}</li>
//         <li>{tran.date.slice(5, 10)}</li>
//         <li>{tran.categoryName}</li>
//         <li>${tran.amount}</li>
//         <li className='delete-recent' onClick={this.deleteTrans(tran.)}>Delete</li>
//       </ul>
//     );
//   });

//   return (
//     <div className="recent-trans-box">
//       <div className="recent-trans-title">Recent Transactions</div>
//       <div className="recent-trans-table">
//         <ul className='rec-titles'>
//           <li>Description</li>
//           <li>Date</li>
//           <li>Category</li>
//           <li>Amount</li>
//         </ul>
//         {transactions}
//       </div>
//     </div>
//   );
// };

// export default RecentTrans;
