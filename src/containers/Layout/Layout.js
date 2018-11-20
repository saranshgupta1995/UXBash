import React from 'react';
import Styles from './Layout.module.scss';
import Header from '../../components/Header/Header';

const Layout = () => {
    console.log(Styles);
    return (
        <React.Fragment>
            <p className={Styles.pika}>pika</p>
            <Header></Header>
        </React.Fragment>
    )
};

export default Layout;