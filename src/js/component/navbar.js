import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "../../styles/index.css"
import img from '../../img/3lb.jpg'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-white shadow-lg px-4">
			<div className="nav container-fluid">
				<a className="navbar-brand" href="#"><img className="img rounded-circle" src={img} /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="text-primary navbar-toggler-icon fs-2"><FontAwesomeIcon icon={faBars} /></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="text-dark nav-link fs-5" aria-current="page" href="#">Inicio</a>
						<a className="nav-link my-auto" href="<About/>">Quien somos</a>
						<a className="nav-link my-auto" href="#">Habilidades</a>
						<a className="nav-link my-auto" href="#">Proyectos</a>
						<a className="nav-link my-auto" href="#">Contacto</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
