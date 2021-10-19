import { faPeopleArrows, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./BookAppointment.css";

const BookAppointment = () => {
  return (
    <div className='mt-4 mb-4 appointment-section'>
      <div className='container p-8 col-sm-12 '>
        <h2>Ready to Boost your Health? Book your Appointment today!</h2>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna
          <br /> aliqua sed ipsum uat enim veniam quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </p>
      </div>

      <div className='d-flex justify-content-center d-flex align-items-center col-sm-12 '>
        <div className='p-4'>
          <h5>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call us-
            +88017945-----
          </h5>
        </div>
        <div>
          <Link to='/bookapointment'>
            <button className='btn-warning fw-bold p-2 rounded'>
              <FontAwesomeIcon icon={faPeopleArrows}></FontAwesomeIcon> Get
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
