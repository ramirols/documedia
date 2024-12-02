import VideoSection from "../components/VideoSection";

function Home() {
    return (
        <div>
            <VideoSection id="section1" videoSrc="/assets/videos/video1.mp4" title="Sección 1" />
            <VideoSection id="section2" videoSrc="/assets/videos/video2.mp4" title="Sección 2" />
            <VideoSection id="section3" videoSrc="/assets/videos/video3.mp4" title="Sección 3" />
            <VideoSection id="section4" videoSrc="/assets/videos/video4.mp4" title="Sección 4" />
        </div>
    );
}

export default Home;