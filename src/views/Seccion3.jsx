import React from 'react'

const Seccion3 = () => {

    return (
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className="seccion2">Sección 3</h1>
            <p className="m-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <form className="w-50">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="exampleInputDescription1" />
                </div>
                <button id='btn-submit' type="submit" className="btn btn-primary w-100">Submit</button>
            </form>

        </div>
    )
}

export default Seccion3
