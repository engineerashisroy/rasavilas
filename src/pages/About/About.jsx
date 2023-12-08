import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import AboutDetails from "./AboutDetails";
import image1 from "../../assets/images/ashis.jpeg";
import image2 from "../../assets/images/deba.jpeg";
import image3 from "../../assets/images/bidisha.jpeg";
import image4 from "../../assets/images/bandisha.jpeg";

const About = () => {
  const datas = [
    {
      _id: 1,
      name: "Ashis Roy",
      roll: "123200903034",
      image: image1,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 2,
      name: "Debashis Barman",
      roll: "123200903047",
      image: image2,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 3,
      name: "Bidisha Baidya",
      roll: "123200903040",
      image: image3,
      year: "4th Year",
      branch: "CSE",
    },
    {
      _id: 4,
      name: "Bandisha Chowdhury",
      roll: "123200903039",
      image: image4,
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
