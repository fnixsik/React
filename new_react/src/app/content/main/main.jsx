import Block from "./block/block";
import React from "react";

const Main = (props) =>{

    let newRest = React.createRef();

let cub = props.state.comentDb.map(c => <Block name= {c.name} status={c.status}/>)

    let bak = () =>{
        let text = newRest.current.value;
        props.edit (text);
    }

    return (
        <div>
        {cub}
            <hr/>
            <textarea ref={newRest}></textarea>
            <button onClick={bak}>Отправить</button>
        </div>
    )
}

export default Main;