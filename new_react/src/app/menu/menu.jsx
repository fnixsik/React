import { NavLink } from "react-router-dom";
import i from "./menu.module.css";

const Menu = () => {
    return (
        <div className={i.main}>
            <div className={i.link}>
            <NavLink to="/main">Главная</NavLink>
            </div>
            <div className={i.link}>
            <NavLink to="/news">Новости</NavLink>
            </div>
            <div className={i.link}>
            <NavLink to="/chat">Чатик</NavLink>
            </div>
            <div className={i.link}>
            <NavLink to="/about">О нас</NavLink>
            </div>
        </div>
    )
}

export default Menu;