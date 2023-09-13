import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import RouterWrapper from "./RouterWrapper";

class GenreButton extends Component {
  render() {
    return (
      <Dropdown className="d-inline-block" data-bs-theme="dark">
        <Dropdown.Toggle className="genre-button-rules">Genres</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Sagas</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Films</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Series</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Documentaries</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default RouterWrapper(GenreButton);
