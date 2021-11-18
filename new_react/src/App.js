import logo from './logo.svg';
import './App.css';
import Header from './app/header/header';
import Menu from './app/menu/menu';
import Footer from './app/footer/footer';
import { BrowserRouter } from 'react-router-dom';
import About from "./app/content/about/about";
import Main from "./app/content/main/main";
import News from "./app/content/news/news";
import Chat from "./app/content/chat/chat";
import { Route } from 'react-router';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="head">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
        <div className="maniPage">
            <Route path="/main" component={()=> <Main state={props.state.contentPage} edit={props.edit}/>}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/chat" component={Chat}></Route>
        </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
    </BrowserRouter>
  );

}

export default App;
