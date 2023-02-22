import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ArticleFeed';


import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="my-2 w-100">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="This is a test section for the article loading area"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;