const { Schema, model } = require('mongoose')

const articleListSchema = new Schema({
    articles: [],
<<<<<<< HEAD
    category: Number,
=======
    category: String,
>>>>>>> de7beb1842f16c24777fbbad64744e3973f941be
})

const ArticleList = model('ArticleList', articleListSchema)

module.exports = ArticleList