import React, { Component } from 'react';
import Styles from './GameController.module.scss';
import { connect } from 'react-redux';
import { setSpacing, setThickness, setDrag, setEase } from '../../store/actions/BackgroundCanvas';

class GameController extends Component {

    setGameSpacing = (e) => {
        this.props.setSpacing(parseInt(e.target.value));
    }

    setGameThickness = (e) => {
        this.props.setThickness(parseInt(e.target.value));
    }

    setGameEase = (e) => {
        this.props.setEase(parseInt(e.target.value));
    }

    setGameDrag = (e) => {
        this.props.setDrag(parseInt(e.target.value));
    }

    render() {

        let gameData = [
            {
                type: 'number',
                value: this.props.gameSpacing,
                onChange: this.setGameSpacing
            },
            {
                type: 'number',
                value: this.props.gameThickness,
                onChange: this.setGameThickness
            },
            {
                type: 'number',
                value: this.props.gameEase,
                onChange: this.setGameEase
            },
            {
                type: 'number',
                value: this.props.gameDrag,
                onChange: this.setGameDrag
            }
        ]

        return <ul className={Styles.Menu}>
            {
                gameData.map((inp, i) => {
                    return <li key={i}><input {...inp} /></li>
                })
                /* <li>
                <input {...gameData[0]} />
            </li>
            <li><input {...gameData[1]} /></li>
            <li><input type="text" /></li>
            <li><input type="text" /></li> */
            }
        </ul>


    }

}

const mapStateToProps = (state) => {
    return {
        gameIndex: state.SocialButton.gameIndex,
        gameSpacing: state.BackgroundCanvas.spacing,
        gameThickness: state.BackgroundCanvas.thickness,
        gameDrag: state.BackgroundCanvas.drag,
        gameEase: state.BackgroundCanvas.ease
    }
}


const matchDispatchToProps = dispatch => {
    return {
        setSpacing: (spacing) => {
            dispatch(setSpacing({ spacing }));
        },
        setThickness: (thickness) => {
            dispatch(setThickness({ thickness }));
        },
        setDrag: (drag) => {
            dispatch(setDrag({ drag }));
        },
        setEase: (ease) => {
            dispatch(setEase({ ease }))
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(GameController);
