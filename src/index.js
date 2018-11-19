import React from "react";
import ReactDOM from "react-dom";
import Layout from './containers/Layout';

const Index = () => {
    return <div>Hello React!!
        <Layout></Layout>
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
