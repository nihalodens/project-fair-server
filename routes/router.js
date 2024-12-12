const express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewears/jwtMiddleware')
const multerMiddleware = require('../middlewears/multerMiddleware')


const router = new express.Router()

// register - post
router.post('/register',userController.registerController)

// login - post
router.post('/login',userController.loginController)

// add-project - post
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)

// home project - get
router.get('/home-projects',projectController.getHomeProjectsController)

// user-project - get
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsController)

// all-project - get
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectsController)

// edit-project - put
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single("projectImage"),projectController.editProjectController)

// remove-project - delete
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)

// edit-user - put
router.put('/user/edit',jwtMiddleware,multerMiddleware.single("profilePic"),userController.editUserController)




module.exports = router