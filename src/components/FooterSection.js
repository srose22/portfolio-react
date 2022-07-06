import React from "react";

const FooterSection = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#" className="me-4 text-reset">
            <ion-icon name="logo-instagram"></ion-icon>
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
                <ion-icon name="location-outline"></ion-icon> Toronto, Ontario
              </p>
              <p>
                <ion-icon name="mail-outline"></ion-icon> samsgrill@gmail.com
              </p>
              <p>
                <ion-icon name="call-outline"></ion-icon> 234-567-890
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
