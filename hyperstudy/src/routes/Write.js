import React, {Component} from "react";
import axios from 'axios';
import '../css/board.css';

class Write extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            contents:'',
            post:[]
        };
        this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }

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

    handleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]:value // name 속성의 이름으로 계산되고 사용 됨 
        })
        console.log(this.state.name);
    }
    
    // handleSubmit(e){
    //     // alert(this.state.title+" : "+this.state.contents);

    //     const data = {
    //         title:this.state.title,
    //         contents: this.state.contents
    //     }
    //     e.preventDefault();
    //     axios.post("http://localhost:8080/board/write", data)
    //     .then(res=>{
    //         // console.log(res.config.data);
    //         console.log(res);
    //         // alert(res.data.message);
    //     })
    // }

    render() {
        return(
            <div className="Write">
                {/* <form onSubmit={this.handleSubmit}> */}
                    <div>
                        <input id="board_title" name="title" placeholder="title" onChange={this.handleChange} value={this.state.title}></input>
                    </div>
                    <div>
                        <textarea id="board_contents" name="contents" placeholder="contents" onChange={this.handleChange} value={this.state.contents}></textarea>
                    </div>
                    <div>
                        <button id="board_post" onClick={this.onUpload}>upload</button> {/* XXX onUpload가 왜 err가 나지 않나 */}
                    </div> 
                {/* </form> */}
            </div>
        );
    }
}
export default Write;
