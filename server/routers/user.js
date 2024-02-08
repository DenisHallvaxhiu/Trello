const express = require("express")
const router = express.Router()

// Controllers
const newUser = require("../controllers/newUser")

//

router.post("/new-user", newUser)

module.exports = router