import React from 'react';
import Styles from './Layout.module.scss';
import Header from '../../components/Header/Header';

import { connect } from "react-redux";
import { openAC } from '../../store/actions';
import Footer from '../../components/Footer/Footer';
import BackgroundCanvas from '../../components/BackgroundCanves/BackgroundCanvas';

const mapStateToProps = state => {
    return { account: state.account };
};

const mapDispatchToProps = dispatch => {
    return {
        onOutSideClick: () => {
            dispatch(openAC());
        }
    };
};

const Layout = ({onOutSideClick}) => {
    return (
        <React.Fragment>
            <BackgroundCanvas></BackgroundCanvas>
            <Header></Header>
            <Footer></Footer>
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);