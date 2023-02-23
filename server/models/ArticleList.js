const { Schema, model } = require('mongoose')

const articleListSchema = new Schema({
    articles: [Schema.Types.Mixed],
    category: Number,
})

const ArticleList = model('ArticleList', articleListSchema)

module.exports = ArticleList