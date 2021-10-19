import React from "react";

const AppointmentForm = () => {
  return (
    <div className='container w-50 m-auto'>
      <h3>Fill up the form form for Your Appointment </h3>
      <form>
        <div className='form-row'>
          <div className='form-group col-md-12'>
            <label for='inputEmail4'>Your Name</label>
            <input
              type='text'
              className='form-control'
              id='inputEmail4'
              placeholder='Frist Name'
            />
          </div>
        </div>
        <div className='form-group'>
          <label for='inputAddress'>Address</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>
        <div className='form-group'>
          <label for='inputAddress2'>Address 2</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
          />
        </div>
        <div className='form-row mb-4'>
          <div className='form-group col-md-6'>
            <label for='inputCity'>City</label>
            <input type='text' className='form-control' id='inputCity' />
          </div>
        </div>
        <button type='submit' className='btn btn-primary mb-4'>
          Submit info
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
