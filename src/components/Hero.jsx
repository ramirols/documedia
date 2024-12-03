import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Imagen de fondo */}
      <div className="hero-bg"></div>

      {/* Contenido */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Premios */}
        <img
          src="/assets/images/premios.png"
          alt="Premios"
          className="hero-awards"
        />

        {/* Título */}
        <h1 className="hero-title">
          Guardianes de la playa: <span>SALVANDO LA VIDA MARINA</span>
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          Trata de personas con fines de explotación sexual en Argentina
        </p>

        {/* Declaraciones */}
        <div className="hero-declarations">
          <p>
            Declarado de interés municipal por el Honorable Concejo Municipal
            de Rosario Decreto Nº 42492<br />
            21/11/2014
          </p>
          <p>
            Declaración de interés. Honorable Cámara de Diputados de la Nación.
            Resolución Nº 5.486-D-2015.<br />
            CABA, 24/11/2015.
          </p>
        </div>

        {/* Botón de scroll */}
        <ScrollLink
          to="section1"
          smooth={true}
          duration={600}
          className="hero-scroll-btn"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="scroll-container"
          >
            SCROLL PARA COMENZAR
          </motion.div>
        </ScrollLink>
      </motion.div>.
    </div>
  );
};

export default Hero;