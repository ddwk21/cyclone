const { Schema, model } = require('mongoose')

const articleSchema = new Schema({
    articleId: Number,
    articleTypeId: Number,
    title: String,
    lastUpdated: String,
    tags: [String],
    likes: [String],
    likedBy: [String],
})

const Article = model('Article', articleSchema)

module.exports = Article


// api id, type, media, ?
// Article List
// Category, CategoryId, articleArray