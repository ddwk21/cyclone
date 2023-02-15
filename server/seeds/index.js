const fetch = require('node-fetch')
const connection = require('../config/connection')
const {ArticleList} = require('../models')

connection.once('open', async() => {

    const keyCount = 9;
    await ArticleList.deleteMany()

    for(let i = 0; i<9; i++){
        
    }

})