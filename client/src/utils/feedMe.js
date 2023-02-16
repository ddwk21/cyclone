function feedGen() {
    //choose category
    //query the xml for a random article in chosen category. Math.floor(Math.random()*articleList.length)
    //process XML with xml2js
    //return processed text
    let category = Math.floor(Math.random()*9)
    
    //let artList = query articleList[category]


    //get a random article index
    let randomArticle = Math.floor(Math.random()*ArticleList.length)

    // query artList[randomArticle] and get article ID



}

function getXML(category, articleID){
    let catID
    
    if(category == 0) {catID = "process.env.ART_KEY"
}else if(category == 8){ 
    catID = "process.env.ANIMAL_KEY"
}else if(category == 2||4){
    catID == "process.env.PEOPLE_EVENT_KEY"
}else if(category == 5){
    catID == "process.env.PLANT_KEY"
}else if(category == 7||3){
    catID == "process.env.SPORT_TECHNOLOGY_KEY"
}else if(category == 1){
    catID == "process.env.SCIENCE_KEY"
}else if(category == 6){
    catID == "process.env.PLACE_KEY"
}

let XML;

fetch(`https://syndication.api.eb.com/production/article/${articleID}/xml`,
{
    headers: {
        'x-api-key': catID,
    }
}).then(
    (data) => {data.toJson}//pseudocode. Use conversion package
    ).then(
        //process data to get body text
    ).then(
        //return body text
    )
}