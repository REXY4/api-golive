const config = require('./config');
const express = require('express');
const src = require("./src");
const app = express();
const cors = require('cors');

const {database,port,username,dialect,host,password} =  config.sql;
src.services.sequelize(config.sql.database,username,password,host,port,dialect)

app.use(cors());
app.use(express.json());
//check db

Object.values(src.routers).forEach(defenition=>{
    let router = express.Router();
    defenition.routes.forEach(route=>{
                router[route.method](
                ...[route.path].concat(route.action)
                )
            }); 
    app.use(defenition.basePath, router)        
})

app.use("/",(req, res)=>{
    res.send("Hallo World")
})

const ssl = process.env.SSL === "true" ? "https://" : "http://"
app.listen(config.app.port, ()=>console.log("aplication running on",{
    name : config.app.name,
    author : config.app.author,
    version : config.app.version,
    description : config.app.description,
    start : `${config.app.host}:${config.app.port}`,

}))