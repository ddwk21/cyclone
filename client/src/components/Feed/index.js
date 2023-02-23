import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import feedGen from '../../utils/feedMe'

// const text = feedGen()

const Feed = () => {
    const [content, setContent] = useState([])

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const feedPromise = feedGen()
        feedPromise.then((content) => {
            console.log(content)
            setContent(content)

        })
    }, [])


    return (
        <article className="post">
            <div>
                <img src={content[4]} className="absolute-bg" />
            </div>
            <div className="post__container">
                <h2>
                    <span className="post__title">{content[1]}</span>
                </h2>

                <div className="post__content">
                    <header>
                        <time className="post__time">{content[3]}</time>
                        <h3 className="post__author">{content[2]}</h3>
                    </header>

                    <p className="post__text">{content[0]}</p>
                </div>

            </div>
        </article>
    );
};

export default Feed;