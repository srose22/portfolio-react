import React from "react";
import BaconCheese from "../assets/bacon-cheeseburger.jpg";
import BaconFries from "../assets/baconburger-fries.jpg";
import Cheeseburger from "../assets/cheeseburger.jpg";
import CheeseburgerFries from "../assets/cheeseburger-fries.jpg";

const MenuSection = () => {
  return (
    <section id="menu">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3>Burger Menu</h3>
            <h2 className="display-5 fw-bold">FRESH NEVER FROZEN BURGERS</h2>
            <a className="btn btn-dark fw-bold" href="/" role="button">
              Order Now
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center">
                  <img
                    src={BaconCheese}
                    alt="bacon cheeseburger"
                    className="hamburger-image img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">
                      Bacon Cheeseburger
                    </h5>
                    <p className="card-text mb-2">
                      Juicy cheeseburger with bacon <br />{" "}
                      <b>Your choice of toppings </b>
                    </p>
                    <p className="lead fw-bold fs-4 text-danger">$5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center">
                  <img
                    src={BaconFries}
                    alt="bacon burger with fries"
                    className="hamburger-image img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">
                      Bacon Cheeseburger with Fries
                    </h5>
                    <p className="card-text mb-2">
                      Juicy cheeseburger with bacon & fries <br />{" "}
                      <b>Your choice of toppings </b>
                    </p>
                    <p className="lead fw-bold fs-4 text-danger">$8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center">
                  <img
                    src={Cheeseburger}
                    alt="cheeseburger"
                    className="hamburger-image img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">Cheeseburger</h5>
                    <p className="card-text mb-2">
                      Juicy cheeseburger <br /> <b>Your choice of toppings </b>
                    </p>
                    <p className="lead fw-bold fs-4 text-danger">$5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center">
                  <img
                    src={CheeseburgerFries}
                    alt="cheeseburger fries"
                    className="hamburger-image img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">
                      Cheeseburger with Fries
                    </h5>
                    <p className="card-text mb-2">
                      Juicy cheeseburger & fries <br />{" "}
                      <b>Your choice of toppings </b>
                    </p>
                    <p className="lead fw-bold fs-4 text-danger">$8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
