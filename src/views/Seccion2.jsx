import React from 'react'

const Seccion2 = () => {
    return (
        <div className='d-f text-center'>
            <h1 className='seccion2'>Sección 2</h1>
            <p className='m-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rerum incidunt repellendus ratione reprehenderit officia inventore
                commodi magni, animi et deserunt hic perspiciatis, tempore quod laboriosam
                praesentium voluptate repudiandae placeat. Sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium tempore reprehenderit reiciendis at excepturi, dolorum nulla
                dicta beatae. Nulla, et consequuntur eius nihil numquam debitis asperiores
                rem voluptate optio. Magni?
            </p>
            <div id="carouselExampleIndicators" className="carousel slide m-5 p-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://blogimage.vantagecircle.com/content/images/2022/04/Improving-Teamwork-in-the-workplace.png" className="d-block w-100" alt="equipo" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://tecnosoluciones.com/wp-content/uploads/2023/02/Boletin-111022_Gestion-Empresarial-con-Transformacion-Digital.jpg" className="d-block w-100" alt="dinamismo" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://blog.eclass.com/hubfs/shutterstock_735043519.png" className="d-block w-100" alt="metas" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Seccion2
