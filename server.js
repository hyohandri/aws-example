const express = require("express")
const app = express();
const port = 3000;
// for redering hello you don't need to require fs
const fs = require("fs")

app.get ('/', (req, res) => {
    res.send('<h1>KHALIL malandro.</h1>');
})


app.listen(port, () => console.log(`Listening on ${port}`))