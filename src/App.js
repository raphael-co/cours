import logo from './logo.svg';
import './App.css';
import Hello from './component/hello.jsx'
import Header from './component/Header/header.jsx'
import Footer from './component/Footer/footer.jsx'
import Chest from './component/Chest/chest.jsx'




function App() {
  return (
    <div className="App">
  
        <Header></Header>
        <Chest></Chest>
        <Footer></Footer>



    </div>
  );
}

export default App;
