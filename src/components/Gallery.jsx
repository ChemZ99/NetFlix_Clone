import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RouterWrapper from "./RouterWrapper";
import Slider from "./NetflixSlider"


// const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e315a45d&s=";

// const SearchQueryArr = ["harry%20potter", "lord%20of%20the%20rings", "star%20wars"];

const movies = [
  {
    id: 1,
    image: '/images/carousel1.webp',
    imageBg: '',
    title: 'Interstellar'
  },
  {
    id: 2,
    image: '/images/carousel2.webp',
    imageBg: '',
    title: 'Vikings'
  },
  {
    id: 3,
    image: '/images/carousel3.jpg',
    imageBg: '',
    title: 'The Witcher',
  },
  {
    id: 4,
    image: '/images/carousel4.webp',
    imageBg: '',
    title: 'Matrix'
  },
  {
    id: 5,
    image: '/images/carousel5.jpg',
    imageBg: '',
    title: 'Stranger Things'
  },
  {
    id: 6,
    image: '/images/carousel6.webp',
    imageBg: '',
    title: 'Breaking Bad'
  },
  {
    id: 7,
    image: '/images/carousel7.jpg',
    imageBg: '',
    title: 'Baki Hanma'
  },
  {
    id: 8,
    image: '/images/carousel8.jpg',
    imageBg: '',
    title: 'CyberPunk'
  },
  {
    id: 9,
    image: '/images/carousel9.webp',
    imageBg: '',
    title: 'Fight Club'
  },
  {
    id: 10,
    image: '/images/carousel10.webp',
    imageBg: '',
    title: 'Attack on Titan'
  },
  {
    id: 11,
    image: '/images/carousel11.webp',
    imageBg: '',
    title: 'American Psycho'
  },
  {
    id: 12,
    image: '/images/carousel12.jpg',
    imageBg: '',
    title: 'La regina degli scacchi'
  }
];

function Gallery () {
  // state = {
  //   search0: [],
  //   search1: [],
  //   search2: [],
  // };



  // fetchGalleryData = async (index, state) => {
  //   try {
  //     const response = await fetch(`${URL}${SearchQueryArr[index]}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.Search);
  //       this.setState({ [state]: data.Search });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // componentDidMount = () => {
  //   //this.fetchGalleryData(0, "search0");
  //   //this.fetchGalleryData(1, "search1");
  //   //this.fetchGalleryData(2, "search2");
  //   console.log(this.state);
  // };

  
    return (
      <div>
        <div>
          <p className="display-6 text-white text-start ps-5">Currently Trending</p>
          {/* <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search0
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container> */}
          <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">IMDB top Rated</p>
          {/* <Container fluid>
            <Row className="flex-nowrap overflow-hidden">
              {this.state.search1
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container> */}
          <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
        <div>
          <p className="display-6 text-white text-start ps-5">For You</p>
          {/* <Container fluid className="overflow-hidden">
            <Row className="flex-nowrap gx-3">
              {this.state.search2
                .filter(elem => elem.Type === "movie")
                .map(elem => (
                  <GalleryCard key={elem.index} data={elem} />
                ))}
            </Row>
          </Container> */}
          <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
      </div>
    );
  }


export default RouterWrapper(Gallery);
