import React from "react";
import { FaYoutube, FaPhoneAlt, FaAddressCard } from 'react-icons/fa';

const Footer = () => {
    return (

        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>HOODIES</h2>
                            <h5 className="tag">We provide different types of Hoodies</h5>

                          
                        </div>
                        {/* <div></div> */}
                        <div className="col">
                            <h4>Product</h4>
                            <h6 className="list-unlistyled">
                                <li>Crew Neck Hoodies</li>
                                <li>Fitted Hoodies</li>
                                <li> Fleece Hoodies</li>
                                <li>Pullover Hoodies</li>
                                <li>& <span className="manymore">Many More...</ span></li>
                            </h6>
                        </div>
                        {/* <div></div> */}
                        <div className="col">
                            <h4>Contact</h4>
                            <h6 className="list-unlistyled">
                                <p> <FaYoutube /> gururajbira1996@gmail.com</p>
                                <p> <FaPhoneAlt /> +91-8329894359</p>
                                <p> <FaAddressCard/> Address - Shantinagar society, Sadashiv Peth, Pune, Maharashtra. </p>
                            </h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} <span className="hoodies">HOODIES</span> | All rights reserved | terms of services | Privecy
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Footer;