import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const Appointment = () => {
  const { appointmentId } = useParams();
  const [services] = useServices([]);
  const [details, setDetails] = useState([]);
  const getid = parseInt(appointmentId);
  useEffect(() => {
    const matchDetails = services.find(service => service.key === getid);
    setDetails(matchDetails);
  }, [services, getid]);
  /* const { appointmentId } = useParams();
  const [services] = useServices([]);
  const [details, setDetails] = useState({});
  const getappointmentId = parseInt(appointmentId);
  useEffect(() => {
    const matchDetails = services.find(
      service => service.key === getappointmentId
    );
    setDetails(matchDetails);
  }, [services, getappointmentId]); */
  return (
    <div>
      <h2>Your Appointment:{details?.name}</h2>
    </div>
  );
};

export default Appointment;
