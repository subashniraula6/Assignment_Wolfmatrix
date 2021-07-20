const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());

app.get('/api/email', (req, res) => {
    res.send(JSON.stringify({
        name: "Basanta Niraula",
        email: "subashniraula6@gmail.com"
    }))
})

app.listen(8080, ()=> console.log('server listening..'))