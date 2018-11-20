import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Layout from './containers/Layout/Layout';


const Index = () => {
    return <div>
        <p>
            Hello React!!
        </p>
        <Layout></Layout>
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
