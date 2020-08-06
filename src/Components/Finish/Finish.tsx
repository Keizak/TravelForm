import React, {useEffect, useState} from 'react';
import style from "../Contract/css.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {ContractType} from "../../Redux/Contract-Reduser";
import axios from "axios";

type FinishPropsType = {}
const instance = axios.create({
    baseURL: "/api/"
})
const token = "1140138695:AAH5rwc6R3azlPbawiWdf9RKzvqjjwzaDks"
export const Finish = (props: FinishPropsType) => {
    localStorage.clear();
    const contract = useSelector<AppRootStateType, ContractType>(state => state.ContractPage.contract)
    const [post, setPost] = useState(1)
    const rest = () => {
        setPost(+1)
    }
    useEffect(() => {
        instance.post('contract/', {...contract}).then((res) => {
            if (res.status === 201) {
                axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=688935605&text=
                !!!!!!!Новая заявка!!!!!!!                                                                                                                                                                                                                                                                                                                                                             
                Город отлета:  ${contract.cityStart}                                                                              
                Город прилета:  ${contract.cityFinish}                                                                              
                Дата отбытия:  ${contract.dateStart}                                                                                     
                Дата прибытия:  ${contract.dateFinish}                                                                              
                Количество взрослых:  ${contract.adults}                                                                              
                Количество Детей:  ${contract.children}                                                                              
                Отель:  ${contract.Hotel}                                                                                              
                Номер:  ${contract.number}`)
            }
        })
    }, [])
    return <div className={style.Main}>
        <div className={style.Container}>
        <h1><span className={style.finish}>Отправлено</span></h1>
        </div>
    </div>

}

// axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat-id=688935605&text=${contract}`)


