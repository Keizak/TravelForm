import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {InfoPage} from "./Components/InfoPage/InfoPage";
import {Route} from "react-router-dom";
import {Contract} from "./Components/Contract/Contract";
import {Finish} from "./Components/Finish/Finish";

export type AppPropsType = {
}
function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <Route exact path={"/"} render={() => <InfoPage/>}/>
            <Route exact path={"/Contract"} render={() => <Contract/>}/>
            <Route exact path={"/Сompleted"} render={() => <Finish/>}/>
        </BrowserRouter>
    )
}

export default App;
