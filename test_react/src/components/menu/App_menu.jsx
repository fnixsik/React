import { NavLink } from 'react-router-dom';
import i from './menu.module.css';
const Menu =() =>{
    return (
        <div>
            <div className={i.item}>
                <NavLink to="/main"><p>Главная</p></NavLink>
            </div>
            <div className={i.item}>
                <NavLink to="/news"><p>новости</p></NavLink>
            </div>
            <div className={i.item}>
                <NavLink to="/chat"><p>чат</p></NavLink>
            </div>
            <div className={i.item}>
                <NavLink to="/music"><p>музыка</p></NavLink>
            </div>
        </div>
    )
}

export default Menu;