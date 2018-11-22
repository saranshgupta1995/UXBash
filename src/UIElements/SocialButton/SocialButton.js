import React from 'react';
import Styles from './SocialButton.module.scss';

const SocialButton = (props) => {

    function randomizeOpacity() {
        const buddies=document.getElementsByClassName('buddies')
        const limit=40;

        for(let i=0;i<buddies.length;i++) {
            buddies[i].style.opacity = Math.random()*0.8;
            buddies[i].style.left = Math.random()*limit*[1,-1][~~(Math.random()*2)] + 'px';
            buddies[i].style.top = Math.random()*limit*[1,-1][~~(Math.random()*2)] + 'px';            
        };
    }

    return (

        <div onMouseEnter={randomizeOpacity} className={Styles.SocialButton}>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <span>Play around</span>
        </div>

    )
}


export default SocialButton;