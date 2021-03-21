import React from "react";
import {Button, CssBaseline} from "@material-ui/core";
import {hot} from "react-hot-loader/root";

import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return(
        <React.StrictMode>
            <CssBaseline/>
            <div className="App">
                <NavBar/>
                <div className="">
                    <h1> Hi, my name is Nguyen Quoc Huy. </h1>
                    <h3> I am a web and C++ developer from Ho Chi Minh City, Viet Nam. </h3>
                    <h3> I have studied Infomation Technoly at Vaasa University of Applied Sciences (VAMK), 
                        Vaasa, Finland </h3>
                    <Button color="primary"> save </Button>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default hot(App);