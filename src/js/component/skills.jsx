import React from "react";


export const Skills = () => (
    <div id="skills" className="container row text-center p-3 m-auto">
        <div className="m-auto border-bottom mb-3">
            <h1 className="skills-title p-3 m-3">Conocimientos</h1>
        </div>
        <div className="row">
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-brands icon-skill fa-html5"></i>
                <p className="my-auto p-skill px-3 card-text">HTML5</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-brands icon-skill fa-css3-alt"></i>
                <p className="my-auto p-skill px-3 card-text">CSS</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="my-auto icon-skill fa-brands fa-bootstrap"></i>
                <p className="my-auto p-skill px-3 card-text">Boostrap</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="my-auto icon-skill fa-brands fa-js"></i>
                <p className="my-auto p-skill px-3 card-text">JavaScript</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-brands icon-skill fa-react"></i>
                <p className="my-auto p-skill px-3 card-text">React</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-brands icon-skill fa-github"></i>
                <p className="my-auto p-skill px-3 card-text">GitHub</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-solid icon-skill fa-flask"></i>
                <p className="my-auto p-skill px-3 card-text">Flask</p>
            </div>
            <div className="col-3 col-sm-4 p-4 text-white">
                <i className="fa-solid icon-skill fa-database"></i>
                <p className="my-auto p-skill px-3 card-text">MSql</p>
            </div>
        </div>
    </div>
);
