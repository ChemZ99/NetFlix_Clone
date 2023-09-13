import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GalleryCard from "./GalleryCard";
import RouterWrapper from "./RouterWrapper";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e315a45d&s=";

const SearchQueryArr = ["harry%20potter", "lord%20of%20the%20rings", "star%20wars"];

class Gallery extends Component {
  state = {
    search0: [],
    search1: [],
    search2: [],
  };

  fetchGalleryData = async (index, state) => {
    try {
      const response = await fetch(`${URL}${SearchQueryArr[index]}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data.Search);
        this.setState({ [state]: data.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchGalleryData(0, "search0");
    this.fetchGalleryData(1, "search1");
    this.fetchGalleryData(2, "search2");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <p className="display-6 text-white text-start ps-5">Harry Potter</p>
          <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search0
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">Lord of the Rings</p>
          <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search1
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">Star Wars</p>
          <Container fluid className="overflow-hidden">
            <Row className="flex-nowrap gx-3">
              {this.state.search2
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default RouterWrapper(Gallery);
