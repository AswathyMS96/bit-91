import Header from './Pages/Header';
import Home from './Pages/Home';
import Uniq from './Pages/Uniq';
import ChooseWhy from './Pages/ChooseWhy';
import Features from './Pages/Features';
import Security from './Pages/Security';
import Quick from './Pages/Quick';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Uniq />
      <ChooseWhy />
      <Features/>
      <Security/>
      <Quick/>
      <Footer/>
    </div>
  );
}

export default App;
