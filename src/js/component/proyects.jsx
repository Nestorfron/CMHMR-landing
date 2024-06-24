import React from "react";
import img from '../../img/3lb.jpg'

export const Proyects = () => (
    <div className="fondo text-center pb-3">
        <div className="container row m-auto justify-content-center shadow pb-3">
            <h1 className="text-warning py-5">Trabajos</h1>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
            <div className="projects card col-md-3 col-sm-8 m-4 shadow">
                <img src={img} className="card-img-top rounded-circle" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn boton_projects">link perfil cliente</a>
                    </div>
            </div>
        </div>
    </div>

);
