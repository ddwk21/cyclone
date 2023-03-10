import React from 'react';
import { useQuery } from '@apollo/client';

import ArticleFeed from '../components/ArticleFeed';


import { QUERY_PROFILES } from '../utils/queries';
import Feed from '../components/Feed';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="my-2 w-100">
          {loading ? (
            <div>Loading...</div>
          ) : (<>
            <ArticleFeed
              profiles={profiles}
              title="This is a test section for the article loading area"
            />
            <Feed />
          </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;