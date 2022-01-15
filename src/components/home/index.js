import React from 'react'
import "./home.css";
import Body from '../body';
import Footer from '../footer';
import Header from '../header';

function Home() {
    return (
        <div className="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
