const express=require('express');
const path=require('path');


const app=express();


app.use(express.static(__dirname+'/dist/covidApp'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'dist/covidApp/index.html'));
});


app.listen(process.env.PORT || 8000);