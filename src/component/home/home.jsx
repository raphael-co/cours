import Header from '../Header/header.jsx'
import Footer from '../Footer/footer.jsx'
import Body from '../body/body.jsx'


function Home(Nameheader) {

  console.log(Nameheader.Nameheader)
  return (
    <div className="App">
        <Header
        namehea={Nameheader} 
        ></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default Home;