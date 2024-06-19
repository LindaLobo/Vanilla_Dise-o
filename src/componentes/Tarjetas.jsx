import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Tarjetas = () => {
  const { info } = useContext(DataContext);

  return (
    <div className='container'>
      <div className="row mt-5" >
        {info && info.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card mx-auto">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body ">
                <p className="card-title">{item.title}</p>
                <p className="card-text text-center mb-4">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Tarjetas;
