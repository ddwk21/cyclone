const fetch = require('node-fetch')
const connection = require('../config/connection')
const {ArticleList} = require('../models')
const env = require('dotenv').config();

connection.once('open', async() => {

    const keyCount = 9;
    await ArticleList.deleteMany()
    console.log('deleted')

    Promise.all([
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=1',
        {
            headers: {
                'x-api-key': process.env.ART_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=2',
        {
            headers: {
                'x-api-key': process.env.SCIENCE_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=3',
        {
            headers: {
                'x-api-key': process.env.PEOPLE_EVENT_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=4',
        {
            headers: {
                'x-api-key': process.env.SPORT_TECHNOLOGY_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=5',
        {
            headers: {
                'x-api-key': process.env.PEOPLE_EVENT_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=6',
        {
            headers: {
                'x-api-key': process.env.PLANT_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=7',
        {
            headers: {
                'x-api-key': process.env.PLACE_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=8',
        {
            headers: {
                'x-api-key': process.env.SPORT_TECHNOLOGY_KEY,
            }
        }),
        fetch('https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=9',
        {
            headers: {
                'x-api-key': process.env.ANIMAL_KEY,
            }
        }),
        
    ]).then(async responses => {
        console.log('fetched')
        for (const response of responses) {
            console.log(response)
                const jsonData = await response.json()
                await ArticleList.create({
                    articles: jsonData.articles,
                    category: responses.indexOf(response)
                })
            }
            console.log('Done')
        })
        process.exit()
})