import React, { useState } from "react";
import "./Contactus.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactus = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    const array = [];
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      array.push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Form Submitted Successfully");
      console.log(array);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log("HandleInput", { ...state, [name]: value });
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <ToastContainer position="top-center" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 inputFields">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4 fw-medium">Send us a message</h3>
                      <form
                        id="contactForm"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12 my-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                value={name}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 my-1">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 my-1">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleInputChange}
                                value={subject}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 my-1">
                            <div className="form-group">
                              <textarea
                                type="text"
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                cols="30"
                                rows="6"
                                onChange={handleInputChange}
                                value={message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 my-1">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="button"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3 className="fw-bold">Contact us</h3>
                      <p className="mb-4 text-secondary">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-baseline">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="mx-3">
                            <span>Address:</span>
                            <span className="mx-1 text-secondary text-break add">
                              Om bhawan, Amli Road, Pindwara, Sirohi , Rajasthan
                              307022
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-baseline">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3 d-flex align-items-center">
                          <p className="mx-3">
                            <span>Phone:</span>
                            <a href="tel://123456789" className="mx-1">
                              +91-9664408473
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-baseline">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="mx-3">
                            <span>Email:</span>
                            <a
                              href="mailto:kuldeeptak2211@gmail.com"
                              className="text-break mx-1"
                            >
                              kuldeeptak2211@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-baseline">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="mx-3">
                            <span>Website:</span>
                            <a href="#" className="mx-1 text-break">
                              www.kuldeeptak.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
