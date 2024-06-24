import React from "react";
import img from '../../img/3lb.jpg'

export const Skills = () => (
    <div className="fondo text-center pb-3">
        <div className="container m-auto justify-content-between p-5 shadow">
            <h1 className="skill_title py-5">Habilidades</h1>
            <div className="row">
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
                <div className="skill flex-row col-md-5 col-sm-12 card my-4 mx-auto p-2 bg-dark">
                    <div className="col-3">
                        <img src={img} className="img-skill card-img-top rounded-circle" alt="..." />
                    </div>
                    <div className="card-body col-3 m-auto">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">descripción breve</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
