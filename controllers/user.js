const user = require('../data.json');

module.exports.allUsers = (req , res) =>{
      try{  res.json(user);

      }catch(err) {
         console.log(err);
      }
}