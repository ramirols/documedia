import { useEffect, useState } from "react";

const FooterProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="footer-progress">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, height: "5px", background: "#FF6347" }}
      ></div>
    </div>
  );
};

export default FooterProgress;