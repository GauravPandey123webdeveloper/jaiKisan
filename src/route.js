const express = require("express")
const router= express.Router()
const customerController= require("../controllers/customerController")
const cardController= require("../controllers/cardController")

router.post("/createCustomer",customerController.createCustomer)
router.get("/getCustomer",customerController.getCustomer)
router.delete("/deleteCustomer",customerController.deleteCustomer)

router.post("/createCard",cardController.createCard)
router.get("/getAllCards",cardController.getAllCards)


module.exports=router;