const express = require('express');

const router = express.Router();

const { postData, getdata, getbyid, getBYEmail,updatePassword } = require('../UserController/UserController.js');

router.put('/:id', updatePassword);

router.post('/', postData);

router.post('/login', getdata);

router.get('/:id',getbyid);

router.get('/getbyemail/:id', getBYEmail);




module.exports = router;