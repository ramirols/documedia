import VideoSection from "../components/VideoSection";
import Seccion2 from "../components/Seccion2";

function Home() {
    return (
        <div>
            <VideoSection id="section1" videoSrc="/public/seccion1.mp4" title="Sección 1" />
            <Seccion2 />
        </div>
    );
}

export default Home;