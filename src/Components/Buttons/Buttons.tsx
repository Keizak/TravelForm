import React from 'react';
import style from "./css.module.css";
import {
    ChangeInputErrorAC,
    Page1AC,
    Page2AC,
    Page3AC,
    Page4AC,
    Page5AC,
    Page6AC,
    Page7AC,
    Page8AC,
    StateType
} from "../../Redux/Contract-Reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {useHistory} from "react-router-dom";


function isValidDate(str: string) {
    console.log(str)
    const regex = /\"[2][0][2][0-9]\-[0-1][0-9]\-[0-3][0-9]\"/;
    if (!regex.test(str)) return console.log("Проебался на регулярке");
    const m = parseInt(str.slice(6, 8))
    const d = parseInt(str.slice(9, 11))
    const y = parseInt(str.slice(1, 5))
    if (m < 1 || m > 12) return console.log("Проебался на месяце", m);
    if (m == 2) {
        var days = ((y % 4) == 0) ? 29 : 28;
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        var days = 30;
    } else {
        var days = 31;
    }
    if (d >= 1 && d <= days) return console.log("валид")
    else return console.log("Проебался на дне");
}

type ButtonsPropsType =
    {}
export const Buttons = (props: ButtonsPropsType) => {
    let history = useHistory();
    const state = useSelector<AppRootStateType, StateType>(state => state.ContractPage)
    const dispatch = useDispatch()
    const currentPage = useSelector<AppRootStateType, number>(state => state.ContractPage.currentpage)


    const handleClick = () => {
        const reg = /\"[\+\d][\d\(\)\-]{7,14}\d\"/
        const value = state.contract.number
        console.log(value)
        if (reg.test(value))
        {
            dispatch(ChangeInputErrorAC(false))
            history.push("/Сompleted");
        }
        else dispatch(ChangeInputErrorAC(true))
    }
    const Page1 = () => {
        dispatch(Page1AC())
    }
    const Page2 = () => {
        let value = state.contract.cityStart
        if (value.length < 5) {
            dispatch(ChangeInputErrorAC(true))
        } else {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page2AC())
            console.log(state.contract)
        }
    }
    const Page3 = () => {
        let value = state.contract.cityFinish
        if (value.length < 5) {
            dispatch(ChangeInputErrorAC(true))
        } else {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page3AC())
        }
    }
    const Page4 = () => {
        let regDate = /\"[2][0][2][0-9]\-[0-1][0-9]\-[0-3][0-9]\"/
        let value = state.contract.dateStart
        if (regDate.test(value)) {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page4AC())
        } else {
            dispatch(ChangeInputErrorAC(true))
        }
    }

    const Page5 = () => {
        let regDate = /\"[2][0][2][0-9]\-[0-1][0-9]\-[0-3][0-9]\"/
        let value = state.contract.dateFinish
        if (regDate.test(value)) {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page5AC())
        } else {
            dispatch(ChangeInputErrorAC(true))
        }
    }
    const Page6 = () => {
        let value = state.contract.adults
        if (value === "\"0\"" || value === "") {
            dispatch(ChangeInputErrorAC(true))
        } else {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page6AC())
        }
    }
    const Page7 = () => {
        if (window.localStorage.Children === "true")
        {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page7AC())
        }
       else{
            dispatch(ChangeInputErrorAC(true))
        }

    }
    const Page8 = () => {
        if (window.localStorage.Hotel === "true")
        {
            dispatch(ChangeInputErrorAC(false))
            dispatch(Page8AC())
        }
        else{
            dispatch(ChangeInputErrorAC(true))
        }
    }
    let nextClick = () => {
    }
    let backClick = () => {
    }
    if (currentPage === 1) {
        nextClick = Page2
        backClick = Page1
    } else if (currentPage === 2) {
        nextClick = Page3
        backClick = Page1
    } else if (currentPage === 3) {
        nextClick = Page4
        backClick = Page2
    } else if (currentPage === 4) {
        nextClick = Page5
        backClick = Page3
    } else if (currentPage === 5) {
        nextClick = Page6
        backClick = Page4
    } else if (currentPage === 6) {
        nextClick = Page7
        backClick = Page5
    } else if (currentPage === 7) {
        nextClick = Page8
        backClick = Page6
    } else if (currentPage === 8) {
        nextClick = handleClick
        backClick = Page7
    }
    let OnKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.charCode === 13) {
            nextClick();
        }
    }


    return <div className={style.Buttons}>
        <button onClick={backClick} className={style.backclick}>
            ←
        </button>
        {currentPage === 8
            ? <button onClick={nextClick} className={style.nextclick}>Отправить</button>
            : <button onClick={nextClick} onKeyPress={OnKey}
                      className={style.nextclick}>Далее
            </button>
        }


        <span className={style.text}>Или нажмите Enter</span>
    </div>
}








