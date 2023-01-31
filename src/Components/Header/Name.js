import React, { useState } from 'react';
import { motion, useAnimation } from "framer-motion"
const Name = ({children}) => {
    const rubbrr = useAnimation()
    const [palying, setPlaying] =useState(false)
        const drop = () =>{
            rubbrr.start({
                transform:[
                    "scale3d(1,1,1)",
                    "scale3d(1.4,.55,1)",
                    "scale3d(.75,1.5,1)",
                    "scale3d(1.5,.85,1)",
                    "scale3d(.9,1.05,1)",
                    "scale3d(1,1,1)",
                ],
                transition:{
                    times:[0,.4,.5,.7,.8,.9]
                }
            })
            setPlaying(true)
        }
  
   
   
    return (
        <div className='name'>
            <motion.h1 
            animate={rubbrr}

            onMouseOver={() => {
                if(!palying){
                    drop()
                }
            }}

            onAnimationComplete ={() => setPlaying(false)}
            
            >
                {
                    children
                }
            
            </motion.h1> 
        </div>
    );
};

export default Name;