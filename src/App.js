import React, { Component } from 'react';
import './App.css';
import logo from './GitHub-Mark-Light-32px.png'

class App extends Component {
  render() {
    return (
      <div class="App">
        <header>
          <div>
            <div class="header">
              <div class="nav">
                <img class="Logo" src={logo} alt="Github Icon"></img>
                <input placeholder="Search GitHub"></input>
                <button class="nav-list"> Pull request </button>
                <button class="nav-list"> Issues </button>
                <button class="nav-list"> Marketplace </button>
                <button class="nav-list"> Explore </button>
              </div>
              <div class="icons">
                <div class="icon">1</div>
                <div class="icon2">2</div>
                <div class="icon3">3</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div class="primary-page">
            <div class="profile">
              <img class="profile-photo" src="https://avatars0.githubusercontent.com/u/38018234?s=460&v=4" alt="Profile photo"></img>
              <h2></h2>
              <button class="confirmationButton"></button>
              <button class="confirmationButton"></button>
            </div>
            <div class="primary-content">

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
