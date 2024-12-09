import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

/* Importar iconos */
import onuIcon from "../assets/onu.png";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Video de fondo */}
      <video
        className="hero-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../public/hero.mp4" type="video/mp4" />
      </video>

      {/* Contenido */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Premios */}
        <img
          src={onuIcon}
          alt="ONU"
          className="hero-icons"
        />

        {/* Título */}
        <h1 className="hero-title">
          Guardianes de la playa: <span>Salvando la vida submarina</span>
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          Objetivo 14: vida submarina
        </p>

        {/* Declaraciones */}
        <div className="hero-declarations">
          <p>
            Esta docuweb nace de la urgente necesidad de proteger nuestro
            planeta y de contribuir activamente a un desarrollo sostenible.
            Inspirada en la importancia de crear conciencia sobre los desafíos
            ambientales que enfrentamos en el Perú con el propósito es generar
            un impacto positivo, promoviendo acciones que beneficien tanto a la
            humanidad como al medio ambiente
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
      </motion.div>
    </div>
  );
};

export default Hero;