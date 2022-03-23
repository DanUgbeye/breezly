import React from 'react';

const Welcome = ({ name}) => {
  return (
    <div className=" text-2xl text-green-500 font-semibold mb-6">
      Welcome back {name}!
    </div>
  );
};

export default Welcome;