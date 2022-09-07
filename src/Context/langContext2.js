import { createContext,useReducer } from "react";

export const langContext2=createContext()


const initialState={english:true}
const themeReducer=(state,action)=>{
switch (action.type){
    case "lang":
    return {english:!state.english}
    default:
        return state;
}}

export const langProvider=(props)=>{
    const [state,dispatch]=useReducer(langReducer,initialState);
    return(
        <langContext2.Provider value={{state,dispatch}}>{props.children}</langContext2.Provider>
    )
}