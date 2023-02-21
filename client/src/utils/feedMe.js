const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

async function feedGen() {
    //choose category
    //query the xml for a random article in chosen category. Math.floor(Math.random()*articleList.length)
    //process XML with xml2js
    //return processed text
    let category = Math.floor(Math.random() * 9)

    //let artList = query articleList[category]

    const articleId = await fetch(`/rdmArticle?cat=${category}`)
    //get a random article index

    // query artList[randomArticle] and get article ID

    const content = await getXML(category, articleId)

    return (content)

}

async function getXML(category, articleID) {
    let catID

    if (category == 0) {
        catID = "process.env.ART_KEY"
    } else if (category == 8) {
        catID = "process.env.ANIMAL_KEY"
    } else if (category == 2 || 4) {
        catID == "process.env.PEOPLE_EVENT_KEY"
    } else if (category == 5) {
        catID == "process.env.PLANT_KEY"
    } else if (category == 7 || 3) {
        catID == "process.env.SPORT_TECHNOLOGY_KEY"
    } else if (category == 1) {
        catID == "process.env.SCIENCE_KEY"
    } else if (category == 6) {
        catID == "process.env.PLACE_KEY"
    }

    let XML = await fetchXml(articleID, catID)
    return (XML)
}

const xmlParserOptions = {
    ignoreAttributes: false,
    parseAttributeValue: true,
    // attributeNamePrefix : "@_",
    // attributesGroupName : "@_"
}
const parser = new XMLParser(xmlParserOptions);
// const builder = new XMLBuilder();

function fetchXml(articleID, catID) {
    fetch(`https://syndication.api.eb.com/production/article/${articleID}/xml`,
        {
            headers: {
                'x-api-key': catID,
            }
        }
    )
        .then(
            async (response) => {
                const body = await (response.text())
                console.log(body)
                return (parser.parse(body))
            }
        )
        .then((data) => { return (data.article.p[0]['@_text']) })
    //If P is an array, get it like this, if P is not an array, just go through dot notation to assembly
}

export default feedGen()

//if .assembly >> image display logic

//check p.length
//for each p, we check for assembly
//for each assembly, pull url