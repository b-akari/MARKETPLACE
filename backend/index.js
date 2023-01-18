import express from "express"
import mysql from "mysql"
const app= express()


const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "marketplace",
});


app.get("/", (req, res)=>{
    res.json("hello, this is the backend")
})

app.get("/shoes", (req, res)=>{
    const q= "SELECT * FROM shoes"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        res.json(data)
    })
})

app.post("/shoes", (req, res)=>{
    const q= "INSERT INTO shoes (`id`, `prod_name`, `prod_description`, `image`) VALUES(?)";
    const values = [
        "222",
        "item 3",
        "item3 description",
        "item 3 image"
    ];
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        res.json(data)
    } )
})


app.listen(8080, ()=> {
    console.log("connected to backend")
})