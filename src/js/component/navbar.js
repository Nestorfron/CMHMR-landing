import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "../../styles/index.css"
import img from '../../img/3lb.jpg'

export const Navbar = () => {
	return (
		
		<nav className="nav_bar navbar navbar-expand-lg bg-dark px-4">
			<div className="nav container-fluid bg-dark">
			<a className="navbar-brand" href="#"><img className="img rounded-circle" src={img} /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="icon navbar-toggler-icon fs-2"><FontAwesomeIcon icon={faBars} /></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<a className="nav-link fs-5" aria-current="page" href="#">Inicio</a>
						<a className="nav-link my-auto" href="/#about">Quien somos</a>
						<a className="nav-link my-auto" href="/#skills">Habilidades</a>
						<a className="nav-link my-auto" href="/#projects">Proyectos</a>
						<a className="nav-link my-auto" href="/#contact">Contacto</a>
					</div>
				</div>
			</div>
		</nav>
		
	);
};
