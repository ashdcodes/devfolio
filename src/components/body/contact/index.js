import React from 'react'
import "./contact.css";
import Separator from "../../common/separator/index";
import Social from "../../common/social/index";
function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <Social/>
                </div>
                <div className="download">
                    <a download href={require("../../../assets/akashresume.pdf").default}>
                    <i class="fi-rr-cloud-download download-icon"></i>
                       Download Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
