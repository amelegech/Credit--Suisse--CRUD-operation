import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <header>
            <nav>
            
                <ul>
               <h1> Wel Come To Credit Suisse</h1>
                    <li><NavLink className="main-nav"  activeClassName="main-nav-active" to="/">Registration</NavLink></li>
                    <li><NavLink className="main-nav" activeClassName="main-nav-active" to="/login">Login</NavLink></li>
                    <li><NavLink  className="main-nav" activeClassName="main-nav-active"   to="/UsersList">Users List</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
