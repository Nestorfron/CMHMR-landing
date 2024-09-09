import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"
import img from "../../img/logoBlanco.png"
import img0 from "../../img/0.jpg"



export const About = () => (
    <div id="about" style={{ backgroundImage: `url(${img0})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex1: -1 }} className="text-center">
        <div className="about-container container-fluid" >
            <div className="container-fluid px-5 col-sm-12">
                <h1 className="title text-white fs-1 p-5 m-5">CompuMundoHiperMegaRed</h1>
                <p className="text-white fs-5">Desarrolladores Full Stack con experiencia en el desarrollo de aplicaciones web y móviles, especializados en tecnologías front-end y back-end. Apasionados por crear soluciones eficientes, seguras y escalables, con un enfoque en la experiencia del usuario y la optimización del rendimiento.</p>
            </div>
            <div className="card-body p-5">

                <a href="#">
                    <i className="icon-about fa-brands fa-facebook m-4  text-white shadow"></i>
                </a>
                <a href="https://www.linkedin.com/in/nestor-frones/" >
                    <i className="icon-about fa-brands fa-linkedin m-4  text-white shadow"></i>
                </a>
                <a href="https://github.com/Nestorfron">
                    <i className="icon-about fa-brands fa-github m-4  text-white shadow"></i>
                </a>
                <a href="https://wa.me/59892486454">
                    <i className="icon-about fa-brands fa-whatsapp m-4  text-white shadow"></i>
                </a>
                <div id="div-totop" className="cmn-divfloat">
                    <a href="#" className="btn btn-dark cmn-btncircle">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);
