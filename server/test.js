const fetch = require('node-fetch')

let category = 3

 async function fetchTest() {
    const articleId = await fetch(`http://localhost:3001/api/rdmArticle?cat=${category}`)

    console.log(articleId)
}

fetchTest()