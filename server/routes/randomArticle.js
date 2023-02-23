const router = require('express').Router();
const { ArticleList } = require('../models');

router.get('/', async (req, res) => {
    try {
        let list = await ArticleList.findOne({ 'category': req.query.cat })
        let id = list.articles[Math.floor(Math.random() * (list.articles.length - 1))].articleId//get random index of category
        res.json(id)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router