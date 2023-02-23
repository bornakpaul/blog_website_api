const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// UPDATE
router.put("/:id", async(req,res) => {
     if(req.body.userId === req.params.id){
          try{

          }catch(err){
               res.status(500).json(err);
          }
     } else {
          res.status(401).json("You can update only your account"); 
     }
});

// DELETE


module.exports = router