const express= require("express");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const path=require("path");
const routes=require("./src/routes")

const port=process.env.PORT || 5000;

const app=express()
app.use(cors());
app.use(express.json());
app.use(cookieParser());

require("./src/database");


app.use("/",routes)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})