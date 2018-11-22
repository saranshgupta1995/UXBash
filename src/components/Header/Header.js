import React from 'react';
import Styles from './Header.module.scss';

const Header = ({ gameIndex }) => (
    <header
        className={Styles.Header + ' ' + (!gameIndex ? '' : Styles.OffScreen)}>
        <div className="logo">Pika</div>
        {<ul className={Styles.Menu}>
            <li>Pika</li>
            <li>Pika Pika</li>
            <li>Pika Pi</li>
            <li>Pikachu</li>
        </ul>}
    </header>
)

export default Header;