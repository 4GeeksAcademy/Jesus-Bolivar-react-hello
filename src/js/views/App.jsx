import React from "react";
import  Navbar  from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx"

function App () {
    return (
        <> 
            {/* navbar */}
            <Navbar />
            <div className="container">
            <Jumbotron />
            <Card />
            </div>

            <Footer/>
        
           
            
        </>
    )
}

export default App