// src/components/CardItem.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CardItem = ({ image, title, link }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <img src={image} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </a>
    </motion.div>
  );
};

export default CardItem;