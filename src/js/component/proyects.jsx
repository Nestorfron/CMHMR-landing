import React from "react";
import img from '../../img/3lb.jpg'

export const Proyects = () => (
    <div className="text-center pb-3">
        <div className="container row m-auto justify-content-between shadow pb-3">
            <h1 className="py-5">Trabajos</h1>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
            <div className="card col-3 m-2 shadow">
                <img src={img} className="card-img-top" alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                        <a href="#" className="btn btn-primary">link perfil cliente</a>
                    </div>
            </div>
        </div>
    </div>

);
