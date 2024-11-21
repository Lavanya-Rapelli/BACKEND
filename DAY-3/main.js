const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("server created")
})
app.post('movie', (req, res) => {
    return res.send("Movie create")
})

app.get('/movies', (req, res) => {
    res.send("welcome to movie db")
})

app.get('/movies', (req, res) => {
res.send([1,2,3,4,5]);
})

app.get("search", (req, res) => {
    res.send({
        id:1,
        name:"deadpool"
    })
})