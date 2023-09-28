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
        
         
                  <Spline
                     scene="https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode"
                     className='spline'
                  />

      </div>
   );
   
}

