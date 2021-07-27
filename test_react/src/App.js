import logo from './logo.svg';
import './App.css';
import Header from './components/header/App_header';
import Content from './components/content/App_content'; 
import Footer from './components/footer/App_footer';
import Menu from './components/menu/App_menu';

function App() {
  return (
    <div className="App">
      <div className="App-main">
          <div className="main_header">
          <Header/>
          </div>
          <div className="main_menu">
          <Menu />
          </div>
          <div className="main_content">
          <Content />
          </div>
          <div className="main_footer">
          <Footer />
          </div>
      
      </div>
    </div>
  );
}

export default App;