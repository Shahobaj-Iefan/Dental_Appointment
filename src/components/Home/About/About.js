import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./About.css";
import about from "../../../images/about/about.png";

const About = () => {
  return (
    <div className='container mt-4 mb-4 '>
      <div className='row'>
        <div className='text-section col-12 col-md-6'>
          <h1 className='text-warning'>About Dental Treatment</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            tenetur quod adipisci facere laborum esse neque error itaque
            pariatur cum dignissimos necessitatibus hic aspernatur eligendi ad
            quae, ipsum placeat rerum eius voluptate voluptatem repellendus et!
            Aut, ad ea. Eos.
          </p>
          <li>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Consectetur
            adipisicing elit sed eiusmod
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Tempor
            incididunt labore dolore magna aliqua.
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Enim ad
            minim veniam quis nostrud exercitation
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Ullamco
            laboris nisi ut aliquip ex ea commodo
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Aute irure
            dolor in reprehenderit in voluptate velit esse
          </li>
        </div>

        <div className=' col col-sm-12 col-md-6'>
          <img src={about} alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;
