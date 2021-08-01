import i from './menu.module.css';
const Menu =() =>{
    return (
        <div>
            <div className={i.item}>
                <a href="#"><p>Главная</p></a>
            </div>
            <div className={i.item}>
                <a href="#"><p>новости</p></a>
            </div>
            <div className={i.item}>
                <a href="/App_chat"><p>чат</p></a>
            </div>
            <div className={i.item}>
                <a href="#"><p>музыка</p></a>
            </div>
        </div>
    )
}

export default Menu;