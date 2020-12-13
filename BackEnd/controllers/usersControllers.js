const User = require('../models/usersModels');
exports.userRegistration = (req, res, next)=>{
  User.create(req.body).then((result)=>{
      res.status(201).send({succuss: true, id: result._id})
  }).catch(err=>{
      res.status(500).send({message: err.message})
  })

}
//router.post('/login', userController.userLogin);
 /*exports.userLogin = (req,res,next)=>{
     Users.create(req.body).then((resp)=>{
         res.status(201).send({succuss:true, data:resp.data})
     }).catch(err=>{
         res.status(500).send({msg:err.msg})
     })
 }*/

 //router.post('/allUsers', userController.usersList);
 /*exports.usersList =(req,res,next)=>{
    User.find().then((result)=>{
        res.status(200).send({succuss:true, data:result.data})
    }).catch(err=>{
        res.status(500).send({msg:err.msg})
    })
 }*/

