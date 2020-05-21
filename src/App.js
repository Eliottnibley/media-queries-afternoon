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
            <header className={this.state.isMenuOpen ? 'menu-open' : 'menu-closed'}>
              <div className='header-content'>
                <div>
                  <div className='title'>Start Bootstrap</div>
                  <div className='menu'>
                    <Menu menuOptions={this.state.menuOptions}/>
                    <div onClick={() => this.toggleMenu()} className='mobile-menu-button'>MENU</div>
                  </div>
                </div>
                <div className='mobile-menu'>
                  <Menu menuOptions={this.state.menuOptions}/>
                </div>
              </div>
            </header>
            <div className='welcome-message'>Welcome To Our Studio!</div>
            <div className='meet-message'>IT'S NICE TO MEET YOU</div>
            <div className='more-button'>TELL ME MORE</div>
          </div>
        </div>
        <div className='services'>
          
        </div>
        <div className='other'></div>
      </div>
    )
  }
}

export default App;
