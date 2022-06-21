import React from "react";
import homeBanner from "../../../images/Best-Furniture-Hatil.jpg";

const About = () => {
  return (
    <div>
      <div className="container pt-5 ">
        <h3 style={{ color: "#A25B0F" }} className="fw-bold">
          About Us
        </h3>

        <div className="row  d-flex justify-content-center align-items-center mt-5">
          <div className="col-12 col-md-6">
            <div className="text-black text-start">
              <div>
                <img src={homeBanner} class="img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-start">
            <h4 style={{color:'#A25B0F'}} className="fw-bold pb-1">
            About Us Modern Furniture
            </h4>
            <hr />
            <p className="pt-2">
              We start our journey from 2012.We are the first and top Furniture
              online shop in Bangladesh. Furniture Bari offers a unique
              selection of stylish, contemporary, and chic furniture online. Our
              online furniture range includes sofas, beds, dining tables, TV
              units, wardrobes, dressing tables, and lots more. All our wooden
              furniture designs are available online at furniturebari.com. On
              our portal, you can browse as many furniture designs across
              categories as you like, sort and filter, compare options, easily
              select and buy the ones you like, and stay updated about new and
              contemporary designs
            </p>
            <h4 style={{color:'#A25B0F'}} className="fw-bold pb-1">Our Mission</h4>
            <hr />
            <p>Our main mission is to satisfy our customer through Providing the quality Products, at the Right Price, at the Right Time.</p>
            <h4 style={{color:'#A25B0F'}} className="fw-bold pb-1">Our Vision</h4>
            <hr />
            <p>Our goal is to become number one furniture company in Bangladesh. We want to lead in this sector...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
