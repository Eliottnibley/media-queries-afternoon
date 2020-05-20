import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';

class App extends Component {
  constructor () {
    super() 
    this.state ={
      isMenuOpen: false,
      menuOptions: ['SERVISES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT']
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div className='App'>
        <div className='intro-background'>
          <div className='image-fade'>
            <header>
              <div className='header-content'>
                <div className='title'>Start Bootstrap</div>
                <div className='menu'>
                <Menu menuOptions={this.state.menuOptions}/>
                </div>
              </div>
              <div className='mobile-menu'>
                <Menu menuOptions={this.state.menuOptions}/>
              </div>
            </header>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
