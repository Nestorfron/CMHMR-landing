import React from "react";
import img from '../../img/3lb.jpg'

export const Skills = () => (
    <div className="text-center pb-3">
        <div className="container m-auto justify-content-between shadow-lg">
            <h1 className="py-5">Habilidades</h1>
            <div className="flex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
            <div className="flex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
            <div className="flex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
            <div className="flex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
            <div className="dflex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
            <div className="flex-row card m-2 p-2">
                <div className="col-3">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body col-3 m-auto justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">descripción breve</p>
                </div>
            </div>
        </div>
    </div>
);
