import React from "react"


export const Contact = () => (
        <form id="contact" className="contact container-fluid">
                <div className="container m-auto border-bottom mb-3">
                        <h1 className="skills-title p-3">Contacto</h1>
                </div>
                <div className="container text-start rounded-3 pb-5 shadow-lg p-4">
                        <div className="mb-3">
                                <label className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Número de contacto</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="boton_contact btn btn-primary mb-5">Enviar</button>
                </div>
        </form>
)


