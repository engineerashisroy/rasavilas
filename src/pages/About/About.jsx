import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import AboutDetails from "./AboutDetails";
import image from "../../assets/images/ashis.jpeg";

const About = () => {
  const datas = [
    {
      _id: 1,
      name: "Ashis Roy One",
      roll: "123200903034",
      image: image,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 2,
      name: "Ashis Roy Two",
      roll: "123200903034",
      image: image,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 3,
      name: "Ashis Roy Three",
      roll: "123200903034",
      image: image,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 4,
      name: "Ashis Roy Four",
      roll: "123200903034",
      image: image,
      year: "4th Year",
      branch: "CSE",
    },
  ];
  return (
    <section>
      <div className="hero 	">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mt-11">Rasavilas Details</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {datas.map((data) => (
          <AboutDetails key={data._id} data={data}></AboutDetails>
        ))}
      </div>
    </section>
  );
};

export default About;
