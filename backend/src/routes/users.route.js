const express = require('express');
const router = express.Router();
const { getUsers, createUser, signUp, getUser, deleteUser, updateUser, loginUser, getMechanics } = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken')
const verifyRol = require('../middlewares/verifyRol')

//Rutas para los usuarios

router.get('/get_users', [verifyToken,verifyRol.Administrador],getUsers)
router.get('/get_user/:id', [verifyToken,verifyRol.Administrador],getUser)
router.get('/get_mechanics', verifyToken, getMechanics)
router.post('/new_user', [verifyToken,verifyRol.Administrador], createUser)
router.post('/login', loginUser)
router.post('/signup', signUp)
router.put('/update_user/:id', [verifyToken,verifyRol.Administrador], updateUser)
router.delete('/delete_user/:id', [verifyToken,verifyRol.Administrador],deleteUser)

module.exports= router;