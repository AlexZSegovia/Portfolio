"use client"; // Necesario para que funcionen los hooks de Framer Motion

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se ejecuta una vez
    threshold: 0.1,    // La animación se activa cuando el 10% del elemento es visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;