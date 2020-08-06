import React from "react";

let Page1 = {
    title: "Укажите город вылета.",
    example: "Например,Москва"
}
let Page2 = {
    title: "Укажите город прилета.",
    example: "Например,Бангок"
}
let Page3 = {
    title: "Укажите дату вылета.",
    example: "Например: 01.04.19",
}
let Page4 = {
    title: "Дата вылета обратно. Если Вам не нужен обратный билет, пропустите вопрос.",
    example: "Например: 13.04.19",
}
let Page5 = {
    title: "Укажите количество взрослых.",
    example: "Количество взрослых",
}
let Page6 = {
    title: "Количество детей.",
    example: "",
}
let Page7 = {
    title: "Нужен отель ?",
    example: "",
}
let Page8 = {
    title: "Готово! Укажите, пожалуйста, Ваш номер WhatsApp с кодом страны. На него мы вышлем стоимость Вашего перелёта.\n" +
        "(например, +7 (956) 001-33-21)",
    example: "WhatsApp",
}
let InizialitionState =
    {
        title: "Укажите город вылета",
        example: "Например,Москва",
        valueofCounter: 0,
        sensor: "1",
        currentpage: 1,
        contract: {
            cityStart: "",
            cityFinish: "",
            dateStart: "",
            dateFinish: "",
            adults: "",
            children: "",
            Hotel: "",
            number: "",
        },
        hotelvalue: {yes: false, no: false},
        childrenvalue: {
            none: false,
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false,
            c6: false,
            c7: false
        },
        inputError: false
    }
export type ContractType = {
    cityStart: string
    cityFinish: string
    dateStart: string
    dateFinish: string
    adults: string
    children: string
    Hotel: string
    number: string
}
export type StateType = {
    title: string
    example: string
    valueofCounter: number
    sensor: string
    currentpage: number
    contract: ContractType
    hotelvalue: { yes: boolean, no: boolean }
    childrenvalue: {
        none: boolean,
        c1: boolean,
        c2: boolean,
        c3: boolean,
        c4: boolean,
        c5: boolean,
        c6: boolean,
        c7: boolean
    }
    inputError: boolean

}
type ActionType = Page1ActionType | Page2ActionType |
    Page3ActionType | Page4ActionType | Page5ActionType |
    Page6ActionType | Page7ActionType | Page8ActionType |
    ChangeValueActionType | ChangeInputErrorActionType

type Page1ActionType = {
    type: "1-PAGE"
}
type Page2ActionType = {
    type: "2-PAGE"
}
type Page3ActionType = {
    type: "3-PAGE"
}
type Page4ActionType = {
    type: "4-PAGE"
}
type Page5ActionType = {
    type: "5-PAGE"
}
type Page6ActionType = {
    type: "6-PAGE"
}
type Page7ActionType = {
    type: "7-PAGE"
}
type Page8ActionType = {
    type: "8-PAGE"
}
type ChangeValueActionType = {
    type: "CHANGE-VALUE"
    value: string
    page: string
}
type ChangeInputErrorActionType = {
    type: "CHANGE-INPUT-ERROR"
    value: boolean
}

export function Page1AC(): Page1ActionType {
    return {type: "1-PAGE"}
}

export function Page2AC(): Page2ActionType {
    return {type: "2-PAGE"}
}

export function Page3AC(): Page3ActionType {
    return {type: "3-PAGE"}
}

export function Page4AC(): Page4ActionType {
    return {type: "4-PAGE"}
}

export function Page5AC(): Page5ActionType {
    return {type: "5-PAGE"}
}

export function Page6AC(): Page6ActionType {
    return {type: "6-PAGE"}
}

export function Page7AC(): Page7ActionType {
    return {type: "7-PAGE"}
}

export function Page8AC(): Page8ActionType {
    return {type: "8-PAGE"}
}

export function ChangeInputErrorAC(value: boolean): ChangeInputErrorActionType {
    return {type: "CHANGE-INPUT-ERROR", value}
}

export function ChangeValueAC(value: string, page: string): ChangeValueActionType {
    return {type: "CHANGE-VALUE", value, page}
}


export function ContractReduser(state: StateType = InizialitionState, action: ActionType) {
    switch (action.type) {
        case "1-PAGE": {
            let copyState = {
                ...state,
                title: Page1.title,
                example: Page1.example,
                valueofCounter: 0,
                sensor: "1",
                currentpage: 1
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "2-PAGE": {
            let copyState = {
                ...state,
                title: Page2.title,
                example: Page2.example
                , valueofCounter: 11,
                sensor: "2",
                currentpage: 2
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "3-PAGE": {
            let copyState = {
                ...state,
                title: Page3.title,
                example: Page3.example,
                valueofCounter: 22,
                sensor: "3",
                currentpage: 3
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "4-PAGE": {
            let copyState = {
                ...state,
                title: Page4.title,
                example: Page4.example
                , valueofCounter: 33,
                sensor: "4",
                currentpage: 4
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "5-PAGE": {
            let copyState = {
                ...state,
                title: Page5.title,
                example: Page5.example
                , valueofCounter: 55,
                sensor: "5",
                currentpage: 5
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "6-PAGE": {
            let copyState = {
                ...state,
                title: Page6.title,
                example: Page6.example
                , valueofCounter: 66,
                sensor: "6",
                currentpage: 6
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "7-PAGE": {
            let copyState = {
                ...state,
                title: Page7.title,
                example: Page7.example
                , valueofCounter: 77,
                sensor: "7",
                currentpage: 7
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "8-PAGE": {
            let copyState = {
                ...state,
                title: Page8.title,
                example: Page8.example
                , valueofCounter: 88,
                sensor: "8",
                currentpage: 8
            }
            copyState.contract = {...state.contract}
            return copyState
        }
        case "CHANGE-VALUE": {
            switch (action.page) {
                case "1": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, cityStart: action.value}
                    return copyState
                }
                case "2": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, cityFinish: action.value}
                    return copyState
                }
                case "3": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, dateStart: action.value}
                    return copyState
                }
                case "4": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, dateFinish: action.value}
                    return copyState
                }
                case "5": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, adults: action.value}
                    return copyState
                }
                case "6": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, children: action.value}
                    return copyState
                }
                case "7": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, Hotel: action.value}
                    return copyState
                }
                case "8": {
                    let copyState = {...state}
                    copyState.contract = {...state.contract, number: action.value}
                    return copyState
                }
                default:
                    return state
            }
        }
        case "CHANGE-INPUT-ERROR":{
            let copyState = {...state, inputError: action.value}
            return copyState
        }

        default:
            return state
    }
}


