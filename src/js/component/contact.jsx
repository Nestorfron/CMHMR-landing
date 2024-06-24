import React from "react"


export const Contact = () => (
        <form>
                <h1 className="my-5" >Contacto</h1>
                <div className="container text-start ounded-3 pb-5 shadow-lg  p-4">
                        <div className="mb-3">
                                <label className="form-label">Nombre y Apellido</label>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Número de contacto</label>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5">Enviar</button>
                </div>
        </form>
)


