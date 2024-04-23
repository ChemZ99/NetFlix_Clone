import { useState } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const Preview = () => {

    const [light, setLight] = useState(true);

    return (
        <div className="preview">
            <div className="player-wrapper">
            <ReactPlayer className="react-player" playing={true} muted={true} controls={false} width="100%" height="100%" url="/images/preview_video.mp4" light={light ? false : "/images/preview/front.jpg"}
            onEnded={() => {setLight(false)}}
            />
            </div>
        </div>
    );
}

export default Preview;