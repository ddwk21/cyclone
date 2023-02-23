import React from 'react';

const ArticleFeed = () => {

  const divStyle = {
    backgroundImage: 'url(' + ('https://source.unsplash.com/f9C8ytxaItI/2000x1200') + ')',
  }

  return (
    <div>
      <article className="post">
        <div>
          <div className="absolute-bg" alt='' style={divStyle}></div>
        </div>
        <div className="post__container">
          <h2>
            <span className="post__title">Welcome to Encyclone!</span>
          </h2>

          <div className="post__content">
            <header>
              <time className="post__time">Feb 2023</time>
              <h3 className="post__author" >
                <a style={{ padding: 0, color: '#000000', letterSpacing: 0, }} href='https://github.com/ddwk21'>Mitchell Leimeux</a><br />
                <a style={{ padding: 0, color: '#000000', letterSpacing: 0, }} href='https://github.com/Krenbot'>Steven Krenn</a> <br />
                <a style={{ padding: 0, color: '#000000', letterSpacing: 0, }} href='https://github.com/JeremyBukofzer/'>Jeremy Bukofzer</a> <br />
                <a style={{ padding: 0, color: '#000000', letterSpacing: 0, }} href='https://github.com/Hunter-Mayer/'>Hunter Mayer</a><br />
                <a style={{ padding: 0, color: '#000000', letterSpacing: 0, }} href='https://github.com/richiethie/'>Richie Thiesfeldt</a>
              </h3>
            </header>

            <p className="post__text">Welcome to Encyclone!<br /><br />Ever find yourself going down a rabbit hole of encyclopedia articles? With Encyclone, you can endlessly scroll through random articles based off of nine categories, populating the page with relevant media and text from the Encyclopedia Britannica’s very own API. You can like and save articles of particular interest to your profile, so that you can revisit them again in the future. </p>
          </div>

        </div>
      </article >

      <div style={{ textAlign: 'right' }}>
        <button type="button" class="btn btn-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>

    </div >
  );
};

export default ArticleFeed;