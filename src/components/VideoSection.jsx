import { motion } from "framer-motion";

const VideoSection = ({ id, videoSrc, title }) => {
  return (
    <motion.section
      id={id}
      className="video-section section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <h2>{title}</h2>
    </motion.section>
  );
};

export default VideoSection;