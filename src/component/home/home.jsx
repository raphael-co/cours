import React, { useState } from "react";
import Header from '../Header/header.jsx'
import Footer from '../Footer/footer.jsx'
import Body from '../body/body.jsx'
import Navbar from '../Navbar/Navbar.jsx'


function Home(Nameheader) {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);
console.log(sidebar)
  return (
    <div className="App">
        <Header
        showSidebarbut={showSidebar}
        namehea={Nameheader} 
        ></Header>
        <Navbar
        value={sidebar}
        ></Navbar>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default Home;