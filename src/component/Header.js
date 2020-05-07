import React, {Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {

    render(){
      
        return(
            <Fragment>
               <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand">Developer Funnel</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li ><a >Home</a></li>
                        <li><a >Page 2</a></li>
                        <li><a>Page 3</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a ><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </Fragment>
        )
    }
}


export default Header;
