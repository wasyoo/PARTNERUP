import React from "react";

const Form = () => {
  return (
    <div id="form" className="container form">
      <h2>Get in touch </h2>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <form role="form" className="go-right">
            <div className="form-group">
              <input
                placeholder="Your name"
                type="text"
                className="form-control"
                required
              />
              <label for="name">Your Name</label>
            </div>
            <div className="form-group">
              <input
                placeholder="Your Email"
                className="form-control"
                required
              />
              <label for="phone">Email</label>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                rows="10"
                className="form-control"
                required
              />
              <label for="message">Message</label>
            </div>
          </form>

          <button type="button" className="btn btn-success">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
