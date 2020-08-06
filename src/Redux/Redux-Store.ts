import {combineReducers, createStore,} from "redux";
import {ContractReduser} from "./Contract-Reduser";

let Redusers = combineReducers(
    {
        ContractPage:ContractReduser
    }
)

export const  store = createStore(Redusers)

export type AppRootStateType = ReturnType<typeof Redusers>

export default store;