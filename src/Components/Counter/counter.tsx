import React from 'react';
import style from "./css.module.css";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";

export type CounterPropsType = {
}
export const Counter = (props: CounterPropsType) => {
    const value = useSelector<AppRootStateType,number>(state => state.ContractPage.valueofCounter)
    return <div className={style.Counter}>
        <div className={style.Progressbar}>
            <CircularProgressbar value={value}
                                 strokeWidth={5}
                                 text={`${value}%`}
                                 styles={buildStyles({
                pathColor: `#ffdd30`,
                textColor: '#ffe16b',
                backgroundColor: '#faf273',
                textSize: "1.4rem",
            })}/></div>
        <div className={style.Exit}><span>
                <NavLink to={"/"} className={style.Link}>
                    ×</NavLink>
            </span></div>
    </div>
}







