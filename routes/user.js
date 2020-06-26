const express = require('express');
const router = express.Router();

const usrCntrlr = require('../controller/cntrlFunc');

//findall users
router.get('/', usrCntrlr.findAll);

//find user by id
router.get('/:id', usrCntrlr.findById);

//create new user
router.post('/', usrCntrlr.create);

//update an user
router.put('/:id', usrCntrlr.update);

//delete an user
router.delete('/:id', usrCntrlr.delete);


module.exports = router;