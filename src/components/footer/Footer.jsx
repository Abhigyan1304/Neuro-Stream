import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Made by
                    Abhigyan Mehta(21BCE0992)
                    Mehta Sahil Sanjay(21BCE3138)
                    Shivam Raj(21BCE3727)

                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://github.com/Abhigyan1304" target="_blank"> <FaGithub /> </a>
                        
                    </span>
                    <span className="icon">
                        <a href="https://www.youtube.com/" target="_blank"><FaInstagram /></a>
                        
                    </span>
                    {/* <span className="icon">
                        <FaTwitter />
                    </span> */}
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/abhigyan-mehta-484151247/" target="_blank"><FaLinkedin /></a>
                       
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
