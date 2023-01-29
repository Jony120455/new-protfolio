import React from 'react';
import { useSpring, animated, config } from '@react-spring/web'

const Data = ({data}) => {
    const{id,image,title,gitHub,liveDemo}=data
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <animated.div className='data'  
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
        >
            <article
                     key={id} className='protfolio_item'>
                    <div className='protfolio_item-image'>
                        <img src={image} alt=""></img>
                    </div>
                    <h3>{title}</h3>
                     <div className='protfolio_item-cta'>
                        <a href={gitHub} className='btn' rel="noreferrer" target='_blank'>Github</a>
                        <a href={liveDemo} className='btn btn-primary'rel="noreferrer" target='_blank'>Live Demo</a>
                     </div>
                </article>
        </animated.div>
    );
};

export default Data;
