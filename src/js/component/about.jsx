import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"
import img from "../../img/logoBlanco.png"



export const About = () => (
    <div id="about" className="text-center">
        <div className="container-fluid px-5 col-sm-12">
            <img src={img} alt="Logo" width="70%" height="50%" className="image d-inline-block align-text-top" />
            <p className="text-white fs-5">Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web y móviles, especializado en tecnologías front-end y back-end. Apasionado por crear soluciones eficientes, seguras y escalables, con un enfoque en la experiencia del usuario y la optimización del rendimiento.</p>
        </div>
        <div className="card-body">
            <Link>
                <i className="icon-about fa-brands fa-facebook m-4  text-white shadow"></i>
            </Link>
            <Link>
                <i className="icon-about fa-brands fa-linkedin m-4  text-white shadow"></i>
            </Link>
            <Link>
                <i className="icon-about fa-brands fa-github m-4  text-white shadow"></i>
            </Link>
            <Link>
                <i className="icon-about fa-brands fa-whatsapp m-4  text-white shadow"></i>
            </Link>
            <div id="div-totop" className="cmn-divfloat">
                <a href="#" className="btn btn-dark cmn-btncircle">
                    <i class="fa-solid fa-arrow-up"></i>
                </a>
            </div>
        </div>
    </div>
);
