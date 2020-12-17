import React, {Component} from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import '../css/board.css';
import axios from 'axios';

class Write extends Component{
    state = { 
        title: '', 
        contents: '', 
    }; 
    onUpload = () => {

        const data = {
            title:this.state.title,
            contents: this.state.contents
        }

        axios
        .post('http://localhost:8080/board/write', data )
        .then(res=>{
            console.log("등록 성공");
        })
        .catch(err=>{console.log(err);});        
    }; 

    handleChange = (e) => { 
        const {value, name} = e.target;
        this.setState({
            [name]:value // name 속성의 이름으로 계산되고 사용 됨 
        })
        console.log(value);
    };   

    // constructor(props){
    //     super(props);

    //     this.state={
    //         title:'',
    //         contents:''
    //     };
    // }

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    // handleSubmit = e =>{
    //     e.preventDefault();
    //     const { title, contents } = this.state;
    //     const boardin = {
    //         title:this.state.title, 
    //         contents:this.state.contents
    //     };
    //     const board_info = {
    //         method: "POST",
    //         body: boardin,
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     };
    //     fetch("http://localhost:8080/board/write", board_info)
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //     })
    // }


    render(){
        return(
            <div className="write">
                <div>
                    <input type="text" id="board_title" name="title" placeholder="title"
                            value={this.state.title} onChange={this.handleChange}></input>
                </div>
                <div>
                    <textarea id="board_contents" name="contents" placeholder="contents" 
                                value={this.state.contents} onChange={this.handleChange}></textarea>
                </div>
                <div id='post_submit'>
                    <button onClick={this.onUpload}> 포스트 등록 </button>
                    <Link to="/board"> 취소 </Link>
                </div>
            </div>
        );        
    }
}

export default Write;
