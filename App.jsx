import React, { useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import Animate from 'react-smooth';
import mijnFilm from './src/mijnFilm.mp4';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function PlayerComponent() {


   return (
      

      <iframe
      src='https://my.spline.design/test-c2a2ac943236cb867fee93ab947c05c6/'
      frameBorder='0'
      width='100%'
      height='100%'
    />


   );
   
}

// import React, { useEffect, useState } from 'react';


// export default function PlayerComponent() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       const viewer = document.createElement('spline-viewer');
//       viewer.setAttribute('hint', 'loading-anim');
//       viewer.setAttribute('url', 'https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode');
//       document.body.appendChild(viewer);

//       // Markeer het laden als voltooid
//       setLoading(false);
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div id="spline-viewer-container">
//       {loading ? <h1>Loading the magic world</h1> : null}
//     </div>
//   );
// }
