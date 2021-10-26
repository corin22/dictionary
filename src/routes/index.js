const express = require('express')
const router = express.Router()
const todo = require('./todo')
const word = require('./word')

router.use('/todos', todo)  // api/todos/ app.get
router.use('/words', word)

module.exports = router