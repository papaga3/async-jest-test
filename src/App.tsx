import React from "react";
import {test} from "./controller/testController";

// import {hot} from "react-hot-loader/root";

const App = () => {
    const handleSubmit = () => {
        test().then(res => console.log(res)).catch(err => console.error());
    }
    return(
        <div>
            <form onSubmit={handleSubmit} id="form">
            </form>
            <button type="submit" form="form" value="Submit">Submit</button> 
        </div>
    );
}

export default App;