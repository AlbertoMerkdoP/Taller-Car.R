const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUser, deleteUser, updateUser, loginUser, getMechanics } = require('../controllers/users.controller');

//Rutas para los usuarios

router.get('/get_users', getUsers)
router.get('/get_user/:id',getUser)
router.get('/get_mechanics', getMechanics)
router.post('/new_user', createUser)
router.post('/login', loginUser)
router.put('/update_user/:id', updateUser)
router.delete('/delete_user/:id',deleteUser)

module.exports= router;