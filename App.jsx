
import React, { useState, useEffect } from 'react';
import spinner from './src/images/spinner.gif'
import { TypeAnimation } from 'react-type-animation';

export default function PlayerComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setIsLoaded(true);
  };

  useEffect(() => {
    const video = document.querySelector('video');
    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className='video__container'>
      {isVideoPlaying && (
        <video
          src="./src/mijnFilm.mp4"
          autoPlay
        />
      )}
      {isLoaded && (
        <iframe
          src='https://my.spline.design/test-c2a2ac943236cb867fee93ab947c05c6/'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      )}
    </div>
  );
}




// import React, { useState } from 'react';
// import spinner from './src/images/spinner.gif'
// import { TypeAnimation } from 'react-type-animation';

// export default function PlayerComponent() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const handleIframeLoad = () => {
//     setIsLoaded(true);
//   };

//   return (
//     <div className='video__container'>
//       {!isLoaded && (
//         <div className='loading'>
          
//           <h1>Loading the Magic 3D world...</h1>
//         </div>
//       )}
//       <iframe
//         src='https://my.spline.design/test-c2a2ac943236cb867fee93ab947c05c6/'
//         frameBorder='0'
//         width='100%'
//         height='100%'
//         onLoad={handleIframeLoad}
//       />
//     </div>
//   );
// }

