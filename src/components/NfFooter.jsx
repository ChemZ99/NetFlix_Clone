import { Component } from "react";
import { CCircle, Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import RouterWrapper from "./RouterWrapper";

class Footer extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <div className="d-flex justify-content-center pb-3">
          <div className="pe-3">
            <Facebook color="white" size="30px" />
          </div>
          <div className="pe-3">
            <Instagram color="white" size="30px" />
          </div>
          <div className="pe-3">
            <Twitter color="white" size="30px" />
          </div>
          <div className="pe-3">
            <Youtube color="white" size="30px" />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column pe-5">
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Audio and Subtitles
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Media Center
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Privacy
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Contact Us
            </a>
          </div>
          <div className="d-flex flex-column pe-5">
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Audio Description
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Investor Relations
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Legal Notices
            </a>
          </div>
          <div className="d-flex flex-column pe-5">
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Help Center
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Jobs
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Cookie Preferences
            </a>
          </div>
          <div className="d-flex flex-column">
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Gift Cards
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Terms of Use
            </a>
            <a className="d-inline-block text-white text-decoration-none lh-lg" href="#">
              Corporate Information
            </a>
          </div>
        </div>
        <button className="btn btn-size text-white rounded-0 border border-3 border-nf-grey fs-6 mt-5 mb-4">
          Service Code
        </button>
        <p className="text-white footer-size">
          <CCircle color="white" /> 1997-2019 Netflix, Inc.{" "}
        </p>
      </div>
    );
  }
}

export default RouterWrapper(Footer);
