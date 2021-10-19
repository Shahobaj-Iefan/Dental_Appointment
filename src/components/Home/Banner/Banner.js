import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className='banner-cover'>
      <div className='container ext-center'>
        <h2 className='p-4'>Happy to see your health</h2>
        <h1 className='text-primary'>Reliable Dental Care Solution </h1>
        <p className='p-4'>
          Oral hygiene instruction is helpful and educational information meant
          to teach and guide our patients to prevent new cavities, and to
          maintain healthy teeth and gums. At your initial oral hygiene visit,
          your hygienist will instruct you on
        </p>
        <button className='btn btn-info'>Select Department</button>
      </div>
    </div>
  );
};

export default Banner;
