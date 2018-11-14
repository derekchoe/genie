import React, { Component } from 'react';
import CreateTransFormContainer from './create_trans_form_container';
// import CreateCategoryFormContainer from './create_cate_form_container';
import { slide as Menu } from 'react-burger-menu';

export default class Sidebar extends Component {
  render() {
    return (
      <Menu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        width={320}
        className="sidebar-box"
      >
        <CreateTransFormContainer />
      </Menu>
    );
  }
}
