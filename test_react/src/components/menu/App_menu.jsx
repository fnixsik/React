import i from './menu.module.css';
const Menu =() =>{
    return (
        <div>
            <div className={i.item}>
                <a href="/main"><p>Главная</p></a>
            </div>
            <div className={i.item}>
                <a href="/news"><p>новости</p></a>
            </div>
            <div className={i.item}>
                <a href="/chat"><p>чат</p></a>
            </div>
            <div className={i.item}>
                <a href="/music"><p>музыка</p></a>
            </div>
        </div>
    )
}

export default Menu;