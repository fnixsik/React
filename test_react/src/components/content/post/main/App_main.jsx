import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import i from "./main.module.css"

const Main=() =>{
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = (cash) => {
        dispatch ({type: "ADD_pay", payload: cash})
    }

    const getCash = (cash) => {
        dispatch ({type: "GET_pay", payload: cash})
    }

    console.log(cash)

    return(  
        <div className = {i.text}>
            <p>Главная Страница </p> 
            <h1>{cash}</h1>

            <button onClick={() => addCash(Number(prompt()))}>add</button>
            <button onClick={() => getCash(Number(prompt()))}>get</button>    
        </div>
        
    )

}

export default Main;