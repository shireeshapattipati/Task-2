import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    this.render
  }

    setTimeout(
      async function () {
        const response = await fetch
        const jsonresponse = await response.json();
        console.log();
        this.setState({ users_data: jsonresponse["information"], loading: false });
      }.bind(this),
    
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
         
            <button className="" onClick={}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="datainformation">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <footer className="footer">
        </footer>
      </>
    );
    }}