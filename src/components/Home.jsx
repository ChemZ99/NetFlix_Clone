import HeaderBar from "./HeaderBar";
import Gallery from "./Gallery";
import Footer from "./NfFooter";
import Preview from "./Preview";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";


const Home = () => {
  return (
    <>
      <NavBar />
      <Preview />
      <HeroSection />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
