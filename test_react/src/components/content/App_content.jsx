import { Route } from 'react-router-dom';
import News from './post/news/App_news';
import Main from './post/main/App_main';
import Chat from './post/chat/App_caht';
import Music from './post/music/App_music';
import i from './content.module.css';

const Content = () =>{
return (
    <div className={i.post}>    
        <Route path ="/news" component={News}/>
        <Route path ="/main" component={Main}/>
        <Route path ="/chat" component={Chat}/>
        <Route path ="/music" component={Music}/>
    </div>

)
}

export default Content;