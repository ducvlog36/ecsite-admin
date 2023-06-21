/* eslint-disable */
import { LOCAL_STORAGE_KEYS } from "src/constans/localStorage";

export const getJwtToken =()=>{
    localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)
}

export const setJwtToken =()=>[
    localStorage.setItem(LOCAL_STORAGE_KEYS.JWT_TOKEN,user)
]