import React from 'react';
import Styles from './Layout.module.scss';
import { connect } from "react-redux";
import { openAC } from '../../store/actions';
import Footer from '../../components/Footer/Footer';
import BackgroundCanvas from '../../UIElements/BackgroundCanves/BackgroundCanvas';
import Content from '../Content/Content';
import Header from '../../containers/Header/Header';

const mapStateToProps = state => {
    return { gameIndex: state.SocialButton.gameIndex };
};

const mapDispatchToProps = dispatch => {
    return {
        onOutSideClick: () => {
            dispatch(openAC());
        }
    };
};

const Layout = ({ gameIndex }) => {
    return (
        <React.Fragment>
            <BackgroundCanvas></BackgroundCanvas>
            <Header gameIndex={gameIndex}></Header>
            <Content></Content>
            {!gameIndex ? <Footer></Footer> : null}
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);