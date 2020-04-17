
const express = require('express')
const PageController = require('../controllers/PageController')
const router = express.Router()

router
  .route('/')
  .get(PageController.getHome)

router
  .route('/*')
  .get(PageController.notFound)

module.exports = router