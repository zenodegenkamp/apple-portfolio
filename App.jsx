import React, { useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import Animate from 'react-smooth';
import mijnFilm from './src/mijnFilm.mp4';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function PlayerComponent() {


   return (
      <div className='video__container'>

                  {/* <Spline
                     scene="https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode"
                     className='spline'
                  /> */}
            <iframe
      src='https://my.spline.design/test-c2a2ac943236cb867fee93ab947c05c6/'
      frameBorder='0'
      width='100%'
      height='100%'
    />

      </div>
   );
   
}

