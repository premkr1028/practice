import express from "express"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());
const data = [
    {
        little:"megha"
    }
]
app.get("/",(req,res)=>{
    res.send("megha")
})
app.get("/little",(req,res)=>{
res.json(data)
})

app.listen("3000",()=>{
    console.log("connected")
})