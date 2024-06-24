import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css"
import img from '../../img/3lb.jpg'


export const About = () => (
    <div className="fondo ext-center">
        <div className="jumbotron about container pb-5">
        <h1 className="title display-4">3 Little Birds</h1>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img} class="carousel_img d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img} class="carousel_img d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img} class="carousel_img d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    </div>
);
