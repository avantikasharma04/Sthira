import React from 'react';
import ReactPlayer from 'react-player';

const Video1 = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 hover:bg-hover cursor-pointer w-96 flex">
    <div>
    <div className="flex justify-center mt-6 pt-20">
      <ReactPlayer
        url="https://youtu.be/1ZYbU82GVz4?si=6tfdlWRsNv6lP0pl"
        controls={true}
        className="rounded-lg shadow-lg"
        width="100%"
        height="480px"
      />
    </div>
    </div>
    <div>

    <div className="flex justify-center mt-6 pt-20">
      <ReactPlayer
        url="https://youtu.be/1ZYbU82GVz4?si=6tfdlWRsNv6lP0pl"
        controls={true}
        className="rounded-lg shadow-lg"
        width="100%"
        height="480px"
      />
    </div>
    </div>

    
    </div>

    
  );
};

export default Video1;
