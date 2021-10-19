import React from "react";
import ImageError from "../../images/page-not-found/page not found.png";

const NotFound = () => {
  return (
    <div>
      <h2>Thank You for Visiting Us</h2>
      <div className='w-50 m-auto'>
        <img className='img-fluid' src={ImageError} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
