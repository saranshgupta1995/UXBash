import React from 'react';
import Styles from './Header.module.scss';
import Menu from '../../components/Menu/Menu';
import GameController from '../../components/GameController/GameController';

const Header = ({ gameIndex }) => (
    <React.Fragment>
        <header
            className={Styles.Header + ' ' + (!gameIndex ? '' : Styles.OffScreen)}>
            <div className="logo">Pika</div>
            <Menu></Menu>
        </header>
        <header
            className={Styles.Header + ' ' + (gameIndex ? '' : Styles.OffScreen)}>
            <div className="logo">Pika</div>
            <GameController></GameController>
        </header>
    </React.Fragment>
)

export default Header;