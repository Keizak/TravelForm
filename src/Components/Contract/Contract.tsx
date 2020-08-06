import React from 'react';
import style from "./css.module.css";
import "react-circular-progressbar/dist/styles.css";
import {Buttons} from "../Buttons/Buttons";
import {Counter} from "../Counter/counter";
import {Form} from "../form/Form";
import {AppPropsType} from "../../App";


export const Contract = (props: AppPropsType) => {

    return <div className={style.Main}>
        <div className={style.Cover}>
            <div className={style.Container}>
                <Counter/>
                <Form/>
                <Buttons/>
            </div>
        </div>
    </div>
}







