const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const role = require('../middleware/roleMiddleware')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/', role('ADMIN'), userController.createUser)
router.get('/', userController.getAll)
router.get('/all', userController.getAll1)
router.get('/auth', authMiddleware, userController.checkUser)
router.get('/admin', role('ADMIN'), userController.checkUser)
router.put('/', role('ADMIN'), userController.deleteUser)
router.put('/change', role('ADMIN'), userController.changeUser)


module.exports = router