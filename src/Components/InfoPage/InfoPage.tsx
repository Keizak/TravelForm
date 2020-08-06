import React from 'react';
import style from "./css.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Page1AC, StateType} from "../../Redux/Contract-Reduser";
import {AppRootStateType} from "../../Redux/Redux-Store";

export const InfoPage = () => {
    localStorage.clear();
    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, StateType>(state => state.ContractPage)
    const GoClick = () => {
        dispatch(Page1AC())
    }
    return <div className={style.Main}>
        <div className={style.Cover}>
            <div className={style.Container}>
                <div className={style.Header}>Антур</div>
                <div className={style.Body}>
                    <span className={style.firstText}>МЕЖДУНАРОДНЫЕ АВИАПЕРЕЛЕТЫ ПО САМЫМ ВЫГОДНЫМ ЦЕНАМ</span>
                     <span className={style.secondaryText}>Ответьте на <span className={style.yellow}>7 вопросов</span></span>
                     <span className={style.thirdText}>И ПОЛУЧИТЕ РАСЧЕТ СТОИМОСТИ ВАШЕГО ПЕРЕЛЕТА СО СКИДКОЙ ДО 30%</span>
                    <NavLink to={"/Contract"} className={style.Button}>
                        <button onClick={GoClick}>Ответить на вопросы</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
}






