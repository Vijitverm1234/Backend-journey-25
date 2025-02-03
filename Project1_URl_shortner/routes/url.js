const express=require('express')
const router=express.Router();
const {handleGenerateShortURl}=require('../controller/url')
router.post('/',handleGenerateShortURl)
module.exports=router;