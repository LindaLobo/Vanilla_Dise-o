import React from 'react'

const Banner = () => {
    return (
        <div className="card_banner" >
            <div className='big_circle'></div>
            <div className="card-body">
                <p className="card-text fs-6">TEXTO PREVIO AL TITULO</p>
                <p className="card-title-banner">Titulo banner <br></br> principal</p>
                <button type="button" className="btn-enviar">Enviar</button>
            </div>
        </div>
    )
}

export default Banner
