import React, { Component } from "react";
import "./Navbar.css";
import Icons from "../Icon";
import { Search } from "../Search/Search";

export default class Navbar extends Component {


  handleFilterChange = (filteredData) => {
    console.log("filter data from navbar " ,filteredData);
  }


  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <div>
            <Icons name="menu-icon" />
          </div>
          <div>
            <Icons name='trello-icon3' />
            <p id="trello">Trello</p>
          </div>
          <div>
            Workspaces{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Recent{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Starred{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Templates{" "}
            <Icons name='arrow-down' />
          </div>
          <div id="create">Create</div>
        </div>
        <div className="nav-right">
          <div className="input">
            <Icons name="search" />
            <Search data={this.props.data} onFilterChange={this.handleFilterChange}/>
            
          </div>
          <div><Icons name='notification' /></div>
          <div><Icons name='help' /></div>
          <div id="account-div"><Icons name='account' /></div>
        </div>
      </div>
    );
  }
}
