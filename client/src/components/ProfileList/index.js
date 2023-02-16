import React from 'react';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3></h3>;
  }

  return (
    <div>
      <h3 className="text-primary">ARTICLE TITLE TEST PLACEHOLDER</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">

              <div className="card mb-3 d-flex justify-content-center">

                <div className="card-header bg-dark text-light p-2 m-0 inline-block text-center">

                  <h4>
                    ARTICLE TITLE TEST #2
                  </h4>
                  <img src="https://via.placeholder.com/250" />
                  <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    ARTICLE BODY PLACEHOLDER
                  </span>
                </div>

                <h4 className="card-header bg-dark text-light p-2 m-0">
                  ARTICLE TITLE TEST #2 <br />
                  <img src="https://via.placeholder.com/250" />
                  <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    ARTICLE BODY PLACEHOLDER
                  </span>
                </h4>

                <h4 className="card-header bg-dark text-light p-2 m-0">
                  ARTICLE TITLE TEST #2 <br />
                  <img src="https://via.placeholder.com/250" />
                  <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    ARTICLE BODY PLACEHOLDER
                  </span>
                </h4>

                <h4 className="card-header bg-dark text-light p-2 m-0">
                  ARTICLE TITLE TEST #2 <br />
                  <img src="https://via.placeholder.com/250" />
                  <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    ARTICLE BODY PLACEHOLDER
                  </span>
                </h4>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;