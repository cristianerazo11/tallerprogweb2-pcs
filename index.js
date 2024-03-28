const express = require('express');
const{ leerJSON, escribirJSON } = require('./src/files')

const app = express();
app.use(express.json())




//index
app.get('/pcs', (req, res) => {
    //leer archivo
    const pcs = leerJSON('./bd.json')
    res.send(pcs)
})





app.listen(3000, () => {
    console.log('listening on port 3000');
})