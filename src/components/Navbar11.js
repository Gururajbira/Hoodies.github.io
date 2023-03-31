import React from 'react'
// import React, { useState, useEffect } from 'react';
import HoodiesData from '../HoodiesData';

import { FaPhoneAlt, FaPencilAlt, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaAddressCard } from "react-icons/fa";

const logo = "./assets/images/logo3.webp"
const Hoodies01 = "./assets/images/Hoodies01.jpg"

const Navbar = () => {
    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img src={'./assets/images/logo3.webp'} alt="logo" />
                        Hoodies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>    */}
                            <button className="btn button-1" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='container1'>


                {/* <span> We provide veriety of new "HOODIES" </span> */}
                {/* <span className='Hoodie-head'> HOODIES</span> */}


                <img src={'./assets/images/Hoodies01.jpg'} alt="Hoodies01" />

                {/* <div className='banner-text'>
                    <h2>Welcome to Our Site</h2>
                    <p> We provide veriety of <span className='Hoodie-head'> HOODIES</span> </p>
                </div> */}

            </div>


            <h1 className='text-center textcolor mt-5'>Fashionable Hoodies</h1>
            <div className='container services' >

                <div className='row'>

                    {
                        HoodiesData.map((cval) => {

                            return (
                                <>

                                    <div className='col-md-4 servicescols'>

                                        <div className="card" >
                                            <img src={cval.cover} class="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{cval.name}</h5>
                                                <h6 className='card-detail'>{cval.detail}</h6>
                                                <p className="card-text">{cval.Price} {cval.rating}</p>
                                                {/* <span><i class="fa-solid fa-star-sharp"></i></span> */}
                                                <a href="#" className="btn btn-primary">Book Now</a>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            )

                        })

                    }

                </div>
            </div>

            {/* <footer className='bg-dark  text-white pt-5 pb-4'>

                <div className='text-center text-md-left'>

                    <div className='row text-center text-md-left'>

                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-normal mb-4 font-weight-bold text-warning'>By Winter</h5>
                            <p className='text-normal mb-4 font-weight-bold text-primary'>We Provide Special Hoodies Product.</p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> TYPES OF HOODIES</h5>

                            <p>
                                <a href='#' className='text-white' style={{ textDecoration: "none" }}> <span> Pullover</span> </a>
                            </p>
                            <p>
                                <a href='#' className='text-white' style={{ textDecoration: "none" }}><span>  Zippered </span></a>
                            </p>
                            <p>
                                <a href='#' className='text-white' style={{ textDecoration: "none" }}><span>Fur Hoodies </span></a>
                            </p>
                            <p>
                                <a href='#' className='text-white' style={{ textDecoration: "none" }}>  <span>Stack Hoodies</span></a>
                            </p>
                        </div>



                        <div className='col-md-2 col-lg-2 contact col-xl-2 mx-auto mt-3'>

                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Contact </h5>

                            <p>
                                <i className='fas fa-home mr-3'></i> <FaAddressCard /> Address - <span> Lokmangal society, Sadashiv peth, Pune 411042.</span>

                            </p>

                            <p>
                                <i className='fas fa-home mr-3'></i> <FaPencilAlt /> Email-id - <span>gururajbira1996@gmail.com</span>
                            </p>

                            <p>
                                <i className='fas fa-home mr-3'></i> <FaPhoneAlt /> Contact No - <span>+91 8329894359</span>
                            </p>


                        </div>




                        <div className='col-md col-lg-8'>

                            <div className='text-center text-md-right'>
                                <ul className='list-unlisted list-inline'>
                                    <li className='list-inline-item'>
                                        <a href='#' className='btn-floating btn-sm text-primery' style={{ fontSize: "23px" }}><i className='fab fa-facebook'><FaFacebookF />
                                        </i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#' className='btn-floating btn-sm text-alert' style={{ fontSize: "23px" }}><i className='fab fa-twitter'><FaTwitter /></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#' className='btn-floating btn-sm text-Danger' style={{ fontSize: "23px" }}><i className='fab fa-instagram'><FaInstagram /> </i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#' className='btn-floating btn-sm text-success' style={{ fontSize: "23px" }}><i className='fab fa-Whatsapp'><FaWhatsapp /></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>




                        <div className='col-md col-lg-8'>
                            <p >All rights reserved for  Hoodies Site &copy; 2023
                            </p>
                        </div>

                    </div>

                </div>

            </footer> */}


        </>
    )
}

export default Navbar

{/* <div></div> */ }