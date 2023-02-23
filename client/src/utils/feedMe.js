import xmlExtract from "xml-extract";
import moment from 'moment'

const { XMLParser } = require("fast-xml-parser");
const { parseXml } = require('@rgrove/parse-xml');
const XMLExtract = require('xml-extract');

const baseMediaUrl = 'https://cdn.britannica.com'

async function feedGen() {
    //choose category
    //query the xml for a random article in chosen category. Math.floor(Math.random()*articleList.length)
    //process XML with xml2js
    //return processed text
    let category = Math.floor(Math.random() * 9)

    //let artList = query articleList[category]

    const response = await fetch(`/rdmArticle?cat=${category}`)
    //get a random article index
    const articleId = await response.json()
    // query artList[randomArticle] and get article ID

    const content = await getXML(category, articleId)

    return (content)

}

async function getXML(category, articleID) {
    let catID
    if (category == 0) {
        catID = process.env.REACT_APP_ART_KEY
    } else if (category == 8) {
        catID = process.env.REACT_APP_ANIMAL_KEY
    } else if (category == 2 || category == 4) {
        catID = process.env.REACT_APP_PEOPLE_EVENT_KEY
    } else if (category == 5) {
        catID = process.env.REACT_APP_PLANT_KEY
    } else if (category == 7 || category == 3) {
        catID = process.env.REACT_APP_SPORT_TECHNOLOGY_KEY
    } else if (category == 1) {
        catID = process.env.REACT_APP_SCIENCE_KEY
    } else if (category == 6) {
        catID = process.env.REACT_APP_PLACE_KEY
    }
    let XML = await fetchXml(articleID, catID)
    return (XML)
}

const xmlParserOptions = {
    // preserveOrder: true,
    ignoreAttributes: false,
    parseAttributeValue: true,
    // attributeNamePrefix : "@_",
    // attributesGroupName : "@_"
}
const parser = new XMLParser(xmlParserOptions);
// const builder = new XMLBuilder();

async function fetchXml(articleID, catID) {
    console.log(articleID)
    const response = await fetch(`https://syndication.api.eb.com/production/article/${articleID}/xml`,
        {
            headers: {
                'x-api-key': catID,
            }
        }
    )
    const body = await (response.text())
    console.log(body)
    const data2 = await parser.parse(body)
    const data = parseXml(body)
    // const media = xmlExtract(body, 'media', true, (error, element) => {
    //     if(error){
    //         throw new Error(error)
    //     }
    // })
    console.log(data2.article)
    console.log(data.document.text)
    const text = data.document.text
    const title = data2.article.title
    const author = data2.article.copyright
    const nonTime = data2.article['@_lastupdate']
    const time = moment(nonTime).format('MMM D YYYY')
    const newText = text.split(title)
    console.log(newText)
    //if title.length split is 1, remove first word, if 2 remove first 2 words
    
    // let snowballStr = '';
    // for(let i; i<data.length; i++){

    //     if(data[i] )

    // }

    function checkMedia() {
        let urlCollection = [];
        for(let i = 0; i < data2.article.p.length; i++)
        {
            if(data2.article.p[i].assembly?.media['@_url']) {
                console.log('IF')
                urlCollection.push(baseMediaUrl+data2.article.p[i].assembly?.media['@_url'])
            }
        }
        console.log(urlCollection)
        return(urlCollection)
    
    }

    let mediaUrls = checkMedia()
    // if(data2.article.p[0].assembly){
    //     mediaUrl = baseMediaUrl+data2.article.p[0].assembly.media['@_url']
    console.log(mediaUrls)
    if(mediaUrls){
        console.log(text)
        return [text, title, author, time, mediaUrls]
    } else {
        return (text)
    }
    //If P is an array, get it like this, if P is not an array, just go through dot notation to assembly
}

export default feedGen

//if .assembly >> image display logic

//check p.length
//for each p, we check for assembly
//for each assembly, pull url