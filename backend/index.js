const express=require("express");
const {main}=require("./openai.function")
const cors=require("cors")

const app = express();
app.use(cors())
app.use(express.json());
app.get("/shayari",async(req,res)=>{
    
    let {type} = req.query;
    let result = await main("shayari",type)
    res.status(200).json({result})
})
app.get("/joke",async(req,res)=>{
    
    let {type} = req.query;
    let result = await main("joke",type)
    res.status(200).json({result})
})



app.listen(8080,()=>{console.log("server is working ")})