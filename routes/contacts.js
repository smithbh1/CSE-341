const express = require('express');
const router = express.Router();

const contactsController = require('../contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;