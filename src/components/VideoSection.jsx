import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const VideoSection = ({ id, videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("loadedmetadata", () => {
        setDuration(video.duration);
      });

      return () => {
        video.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleViewportLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.section
      id={id}
      className="video-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      onViewportLeave={handleViewportLeave} // Se detiene al salir de la sección
    >
      <video
        ref={videoRef}
        className="video-element"
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {!isPlaying && (
        <div className="overlay" onClick={handlePlayPause}>
          <button className="play-button" aria-label="Reproducir video">
            ▶️
          </button>
        </div>
      )}
      <div className="controls">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="time-controls">
          <button
            className="play-pause-button"
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pausar video" : "Reanudar video"}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;