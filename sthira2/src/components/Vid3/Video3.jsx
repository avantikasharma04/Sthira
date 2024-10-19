import React from 'react';

const Video3 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Meditation music</h1>
        <div className="flex flex-wrap justify-center items-center space-x-6">
          {/* Option 1 */}
          <div className="bg-white p-4 rounded-md shadow-md w-1/3 text-center mt-10">
            <h2 className="text-xl font-bold mb-2">Option 1</h2>
            <p className="text-gray-700">Description for option 1.</p>
            <div className="mt-2 rounded-md overflow-hidden">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Option 1 Video"
              ></iframe>
            </div>
          </div>
          
          {/* Option 2 */}
          <div className="bg-white p-4 rounded-md shadow-md w-1/3 text-center mt-10">
            <h2 className="text-xl font-bold mb-2">Option 2</h2>
            <p className="text-gray-700">Description for option 2.</p>
            <div className="mt-2 rounded-md overflow-hidden">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Option 2 Video"
              ></iframe>
            </div>
          </div>

             {/* Option 2 */}
             <div className="bg-white p-4 rounded-md shadow-md w-1/3 text-center mt-10">
            <h2 className="text-xl font-bold mb-2">Option 2</h2>
            <p className="text-gray-700">Description for option 2.</p>
            <div className="mt-2 rounded-md overflow-hidden">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Option 2 Video"
              ></iframe>
            </div>
          </div>
          
          {/* Option 3 */}
          <div className="bg-white p-4 rounded-md shadow-md w-1/3 text-center mt-10">
            <h2 className="text-xl font-bold mb-2">Option 3</h2>
            <p className="text-gray-700">Description for option 3.</p>
            <div className="mt-2 rounded-md overflow-hidden">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Option 3 Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video3;
