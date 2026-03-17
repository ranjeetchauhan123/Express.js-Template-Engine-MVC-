const handleApi = require("../model/apiModel");

function controller (req,res){
   const myData =  handleApi()
   console.log(myData);
   
   res.render('apiView', {data : myData})
}

module.exports=controller;