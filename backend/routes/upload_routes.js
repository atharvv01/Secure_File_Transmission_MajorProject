// external imports
const express = require('express');
const router = express.Router();

//intenal imports
const UploadController = require ("../controllers/upload_controller.js")
const {verifyToken} = require ("../middlewares/auth.js")

//protected routes
router.use(verifyToken)
// route to upload data
router.post('/upload',UploadController.uploadData);

module.exports = router ; 