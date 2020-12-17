import React, {Component} from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Write from "./Write.js";
// import Write from "./Write_err.js";

import List from "./List.js";
import '../css/index.css';


class Board extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul className="header">
                        <li><Link to="/board/write">write</Link></li>
                        <li><Link to="/board/list">list</Link></li>
                    </ul>
                </div>
                <div>
                    <Route path="/board/write" component={Write}/>
                    <Route path="/board/list" component={List}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Board;
