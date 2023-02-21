import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { feedGen } from '../../utils/feedMe'

const Feed = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <article className="post">
            <div>
                <div className="absolute-bg" style={divStyle}></div>
            </div>
            <div className="post__container">
                <h2>
                    <span className="post__title">Title Goes Here</span>
                </h2>

                <div className="post__content">
                    <header>
                        <time className="post__time">Jan 22 2017</time>
                        <h3 className="post__author">Author goes here</h3>
                    </header>

                    <p className="post__text">{{}}</p>
                </div>

            </div>
        </article>
    );
};

export default Feed;
