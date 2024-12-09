// src/components/SectionGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import CardItem from './CardItem';

/* Importar imagenes */
import BlogImage from '../assets/blog.png';
import PodcastImage from '../assets/podcast.png';
import HistorietaImage from '../assets/historieta.webp';
import FotosImage from '../assets/fotos.png';
import MapaImage from '../assets/mapa.webp';

const SectionGrid = () => {
  const cardData = [
    { title: 'Blog', link: '#', image: BlogImage },
    { title: 'Podcasts', link: '#', image: PodcastImage },
    { title: 'Historieta', link: '#', image: HistorietaImage },
    { title: 'Fotos', link: '#', image: FotosImage },
    { title: 'Mapa', link: '#', image: MapaImage },
  ];

  return (
    <Element name="section-grid" className="section-grid-container">
      {/* Encabezado principal */}
      <motion.div
        className="section-grid-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="section-title">Transmedia</h2>
        </div>
        <p className="section-subtitle">Selecciona la categoría que más te interese</p>
      </motion.div>
      
      {/* Grids */}
      <motion.div
        className="section-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            link={card.link}
            image={card.image}
          />
        ))}
      </motion.div>
    </Element>
  );
};

export default SectionGrid;