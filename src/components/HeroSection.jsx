import { Button, Container } from "react-bootstrap"
import { InfoCircle, PlayFill } from "react-bootstrap-icons"

const HeroSection = () => {
        return (
            <div className="hero_front">
                 <p className="fs-6 text-white"><img src="/images/N_logo.png" alt="logo" height={20} /><span className="ms-2"></span> S E R I E S</p>
                 <img src="/images/hero_logo.png" alt="logo2" height={150} />
                 <p className="text-white mt-3 lh-1">Better Call Saul è una serie televisiva statunitense ideata da</p>
                 <p className="text-white lh-1"> Vince Gilligan e Peter Gould e trasmessa sul canale  </p>
                 <p className="text-white lh-1">via cavo AMC dall'8 febbraio 2015 al 15 agosto 2022</p>
                 <div>
                    <Button variant="light" size="lg" className="me-2 ps-4 pe-4"><PlayFill size={30}/> Play</Button> <Button variant="secondary" size="lg" className="ps-4 pe-4"><InfoCircle size={30} className="me-2"/>    More Info</Button>
                 </div>
            </div>
        )
}

export default HeroSection