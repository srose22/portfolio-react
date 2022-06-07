import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">Contact</h1>
            <p>
              Have a question or concern? <br /> Fill out this form or contact
              us on one of our social media's and we will get back to you soon!
              <br />
            </p>
            <Form>
              <FormGroup>
                <Label htmlFor="inputName" className="form-label">
                  Name
                </Label>
                <Input type="text" className="form-control" id="inputName" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="inputEmail" className="form-label">
                  Email Address
                </Label>
                <Input type="email" className="form-control" id="inputEmail" />
              </FormGroup>

              <FormGroup>
                <p>Have any questions or concerns? Let us know here!</p>
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="text"
                />
              </FormGroup>

              <button type="submit" className="btn btn-outline-danger px-3">
                Send Message
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
