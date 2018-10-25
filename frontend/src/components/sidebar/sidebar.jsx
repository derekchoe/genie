import React, { Component } from 'react';
import WebSpeechContainer from './webspeech_container';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-box">
        This is the sidebar
        <WebSpeechContainer />
      </div>
    );
  }
}
