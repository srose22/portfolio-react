import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faHome} />

          <a href="#" className="me-4 text-reset">
            <i className="fa-brands fa-facebook-messenger fa-2x" />
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fa-brands fa-instagram fa-2x" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Sam's Grill
              </h6>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 " /> Toronto, Ontario, Canada
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                samsgrill@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" />
                234-567-890
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
