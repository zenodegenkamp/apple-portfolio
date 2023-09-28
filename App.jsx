
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Spline from '@splinetool/react-spline';
import Animate from 'react-smooth';

// a946acc9-cada-4c6f-8fb9-8086cad5436a


const VIDEO_PATH = './src/mijnFilm.mp4';

export default function PlayerComponent() {

   const playerRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isFinished, setIsFinished] = useState(false);

   function startMovie(){
      setIsPlaying((oldValue) => !oldValue)

   }

   function onMouseDown(e) {
      if (e.target.name === 'click') {
        startMovie()
      }
    }

   const handleVideoEnded = () => {
      setIsFinished(true)
      if (playerRef.current) {
       
           playerRef.current.parentNode.removeChild(playerRef.current);
      }
    }

   return (
      <div className='video__container'>
            {isPlaying ? (
                <ReactPlayer
                         className="react-player"
                         width="100%"
                         height="100%"
                         ref={playerRef}
                         url={VIDEO_PATH}
                         controls={false}
                         playing={true}
                         onEnded={handleVideoEnded}
                      />
            ) : (
               <>
                   <Spline className="apple-spline" onMouseDown={onMouseDown} scene="https://prod.spline.design/qnzLCmcBfHFLcUyR/scene.splinecode" 
               
               />
               <div className='button'>
      <button onClick={startMovie}>Enter the 3D experience</button> {/* Inhoud toegevoegd aan de knop */}
    </div>
               </>
              
            )}
            <Animate
               from={{ opacity: 0 }}
               to={{ opacity: 1 }}
               attributeName="opacity"
               duration={100} // Duur van de animatie in milliseconden
               delay={100} // Verliestijd voordat de animatie wordt gestart
            >
               {({ opacity }) => (
                  <Spline
                    scene="https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode"
                     className='spline'
                     style={{ display: isFinished ? 'block' : 'none', opacity }}
                  />
               )}
            </Animate>
         </div>
 
   );
}


// import React, { useRef, useState } from 'react';
// import ReactPlayer from 'react-player';
// import Spline from '@splinetool/react-spline';
// import Animate from 'react-smooth';





// const VIDEO_PATH = './src/mijnFilm.mp4';

// export default function PlayerComponent() {


//    const playerRef = useRef(null);
//    const [isPlaying, setIsPlaying] = useState(false);
//    const [isFinished, setIsFinished] = useState(false);

//    function onMouseDown(e) {

//         console.log('I have been clicked!');
//         setIsPlaying(true);
      
//     }


//     setTimeout(function() {
//       setIsPlaying(true);
//     }, 5000);

//    const handleVideoEnded = () => {
//       setIsFinished(true)
//       if (playerRef.current) {
       
//            playerRef.current.parentNode.removeChild(playerRef.current);
//       }
//     }

//    return (
//       <div className='video__container'>
//             {isPlaying ? (
//                 <ReactPlayer
//                          className="react-player"
//                          width="100%"
//                          height="100%"
//                          ref={playerRef}
//                          url={VIDEO_PATH}
//                          controls={false}
//                          playing={true}
//                          onEnded={handleVideoEnded}
//                       />
//             ) : (
          
//                <Spline onMouseDown={onMouseDown} scene="https://prod.spline.design/LvUKNFsCFaF7eDng/scene.splinecode" />
//             )}
//             <Animate
//                from={{ opacity: 0 }}
//                to={{ opacity: 1 }}
//                attributeName="opacity"
//                duration={100} 
//                delay={100} 
//             >
//                {({ opacity }) => (
//                   <Spline
//                     scene="https://prod.spline.design/wDnh46uuu0SbxmgA/scene.splinecode"
//                      className='spline'
//                      style={{ display: isFinished ? 'block' : 'none', opacity }}
//                   />
//                )}
//             </Animate>
//          </div>
 
//    );
// }

