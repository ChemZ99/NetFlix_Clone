import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GalleryCard from "./GalleryCard";
import RouterWrapper from "./RouterWrapper";
import NfFooter from "./NfFooter";
import HeaderBar from "./HeaderBar";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e315a45d&s=";

const SearchQueryArr = ["Csi", "Anime", "x-files"];

class Gallery extends Component {
  state = {
    search0: [],
    search1: [],
    search2: [],
  };

  fetchTVshowsData = async (index, state) => {
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
    this.fetchTVshowsData(0, "search0");
    this.fetchTVshowsData(1, "search1");
    this.fetchTVshowsData(2, "search2");
    console.log(this.state);
  };

  render() {
    return (
      <div className="gallery_rules">
        <HeaderBar />
        <div>
          <p className="display-6 text-white text-start ps-5">CSI</p>
          <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search0
                .filter(elem => elem.Type === "series")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">Anime</p>
          <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search1
                .filter(elem => elem.Type === "series")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">Thriller</p>
          <Container fluid className="overflow-hidden">
            <Row className="flex-nowrap gx-3">
              {this.state.search2
                .filter(elem => elem.Type === "series")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container>
        </div>
        <NfFooter />
      </div>
    );
  }
}

export default RouterWrapper(Gallery);
