const router = require('express').Router();
const {ArticleList} = require('../models');

router.get('/', async(req, res) => {
    try {
        
        let list = ArticleList.findOne({'category': req.params.cat})
        let id = list.articles[Math.floor(Math.random*(list.articles.length-1))].articleId//get random index of category
        console.log('Database Random Hit!')
        res.json(id)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router