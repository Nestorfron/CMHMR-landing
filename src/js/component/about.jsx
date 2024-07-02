import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css"
import img from '../../img/mix.jpg'


export const About = () => (
    <div id="about" className="fondo text-center">
        <div className="about container" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="title display-4 text-white">3LittleBirds</h1>
        </div>
        <div id="div-totop" className="cmn-divfloat">
            <a href="#" className="btn btn-dark cmn-btncircle">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    </div>
);
