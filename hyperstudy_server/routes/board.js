const express= require('express');
const router = express.Router();
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/hyperstudy";

let dbo;

MongoClient.connect(url, function(err, db) {
    if (err){
        console.log(err);
    }else{
        dbo = db.db("hyperstudy");
    }
});

router.post('/',(req,res)=>{
    res.json({message: "board ok"});
});

router.post('/write',(req,res)=>{
    // console.log(req.body);
    const myobj = req.body;
    // console.log(myobj);
    // res.json({message: "write ok", data:req.body});
    dbo.collection("board").insertOne(myobj, function(err, result) {
        if (err){
            console.log(err);
            res.json({message:"추가 실패"});
        }else{
            res.json({message:"추가 성공", data : result});
        }
    });
});

// getlist
router.get('/getlist',(req,res)=>{
    // res.json({message:"getlist ok"});
    dbo.collection("board").find({}).toArray(function(err, result) {
        if (err){
            console.log(err);
            res.json({message:false});
        }else{
            res.json({message:"get mongo", result});
            // res.json(result);
        }
    });
});

module.exports=router;









// getlist_with_fetch
// router.get('/getlist', async(req,res,next)=>{
//     console.log("getlist ok");
//     const board = await Board.find();
//     res.json(board);
//     console.log(board);
// })
