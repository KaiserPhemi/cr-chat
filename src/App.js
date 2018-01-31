// react libraries
import React, { Component } from 'react';

// styles
import './App.css';

// components
import Sidebar  from "./components/Sidebar";
import MessagesList from "./components/MessagesList";
import AddMessage from "./components/AddMessage";

/**
 * Main component
 */
class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
