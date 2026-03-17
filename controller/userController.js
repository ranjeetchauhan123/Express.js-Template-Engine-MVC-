const userList = require('../model/userModel')

function handleUsers(req,res){

    const userData = userList()
    console.log(userData)    
    res.render('userView',{user : userData})
}

module.exports=handleUsers