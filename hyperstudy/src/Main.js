import React, {Component} from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import Board from "./routes/Board";

class Main extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1>Main</h1>
                    <div className="header">
                        <div><Link to="/board">board</Link></div>
                    </div>
                    <div className="content">
                        <Route path="/board" component={Board}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
