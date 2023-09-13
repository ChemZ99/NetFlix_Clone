import Col from "react-bootstrap/Col";
import { Component } from "react";
import RouterWrapper from "./RouterWrapper";
import { Link } from "react-router-dom";

class GalleryCard extends Component {
  render() {
    return (
      <Col className="d-flex" xs={4} md={3} lg={2} xxl={1} key={this.props.key}>
        <Link to={"/details/" + this.props.data.imdbID}>
          {" "}
          <img className="img-rules" src={this.props.data.Poster} alt="poster" />{" "}
        </Link>
      </Col>
    );
  }
}

export default RouterWrapper(GalleryCard);
