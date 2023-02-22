const router = require('express').Router();
const randomArticle = require('./randomArticle')

router.use('/rdmArticle', randomArticle)

module.exports = router;