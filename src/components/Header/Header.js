import React from 'react';
import Styles from './Header.module.scss';
import AccessControl from '../test';

const Header = (props) => (
    <header className={Styles.Header}>
        <div className="logo">Pika</div>
        <ul className={Styles.Menu}>
            <li>Pika</li>
            <li>Pika Pika</li>
            <li>Pika Pi</li>
            <li>Pikachu</li>
        </ul>
    </header>
)

export default Header;