//CommonJS
const express = require('express');

const app = express();

//route handler
app.get('/',(req,res)=>{
    res.send({bye:'there'});
})

const PORT = process.env.PORT || 5001;
app.listen(PORT);