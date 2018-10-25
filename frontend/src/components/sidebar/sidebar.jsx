import React, { Component } from 'react';
import WebSpeechContainer from './webspeech_container';
import RecentTrans from './recent_trans';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-box">
        This is the sidebar
        <WebSpeechContainer />
        <RecentTrans transactions={}/>
      </div>
    );
  }
}
