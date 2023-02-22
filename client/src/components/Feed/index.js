import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import feedGen from '../../utils/feedMe'

// const text = feedGen()

const Feed = () => {
    const [content, setContent] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const feedPromise = feedGen()
        feedPromise.then((content) => {
            const title = content.title
            console.log(title)
            console.log(content)
            setContent(content)

        })
    }, [])


    return (
        <article className="post">
            <div>
                <div className="absolute-bg"></div>
            </div>
            <div className="post__container">
                <h2>
                    <span className="post__title">{content.title}</span>
                </h2>

                <div className="post__content">
                    <header>
                        <time className="post__time">{content['@_lastupdate']}</time>
                        <h3 className="post__author">{content.copyright}</h3>
                    </header>

                    <p className="post__text"></p>
                </div>

            </div>
        </article>
    );
};

export default Feed;