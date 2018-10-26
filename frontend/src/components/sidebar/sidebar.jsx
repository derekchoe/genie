import React, { Component } from 'react';
import WebSpeechContainer from './webspeech_container';
import RecentTrans from './recent_trans';

export default class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <div className="sidebar-box">
        This is the sidebar
        <WebSpeechContainer />
        <RecentTrans transactions={this.props.transactions} />
      </div>
    );
  }
}
