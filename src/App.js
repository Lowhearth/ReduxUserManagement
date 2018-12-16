import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserManagement from './containers/UserManagement'
import { connect} from 'react-redux'
import { Route, NavLink, MemoryRouter } from "react-router-dom";
import {FaUserCog} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';



class App extends Component {


  render() {
    return (
      <div>
        <div className="Main" style={{display:"flex"}}>
        <div style={{width:"10%",  border:"solid 1px", marginTop: "5px", marginLeft: "5px", marginRight: "5px", borderRadius:"10px"}}>
          <nav style={{textAlign:"center", marginTop: "5px", marginLeft: "5px", marginRight: "5px"}}>
            <div  style={{ marginTop:"30px", height: "50px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <NavLink activeStyle={{ color: 'black' }} to="/"><FaUserCog size="4em"/></NavLink>
            </div>
          </nav>
        </div>
          <Route path="/" component={UserManagement} />
        </div>
      </div>
    );
  }
}





export default App;
