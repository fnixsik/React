import i from "./main.module.css"

const Main=() =>{

    return(
        <div className = {i.text}>
            <p>Главная Страница </p>

                <Block text="сдесь могла быть ваша реклама" />
                <Block />
                <Block text="vtite here !" />
                <Block text="ne scetytsy"/>
                <Block text = "wellcom"/>
            
        </div>
    )

}
export default Main;

const Block = (props) => {
    return(
        <div className ={i.cube}>
            <p>{props.text}</p>
        </div>
    )
}