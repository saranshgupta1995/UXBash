import React from 'react';
import Styles from './Layout.module.scss';
import Header from '../../components/Header/Header';

import { connect } from "react-redux";
import { openAC } from '../../store/actions';

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
            <p onClick={onOutSideClick} className={Styles.pika}>pika</p>
            <Header></Header>
        </React.Fragment>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);