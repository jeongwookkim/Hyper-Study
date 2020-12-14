import React, {Component} from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Login from "./Login";
import Sign from "./Sign";
import UserUpdate from "./UserUpdate";
import Board from "./Board";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Main</h1>
                    <ul className="header">
                        <li><NavLink to="/login">login</NavLink></li>
                        <li><NavLink to="/sign">sign</NavLink></li>
                        <li><NavLink to="/userUpdate">user update</NavLink></li>
                        <li><NavLink to="/board">board</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/login" component={Login}/>
                        <Route path="/sign" component={Sign}/>
                        <Route path="/userUpdate" component={UserUpdate}/>
                        <Route path="/board" component={Board}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
