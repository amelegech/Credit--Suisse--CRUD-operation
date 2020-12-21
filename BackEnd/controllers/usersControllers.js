const User = require('../models/usersModels');
exports.userRegistration = (req, res, next)=>{
    console.log('from user registration',req.body)
  User.create(req.body).then((result)=>{
      res.status(201).send({succuss: true, id: result._id})
  }).catch(err=>{
      res.status(500).send({message: err.message})
  })

}
//router.post('/login', userController.userLogin);
 exports.userLogin = (req,res,next)=>{
    console.log('from user login',req.body)
     User.create(req.body).then((resp)=>{
         res.status(201).send({succuss:true, data:resp})
     }).catch(err=>{
         res.status(500).send({msg:err.msg})
     })
 }

 //router.get('/allUsers', userController.usersList);
 exports.usersList =(req,res,next)=>{
    User.find().then((result)=>{
        res.status(200).send({succuss:true, data:result})
    }).catch(err=>{
        res.status(500).send({msg:err.msg})
    })
 }

