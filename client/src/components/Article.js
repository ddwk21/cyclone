import React, {Component, useState} from 'react'

import { useMutation } from '@apollo/client';
import { ADD_ARTICLE, DELETE_ARTICLE } from '../utils/mutations'



const Article = (props) => {

    const [likeStyle, setLikeStyle] = useState('')

    const [addArticle] = useMutation(ADD_ARTICLE)
    const [deleteArticle] = useMutation(DELETE_ARTICLE)

    const articleId = props.data[4]

    const handleImageSrc = () => {
        let imgSrc = props.data[5]
        let placeholder = `https://via.placeholder.com/700X1050`
        

        if (imgSrc === undefined) {
            imgSrc.push(placeholder)
        }
        console.log(imgSrc)
    }
    
    

    const handleLikeStyle = async () => {
        if (likeStyle === '') {
            setLikeStyle('liked')
            console.log(articleId)
            try {
                await addArticle({ variables: {articleId} })
            } catch (err) {
                console.log(err)
            }
            
        } else if (likeStyle === 'liked') {
            setLikeStyle('')
            try {
                await deleteArticle({ variables: {articleId} })
            } catch (err) {
                console.log(err)
            }
        }
    }

    

    return(
        <div id='whole-container'>
            <article className="post">
                <div>
                    <img src={props.data[5]} className="absolute-bg" />
                </div>
                <div className="post__container">
                    <h2>
                        <span className="post__title">{props.data[1]}</span>
                    </h2>

                    <div className="post__content">
                        <header>
                            <time className="post__time">{props.data[3]}</time>
                            <h3 className="post__author">{props.data[2]}</h3>
                        </header>

                        <p className="post__text">{props.data[0]}</p>
                    </div>

                </div>
            </article>
            <div style={{ textAlign: 'right' }}>
                <button onClick={() => handleLikeStyle()} type="button" id={likeStyle} class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                </button>
            </div>
        </div>


    )
}

export default Article;