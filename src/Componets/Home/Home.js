import React from 'react'
import './Home.css'
import img1 from '../Home/Images/img2nw.jpg'
import img2 from '../Home/Images/imgx11.jpg'
import img3 from '../Home/Images/ok.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <div className="container">
                <div className="row py-4">
                    <div className="col">
                    
                        <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active" ></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="2000">
                                    <img src={img1} className="d-block w-100" alt="img" />
                                    <div className="carousel-caption d-none d-md-block">

                                        <NavLink activeClassName='menu_active' className="nav-link" to='/covid'>
                                            <button type="button" className="btn btn-info buttonx">India Today Live Cases</button>
                                        </NavLink>

                                        <br />
                                        <p className='p1'>Coronavirus (COVID-19) India Update News Dashboard - Find the latest worldwide information of Coronavirus Cases, Confirm cases, Recovered cases, Total Deaths many more ❄️</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src={img2} className="d-block w-100" alt="img" />
                                    <div className="carousel-caption d-none d-md-block">

                                        <NavLink activeClassName='menu_active' className="nav-link" to='/state'>
                                            <button type="button" className="btn btn-info buttonx"> State Cases </button>
                                        </NavLink>

                                        <br />
                                        <p className='p2' style={{backgroundColor:'Black',padding:"5px", letterSpacing:"2px"}}>which state in india is most affected by covid-19 today..! 🚀
                                         Click to See</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src={img3} className="d-block w-100" alt="img" />
                                    <div className="carousel-caption d-none d-md-block">

                                        <NavLink activeClassName='menu_active' className="nav-link" to='/center'>
                                            <button type="button" className="btn btn-info buttonx">Vactination Center</button>
                                        </NavLink>

                                        <br />
                                        <p className='p3' style={{backgroundColor:'Black',paddingTop:"5px", letterSpacing:"2px"}}>Search COWIN Walk-In Covid-19 Vaccine Centre Location Find using
                                        <p style={{ paddingTop:"3px", paddingBottom:"5px" ,letterSpacing:"2px"}}> Pincode and Today Date 😃</p> </p>
                                    </div>
                                </div>
                            </div>
                            <a href="#myCarousel" className="carousel-control-prev" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#myCarousel" className="carousel-control-next" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
