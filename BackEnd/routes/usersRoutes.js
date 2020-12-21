const express = require('express');
const router = express.Router()

const MyUserController = require('../controllers/usersControllers');
  //200 OK
 // 201 created
 router.post('/users',  MyUserController.userRegistration);
 router.post('/login', MyUserController.userLogin);
 router.get('/allUsers', MyUserController.usersList);
 //router.patch('/users/:userId', MyUserController.updateUser);
 //router.delete('/users/:userId', MyUserController.removeUser);

module.exports = router;