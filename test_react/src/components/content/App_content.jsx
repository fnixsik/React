import React from 'react';
import { Route } from 'react-router-dom';
import News from './post/news/App_news';
import Main from './post/main/App_main';
import Chat from './post/chat/App_caht';
import Music from './post/music/App_music';
import Users from './post/users/App_users';
import i from './content.module.css';

const Content = (props) =>{
return (
    <div className={i.post}>    
        <Route path ="/News" component={News}/>
        <Route path ="/main" render={ () => <Main stateTree={props.stateToo }/>} />
        <Route path ="/chat" component={Chat}/>
        <Route path ="/music" component={Music}/>
        <Route path="/users" render ={() => <Users/>}/>
    </div>

)
}

export default Content;