import { NavLink, Route } from 'react-router-dom';
import i from './chat.module.css';
import ChatComents from './coments/chatComents';
import ChatComments from './coments/chatComments';

const Chat = () => {
    return (
        <div className ={i.chat}>
            <div className={i.users}>
                <div className={i.userChat}>
                    <NavLink to="/chat/1"> Egor</NavLink>
                </div>
                <div className={i.userChat}>
                    <NavLink to="/chat/2"> Selena</NavLink>
                </div>
                <div className={i.userChat}>
                    <NavLink to="/chat/3"> Joni</NavLink>
                </div>
                <div className={i.userChat}>
                    <NavLink to="/chat/4"> Fernando</NavLink>
                </div>
                <div className={i.userChat}>
                    <NavLink to="/chat/5"> Lisa</NavLink>
                </div>
                <div className={i.userChat}>
                    <NavLink to="/chat/6"> July</NavLink>
                </div>
            </div>
            <div className={i.chats}>
                <Route path="/chat/1" component={ChatComents}></Route>
                <Route path="/chat/2" component={ChatComments}></Route>
            </div>
        </div>
    )
}

export default Chat;