import React from 'react';
import i from "./main.module.css"

const Main=(props) =>{
    console.log (props);
    let newstate = props.stateTree.set.map(f => <Bost name={f.name} age={f.age} />);
    return(  
        <div className = {i.text}>
            <p>Главная Страница </p> 
                {newstate}
        </div>
        
    )

}

export default Main;

const Bost=(props) => {
    return(
        <div className = {i.chat}>
                
                <p>name: {props.name}</p>
                <p>age: {props.age} </p>
                
                </div> 
    )
}