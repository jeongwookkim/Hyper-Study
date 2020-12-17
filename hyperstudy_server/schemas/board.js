// const { text } = require('body-parser');
const mongoose = require('mongoose');

const {Schema}=mongoose;

const boardSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    contents:{
        type:String,
        required:true
    }
    // ,
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // }
});

module.exports=mongoose.model('Board', boardSchema, 'board');











// 세번째 인자값에 실제 컬렉션의 이름 써주자(기존에 있던 디비를 사용할경우)
// if Board스키마이면 컬렉션은 boards로 변경된다
