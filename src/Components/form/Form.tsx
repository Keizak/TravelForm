import React, {ChangeEvent, useState} from 'react';
import style from "./css.module.css"
import {AppRootStateType} from "../../Redux/Redux-Store";
import {useDispatch, useSelector} from "react-redux";
import {ChangeInputErrorAC, ChangeValueAC} from "../../Redux/Contract-Reduser";
import {useLocalStorage} from "../../hooks/LocalStorage";

type FormPropsType = {}


export const Form = (props: FormPropsType) => {
    let newpostElement: any = React.createRef();
    const dispatch = useDispatch()
    const [error, setError] = useState<boolean>(false)
    const inputError = useSelector<AppRootStateType, boolean>(state => state.ContractPage.inputError)
    const sensor = useSelector<AppRootStateType, string>(state => state.ContractPage.sensor)
    const title = useSelector<AppRootStateType, string>(state => state.ContractPage.title)
    const example = useSelector<AppRootStateType, string>(state => state.ContractPage.example)
    const [value1page, setValue1] = useLocalStorage("CityStart", "")
    const [value2page, setValue2] = useLocalStorage("CityFinish", "")
    const [value3page, setValue3] = useLocalStorage("DateStart", "")
    const [value4page, setValue4] = useLocalStorage("DateFinish", "")
    const [value5page, setValue5] = useLocalStorage("Adults", "")
    const [value6page, setValue6] = useLocalStorage("Children", false)
    const [value7page, setValue7] = useLocalStorage("Hotel", false)
    const [value8page, setValue8] = useLocalStorage("Number", "")
    const [children0, setChildren0] = useLocalStorage("NoneChildren", false)
    const [children1, setChildren1] = useLocalStorage("Children1", false)
    const [children2, setChildren2] = useLocalStorage("Children2", false)
    const [children3, setChildren3] = useLocalStorage("Children3", false)
    const [children4, setChildren4] = useLocalStorage("Children4", false)
    const [children5, setChildren5] = useLocalStorage("Children5", false)
    const [children6, setChildren6] = useLocalStorage("Children6", false)
    const [children7, setChildren7] = useLocalStorage("Children7", false)
    const [hotelValueYes, setHotelValueYes] = useLocalStorage("HotelYes", false)
    const [hotelValueNo, setHotelValueNo] = useLocalStorage("HotelNo", false)

    const changeHandler = (event: any) => {
        switch (event.target.name) {
            case "Page1": {
                let a = parseInt(newpostElement.current.value.slice(-1))
                if (!isNaN(a)) {
                    setError(true)
                } else {
                    setError(false)
                    setValue1(newpostElement.current.value)
                    dispatch(ChangeValueAC(window.localStorage.CityStart, "1"))
                }
                return

            }
            case "Page2": {
                let a = parseInt(newpostElement.current.value.slice(-1))
                if (!isNaN(a)) {
                    setError(true)
                } else {
                    setError(false)
                    setValue2(newpostElement.current.value)
                    dispatch(ChangeValueAC(window.localStorage.CityFinish, "2"))
                }
                return
            }
            case "Page3": {
                setError(false)
                setValue3(newpostElement.current.value)
                dispatch(ChangeValueAC(window.localStorage.DateStart, "3"))
                return
            }
            case "Page4": {
                setError(false)
                setValue4(newpostElement.current.value)
                dispatch(ChangeValueAC(window.localStorage.DateFinish, "4"))
                return
            }
            case "Page5": {
                let value = Number(newpostElement.current.value)
                console.log(value)
                if (value <= 10) {
                    setError(false)
                    setValue5(newpostElement.current.value)
                    dispatch(ChangeValueAC(window.localStorage.Adults, "5"))
                } else setError(true)

                return
            }
            case "Page8": {
                let numberSymbols = /[\d\(\)\-\s]/
                let currentValue = newpostElement.current.value.slice(-1)
                if (!numberSymbols.test(currentValue)){
                    setError(true)
                    if (newpostElement.current.value === ""){
                        setError(false)
                        setValue8(newpostElement.current.value)
                        dispatch(ChangeValueAC(window.localStorage.Number, "8"))
                    }
                } else {
                    setError(false)
                    setValue8(newpostElement.current.value)
                    dispatch(ChangeValueAC(window.localStorage.Number, "8"))
                }
                return
            }
        }

    }
    const changeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "0": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.NoneChildren === "true"){
                        setChildren0(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren0(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return

            }
            case "1": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children1 === "true"){
                    setChildren1(event.currentTarget.checked)
                    setValue6(false)
                    dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren1(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"2": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children2 === "true"){
                        setChildren2(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren2(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"3": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children3 === "true"){
                        setChildren3(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren3(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"4": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children4 === "true"){
                        setChildren4(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren4(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"5": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children5 === "true"){
                        setChildren5(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren5(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"6": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children6 === "true"){
                        setChildren6(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren6(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"7": {
                if (window.localStorage.Children === "true") {
                    if (window.localStorage.Children7 === "true"){
                        setChildren7(event.currentTarget.checked)
                        setValue6(false)
                        dispatch(ChangeValueAC("","6"))
                    }
                    else return
                }
                else {
                    setChildren7(event.currentTarget.checked)
                    setValue6(true)
                    dispatch(ChangeValueAC(event.target.name,"6"))
                }
                return
            }
            case"yes": {
                if (window.localStorage.Hotel === "true") {
                    if (window.localStorage.HotelYes === "true"){
                        setHotelValueYes(event.currentTarget.checked)
                        setValue7(false)
                        dispatch(ChangeValueAC("","7"))
                    }
                    else return
                }
                else {
                    setHotelValueYes(event.currentTarget.checked)
                    setValue7(true)
                    dispatch(ChangeValueAC(event.target.name,"7"))
                }
                return
            }
            case"no": {
                if (window.localStorage.Hotel === "true") {
                    if (window.localStorage.HotelNo === "true"){
                        setHotelValueNo(event.currentTarget.checked)
                        setValue7(false)
                        dispatch(ChangeValueAC("","7"))
                    }
                    else return
                }
                else {
                    setHotelValueNo(event.currentTarget.checked)
                    setValue7(true)
                    dispatch(ChangeValueAC(event.target.name,"7"))
                }
                return
            }
            default:
                return console.log("loh")
        }

    }


    let localsensor
    let Page1 = <div>
        <div className={style.Form}>
            <div className={style.first_block}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page1" type="text" onChange={changeHandler} value={value1page}/>
                {inputError ? <span className={style.error}>Неверный формат(от 3 до 30 символов)</span> : <></>}
            </div>
        </div>
    </div>
    let Page2 = <div>
        <div className={style.Form}>
            <div className={style.first_block}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page2" type="text" onChange={changeHandler} value={value2page}/>
                {inputError ? <span className={style.error}>Неверный формат(от 3 до 30 символов)</span> : <></>}
            </div>
        </div>
    </div>
    let Page3 = <div>
        <div className={style.Form}>
            <div className={style.first_block}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page3" type="date" onChange={changeHandler} value={value3page}/>
                {inputError ? <span className={style.error}>Неверный формат(2020 - 2030)</span> : <></>}
            </div>
        </div>
    </div>
    let Page4 = <div>
        <div className={style.Form}>
            <div className={style.first_block4}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page4" type="date" onChange={changeHandler} value={value4page}/>
                {inputError ? <span className={style.error}>Неверный формат(2020 - 2030)</span> : <></>}
            </div>
        </div>
    </div>
    let Page5 = <div>
        <div className={style.Form}>
            <div className={style.first_block}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page5" type="number" onChange={changeHandler} min="0" max="10"
                       value={value5page}/>
                {inputError ? <span className={style.error}>Неверный формат(от 1 до 10)</span> : <></>}
            </div>
        </div>
    </div>
    let Page6 = <div className={style.Form}>

        <div className={style.first_block6}>
            <h3>{title}</h3>
        </div>
        <div className={style.second_block6}>
            <span className={style.example}>{example}</span>
            <div className={style.page6}>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="0" type="checkbox" checked={children0}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>Лечу без детей</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="1" type="checkbox" checked={children1}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>1 ребенок</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="2" type="checkbox" checked={children2}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>2 ребенка</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="3" type="checkbox" checked={children3}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>3 ребенка</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="4" type="checkbox" checked={children4}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>4 ребенка</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="5" type="checkbox" checked={children5}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>5 детей</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="6" type="checkbox" checked={children6}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>6 детей</div>
                </div>
                <div className={style.checkbox}>
                    <div className={style.first}><input name="7" type="checkbox" checked={children7}
                                                        onChange={changeCheckbox}/></div>
                    <div className={style.second}>Больше 6-ти детей</div>

                </div>
                {inputError ? <span className={style.error}>Некорректный ввод</span> : <></>}
            </div>
        </div>
    </div>
    let Page7 = <div className={style.Form}>
        <div className={style.first_block7}>
            <h3>{title}</h3>
        </div>
        <div className={style.second_block7}>
            <span className={style.example}>{example}</span>
            <div className={style.page7}>
                <div className={style.checkbox1}>
                    <div className={style.first7}><input name="yes" type="checkbox" checked={hotelValueYes}
                                                         onChange={changeCheckbox}/></div>
                    <div className={style.second7}>Да</div>
                </div>
                <div className={style.checkbox1}>
                    <div className={style.first7}><input name="no" type="checkbox" checked={hotelValueNo}
                                                         onChange={changeCheckbox}/></div>
                    <div className={style.second7}>Нет</div>
                </div>
            </div>
        </div>
        {inputError ? <span className={style.error7}>Некорректный ввод</span> : <></>}
    </div>
    let Page8 = <div>
        <div className={style.Form}>
            <div className={style.first_block8}>
                <h3>{title}</h3>
            </div>
            <div className={style.second_block8}>
                <span className={style.example}>{example}</span>
                <input ref={newpostElement} name="Page8" type="text" onChange={changeHandler} value={value8page}/>
                {inputError ? <span className={style.error}>Неверный формат</span> : <></>}
            </div>
        </div>
    </div>

    if (sensor === "1") localsensor = Page1
    else if (sensor === "2") localsensor = Page2
    else if (sensor === "3") localsensor = Page3
    else if (sensor === "4") localsensor = Page4
    else if (sensor === "5") localsensor = Page5
    else if (sensor === "6") localsensor = Page6
    else if (sensor === "7") localsensor = Page7
    else if (sensor === "8") localsensor = Page8

    return <div>
        {localsensor}
    </div>

}









