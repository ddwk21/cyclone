import React from 'react';

const ProfileList = () => {

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
            <span className="post__title">Title Goes Here</span>
          </h2>

          <div className="post__content">
            <header>
              <time className="post__time">Jan 22 2017</time>
              <h3 className="post__author">Author goes here</h3>
            </header>

            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec nunc enim.</p>
          </div>

        </div>
      </article>

      <div style={{ textAlign: 'right' }}>
        <button type="button" class="btn btn-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default ProfileList;