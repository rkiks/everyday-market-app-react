
import React from 'react';
import './Header.css';
import logo from '../../../market.jpg'
 
    class HeaderComponent extends React.Component {
      render() {
        return (
          <header className="app-header app-bg">
            <div className="maxHeight flex flex-align-items--
              center">
              <img src={logo} className="app-logo" alt="logo" 
               />
              <span className="app-slogan">Shop 'till you
                Drop</span>
            </div>
          </header>
        );
      }
    }
 
    export default HeaderComponent;