import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add additional user details */}
    </div>
  );
};

export default Profile;
