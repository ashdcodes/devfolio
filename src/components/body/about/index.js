import React from 'react'
import "./about.css";
import Social from "../../common/social/index";
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there,i am <br/>
                    <span className="info-name">Akash Deep</span>.<br/>
                    I love experimenting with Web<br/>and Mobile.
                </div>
                <div className="about-photo">
                   <img src={require('../../../assets/coding.png').default} alt="codinglogo" className="picture" />
                </div>
            </div>
            <Social />
        </div>
    )
}

export default About
