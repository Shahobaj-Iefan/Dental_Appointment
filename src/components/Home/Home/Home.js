import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BookAppointment from "../BookAppoinment/BookAppointment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <BookAppointment></BookAppointment>
    </div>
  );
};

export default Home;
