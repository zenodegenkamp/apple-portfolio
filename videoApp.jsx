import React, { useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import Animate from 'react-smooth';
import mijnFilm from './src/mijnFilm.mp4';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function PlayerComponent() {

   const playerRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(true);
   const [isFinished, setIsFinished] = useState(false);

   

   function startMovie() {
      setIsPlaying((oldValue) => !oldValue);
   }


   const handleVideoEnded = () => {
      setIsFinished(true);
      if (playerRef.current) {
         playerRef.current.parentNode.removeChild(playerRef.current);
      }
   };

   return (
      <div className='video__container'>
        
               {isFinished ? (
                  <Spline
                     scene="https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode"
                     className='spline'
                     style={{ display: isFinished ? 'block' : 'none' }}
                  />
               ) : (
                  <>
                   (
                        <ReactPlayer
                           className="react-player"
                           width="100%"
                           height="100%"
                           ref={playerRef}
                           url={mijnFilm}
                           controls={false}
                           playing={true}
                           autoPlay={true}
                           onEnded={handleVideoEnded}
                        />
                     ) 
                  </>
               )}

      </div>
   );
   
}

