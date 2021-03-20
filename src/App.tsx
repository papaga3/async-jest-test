import React from "react";
import {hot} from "react-hot-loader/root";
import "./App.css";

const App = () => {
    let name: string = "demo 2";
    return(
        <div className="App">
            <h1> Hello World! {name} </h1>
            <h2> Nova Lina </h2>
        </div>
    );
}

export default hot(App);