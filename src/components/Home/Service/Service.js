import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { key, name, discription, img } = service;
  return (
    <div className='col-lg-4 col-sm-6 col-12 text-center mr-2 border rounded-2'>
      <img className='img-fluid' src={img} alt='' />
      <h3>{name}</h3>
      <p>{discription.slice(0, 100)}</p>

      <Link to={`/appointment/${key}`}>
        <button className='btn-warning d-inline-block m-2 fw-bold'>
          Get Appointment
        </button>
      </Link>
    </div>
  );
};

export default Service;
