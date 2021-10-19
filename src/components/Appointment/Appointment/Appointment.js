import React  from "react";
import { useParams } from "react-router";

const Appointment = () => {
  const { appointmentId } = useParams();
     
  return (
    <div>
      <h2>Your Appointment Id:{appointmentId}</h2>
    </div>
  );
};

export default Appointment;
