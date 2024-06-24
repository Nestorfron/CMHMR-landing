import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css"


export const About = () => (
    <div className="fondo ext-center">
        <div className="jumbotron about container">
            <h1 className="display-4 title">3 Little Birds</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p className="lead mt-5">
                <a className="btn btn-primary rounded-circle fs-4 mx-1 shadow" href="#" role="button"><FontAwesomeIcon icon={faHouse} /></a>
                <a className="btn btn-primary rounded-circle fs-4 mx-1 shadow" href="#" role="button"><FontAwesomeIcon icon={faHouse} /></a>
                <a className="btn btn-primary rounded-circle fs-4 mx-1 shadow" href="#" role="button"><FontAwesomeIcon icon={faHouse} /></a>
            </p>
        </div>
    </div>
);
