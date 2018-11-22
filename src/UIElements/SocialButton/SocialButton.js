import React, { Component } from 'react';
import Styles from './SocialButton.module.scss';
import { playAround, actSerious } from '../../store/actions/SocialButton';
import { connect } from 'react-redux';

class SocialButton extends Component {

    randomizeOpacity = () => {
        const buddies = document.getElementsByClassName('buddies')
        const limit = 40;

        for (let i = 0; i < buddies.length; i++) {
            buddies[i].style.opacity = Math.random() * 0.8;
            buddies[i].style.left = Math.random() * limit * [1, -1][~~(Math.random() * 2)] + 'px';
            buddies[i].style.top = Math.random() * limit * [1, -1][~~(Math.random() * 2)] + 'px';
        };
    }

    resetOpacity = () => {
        const buddies = document.getElementsByClassName('buddies')

        for (let i = 0; i < buddies.length; i++) {
            buddies[i].style.opacity = 0;
            buddies[i].style.left = 0 + 'px';
            buddies[i].style.top = 0 + 'px';
        };
    }

    initEvent = () => {
        const target = document.getElementsByClassName(Styles.SocialButton)[0];
        target.style.border = 'none';
        setTimeout(() => {
            target.style.border = '2px solid seashell'
        }, 60);
        (this.props.gameIndex?this.props.actSerious:this.props.playAround)();
    }


    render() {
        return <div onClick={this.initEvent} onMouseLeave={this.resetOpacity} onMouseEnter={this.randomizeOpacity} className={Styles.SocialButton}>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <div className="buddies"></div>
            <span>{!this.props.gameIndex ? 'Play Around' : 'Act Serious'}</span>
        </div>
    }

}

const matchDispatchToProps = dispatch => {
    return {
        playAround: () => {
            dispatch(playAround({ gameIndex: 1 }));
        },
        actSerious:()=>{
            dispatch(actSerious());
        }
    }
}

const matchStateToProps = state => {
    return {
        gameIndex: state.SocialButton.gameIndex
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(SocialButton);