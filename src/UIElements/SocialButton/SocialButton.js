import React from 'react';
import Styles from './SocialButton.module.scss';

const SocialButton = (props) => {

    function randomizeOpacity() {
        const buddies = document.getElementsByClassName('buddies')
        const limit = 40;

        for (let i = 0; i < buddies.length; i++) {
            buddies[i].style.opacity = Math.random() * 0.8;
            buddies[i].style.left = Math.random() * limit * [1, -1][~~(Math.random() * 2)] + 'px';
            buddies[i].style.top = Math.random() * limit * [1, -1][~~(Math.random() * 2)] + 'px';
        };
    }

    function resetOpacity() {
        const buddies = document.getElementsByClassName('buddies')

        for (let i = 0; i < buddies.length; i++) {
            buddies[i].style.opacity = 0;
            buddies[i].style.left = 0 + 'px';
            buddies[i].style.top = 0 + 'px';
        };
    }

    function initEvent() {
        const target = document.getElementsByClassName(Styles.SocialButton)[0];
        target.style.border = 'none';
        setTimeout(() => {
            target.style.border = '2px solid seashell'
        }, 300);
    }

    return (

        <div onClick={initEvent} onMouseLeave={resetOpacity} onMouseEnter={randomizeOpacity} className={Styles.SocialButton}>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <span>Play around</span>
        </div>

    )
}


export default SocialButton;