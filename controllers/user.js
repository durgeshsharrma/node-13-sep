const users = require('../data.json');

module.exports.allUsers = (req , res) =>{
      try{  res.json(users);

      }catch(err) {
         console.log(err);
      }
}


module.exports.getUser = (req , res) =>{
    try{  
        let id = req.params.id;
        let user = users.find((user) => user.id == id)
        res.json(user);

    }catch(err) {
       console.log(err);
    }
}