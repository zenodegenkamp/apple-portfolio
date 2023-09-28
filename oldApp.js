import React, { useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import Animate from 'react-smooth';
import mijnFilm from './src/mijnFilm.mp4';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function PlayerComponent() {

   const playerRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isFinished, setIsFinished] = useState(false);

   const isTabletOrPhone = useMediaQuery('(max-width:1200px)')
   
   
   useEffect(() => {
      if (isTabletOrPhone){
         setIsFinished(true)
      }
    }, []);
   
   

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
                     {isPlaying ? (
                        <ReactPlayer
                           className="react-player"
                           width="100%"
                           height="100%"
                           ref={playerRef}
                           url={mijnFilm}
                           controls={false}
                           playing={true}
                           onEnded={handleVideoEnded}
                        />
                     ) : (
                        <>
                           <Spline
                              className="apple-spline"
                              scene="https://prod.spline.design/qnzLCmcBfHFLcUyR/scene.splinecode"
                           />
                           <div className='button'>
                              <button onClick={startMovie}>Enter the 3D experience</button>
                           </div>
                        </>
                     )}
                  </>
               )}

      </div>
   );
   
}

