import React, {Component} from 'react'

const Article = (props) => {

    return(

        <article className="post">
            <div>
                <img src={props.data[4]} className="absolute-bg" />
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


    )
}

export default Article;