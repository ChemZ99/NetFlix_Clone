import { Component } from "react";
import RouterWrapper from "./RouterWrapper";
import { Container } from "react-bootstrap";
import NfFooter from "./NfFooter";
import HeaderBar from "./HeaderBar";

const URL = "http://www.omdbapi.com/?apikey=e315a45d&i=";

class Details extends Component {
  state = {
    movie: {},
  };

  fetchMovie = async () => {
    try {
      const response = await fetch(`${URL}${this.props.params.imdbID}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ movie: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchMovie();
  };

  render() {
    return (
      <>
        <HeaderBar />
        <Container fluid>
          <img src={this.state.movie.Poster} alt="poster" />
          <p className="text-white display-3">{this.state.movie.Title}</p>
          <p className="text-white">{this.state.movie.Genre}</p>
          <p className="text-white">Main Actors - {this.state.movie.Actors}</p>
          <p className="text-white">Metascore Rating - {this.state.movie.Metascore}</p>
          <p className="text-white">{this.state.movie.Plot}</p>
        </Container>
        <NfFooter />
      </>
    );
  }
}

export default RouterWrapper(Details);
