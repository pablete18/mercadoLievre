const express = require('express');
const app = express();
const path = require ('path');

const PORT = 5000;

app.listen(PORT, ()=> console.log(`servidor corriendo en http://localhost:${PORT}`)); 
app.use(express.static('public'))

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))


