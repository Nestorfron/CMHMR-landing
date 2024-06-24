import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css"
import img from '../../img/3lb.jpg'


export const About = () => (
    <div id="about" className="fondo text-center">
        <div className="jumbotron about pb-5">
            <h1 className="title display-4">3 Little Birds</h1>
            <div id="carouselExampleRide" className="container carousel slide shadow" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="carousel_img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="carousel_img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="carousel_img d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div id="div-totop" className="cmn-divfloat">
                    <a href="#" className="btn btn-dark cmn-btncircle">
                     <FontAwesomeIcon icon={faArrowUp} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
