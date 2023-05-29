var express = require('express');
var router = express.Router();
var sendController = require("../controllers/novuNotification")
const { body, check, param } = require('express-validator');

router.post('/send', [

    body("name").notEmpty().withMessage("Customer name should not be Empty"),
    body("email").notEmpty().withMessage("Email should not be Empty"),
    body("number").notEmpty().withMessage("Mobile number should not be Empty"),
    body("account").notEmpty().withMessage("Account number should not be Empty"),
    body("amount").notEmpty().withMessage("Amount should not be empty")
   

], sendController.notificationSend)


module.exports = router;