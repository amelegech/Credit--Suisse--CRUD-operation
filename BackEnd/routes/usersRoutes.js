const express = require('express');
const router = express.Router()

const MyUserController = require('../controllers/usersControllers');
  //200 OK
 // 201 created
 router.post('/users',  MyUserController.userRegistration);
 //router.post('/login', userController.userLogin);
 //router.get('/allUsers', userController.usersList);
 //router.patch('/users/:userId', userController.updateUser);
 //router.delete('/users/:userId', userController.removeUser);

module.exports = router;