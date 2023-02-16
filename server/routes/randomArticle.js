const router = require('express').Router();
const {ArticleList} = require('../models');

router.get('/', async(req, res) => {
    try {
        
        let list = ArticleList.findOne({'category': req.params.cat})
        let id = list.articles[0].articles[Math.floor(Math.random*(list.articles[0].totalCount-1))].articleId//get random index of category

        res.json(id)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router