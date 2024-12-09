import VideoSection from "../components/VideoSection";
import Seccion6 from "../components/Seccion6Grid";

function Home() {
    return (
        <div>
            <VideoSection id="section1" videoSrc="/public/video1" title="Sección 1" />
            <VideoSection id="section2" videoSrc="/public/video2" title="Sección 2" />
            <VideoSection id="section3" videoSrc="/public/video3" title="Sección 3" />
            <VideoSection id="section4" videoSrc="/public/video4" title="Sección 4" />
            <VideoSection id="section5" videoSrc="/public/video5" title="Sección 5" />
            <Seccion6 />
        </div>
    );
}

export default Home;