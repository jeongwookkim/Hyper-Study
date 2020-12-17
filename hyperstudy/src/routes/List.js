import React, {Component} from "react";
import axios from 'axios';
import '../css/board.css';

class List extends Component{
    state = {
        board:[]
    }
    getData = async ()=>{
        const {
            data:{ result }
        } = await axios.get('http://localhost:8080/board/getlist');
        // console.log(result);
        this.setState({
            board:result
        })
    }
    componentDidMount(){
        this.getData();
    }

    // withfetch
    // state={
    //     board:[]
    // }

    // componentDidMount(){
    //     fetch('http://localhost:8080/board/getlist')
    //     .then(result=>result.json())
    //     .then(board => this.setState({
    //         board
    //     }));
    // }

    render(){
        return(
            <div className="listView">
                <h3>Board List</h3>
                {this.state.board.map(board=>
                    <div key={board._id}>{board.title} {board.contents}</div>)}
            </div>
        );
    }
}

export default List;
