import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import img from "../../img/logo.png"
import "../../styles/index.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg border-bottom border-white">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><img src={img} alt="Logo" width="70" height="60" className="d-inline-block align-text-top" /></a>
				<button className="navbar-toggler text-white fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto fs-5">
						<li className="link-inicio nav-item">
							<a className="nav-link text-white" aria-current="page" href="#">Inicio</a>
						</li>
						<li className="link nav-item">
							<a className="nav-link text-secondary" href="#skills">Conocimientos</a>
						</li>
						<li className="link nav-item">
							<a className="nav-link text-secondary" href="#projects">Proyectos</a>
						</li>
						<li className="link nav-item">
							<a className="nav-link text-secondary" href="#contact">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
