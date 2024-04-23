import { Container } from "react-bootstrap"

const HeroSection = () => {
        return (
            <div className="hero_front">
                 <p className="fs-6 text-white"><img src="/images/N_logo.png" alt="logo" height={20} /><span className="ms-2"></span> S E R I E S</p>
                 <img src="/images/hero_logo.png" alt="logo2" height={150} />
                 <p className="text-white mt-3 lh-1">Better Call Saul è una serie televisiva statunitense ideata da</p>
                 <p className="text-white lh-1"> Vince Gilligan e Peter Gould e trasmessa sul canale  </p>
                 <p className="text-white lh-1">via cavo AMC dall'8 febbraio 2015 al 15 agosto 2022</p>
            </div>
        )
}

export default HeroSection