import * as Icon from "react-bootstrap-icons";
import { Component } from "react";
import GenreButton from "./GenreButton";
import { Link, NavLink, useLocation } from "react-router-dom";
import RouterWrapper from "./RouterWrapper";

class HeaderBar extends Component {
  chooseName = () => {
    if (this.props.location.pathname === "/") return "Movies";
    else if (this.props.location.pathname === "/Details") return "Details";
    else if (this.props.location.pathname === "/TVshows") return "TVshows";
  };

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="pt-2 ps-4">
          <p className="d-inline-block display-6 fw-bold text-white me-4 mb-0">{this.chooseName()}</p>
          <GenreButton />
        </div>
        <div className="d-flex align-items-center pe-5">
          <Icon.GridFill className="me-4" color="white" size="25px" />
          <Icon.Grid3x3GapFill color="white" size="25px" />
        </div>
      </div>
    );
  }
}

export default RouterWrapper(HeaderBar);
