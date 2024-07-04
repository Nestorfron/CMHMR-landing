import React from "react";
import img1 from "../../img/1.png"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"
import img5 from "../../img/5.jpg"
import img6 from "../../img/6.jpg"
import img7 from "../../img/7.jpg"
import img8 from "../../img/8.jpg"




export const Projects = () => (
    <div id="projects" className="fondo text-center pb-3">
        <div className="container m-auto border-bottom mb-3">
            <h1 className="skills-title p-3 m-3">Proyectos</h1>
        </div>
        <div className="container row m-auto justify-content-center">
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img1} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">StarWars Blog</h5>
                    <p className="card-text">HTML-React-Fetch</p>
                    <a href="https://calculadora-a2928sxoj-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/star-wars-blog-nestorfrones" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img2} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Tienda Virtual</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://bootstrap5-f9a71xn54-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/bootstrap5" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img3} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Flexbox</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://flexbox-gu3mppo1z-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/Flexbox" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img4} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Formulario</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://formulario-2qzr5p53u-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/formulario" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img5} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Player</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://reproductor-cceb1fpgb-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/Reproductor" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img6} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Web</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://startup1-pzs7izc3l-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/Startup1" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img7} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Image Finder</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://buscador-imagenes-jnl7rj152-nestorfron.vercel.app/" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/buscador-imagenes" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            <div className="project-card card col-8 col-md-4 m-4 rounded-4">
                <img src={img8} className="project-img card-img-top m-auto pt-4" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">Shopping Cart</h5>
                    <p className="card-text">HTML-CSS-React</p>
                    <a href="https://carro-de-compras-1z7mma2v6-nestorfron.vercel.a" className="project-boton mx-3"><i class="fa-solid fa-play"></i></a>
                    <a href="https://github.com/Nestorfron/carro-de-compras" className="project-boton mx-3"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
        </div>

    </div>

);
