const router = require('express').Router()
const users = require("../controllers/usersCt")


router.get("/login", users.getLoginForm)
router.post("/login", users.sendLoginForm)
router.get("/register", users.getRegisterForm)
router.post("/register", users.sendRegisterForm)

module.exports = router; 