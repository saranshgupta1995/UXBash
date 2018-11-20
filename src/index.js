import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Layout from './containers/Layout/Layout';
import store from './store';
import { Provider } from "react-redux";

const Index = () => {
    return <Provider store={store}>
            <Layout></Layout>
        </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
