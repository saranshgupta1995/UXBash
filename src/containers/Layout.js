import React from 'react';
import Styles from './Layout.module.scss';

const Layout = ()=>{
    console.log(Styles);
    return <p className={Styles.pika}>pikachu</p>
};

export default Layout;