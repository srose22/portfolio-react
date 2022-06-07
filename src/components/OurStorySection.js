import React from "react";
import Restaurant from "../assets/burgers5-background.jpeg";

const OurStorySection = () => {
  return (
    <section id="ourstory">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Restaurant}
              alt="Restaurant Background"
              className="w-100 h-75"
            />
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold">Our Story</h1>

            <p className="lead">
              We strive to have fresh never frozen burgers made daily! Come and
              try our charcole cooked burgers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
