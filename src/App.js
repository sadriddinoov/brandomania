import './App.scss';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Otziv from './components/otziv/otziv';
import Pluc from './components/pluces/pluc';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Otziv/>
     <Pluc/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
