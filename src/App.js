import React, { Component } from "react";
import NavBar from "./components/navBar/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
