"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn, staggerContainer } from '../utils/animations';
import { properties } from '../utils/propertyData';
import { PropertyCard } from './PropertyCard';

export function FeaturedItems() {
  const { ref, controls } = useScrollAnimation();
  
  // Select a few featured items (e.g., first 3)
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-20 bg-brand-cloud" id="featured">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-forest mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked selections from our premium portfolio offering exceptional value and unparalleled luxury.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={fadeIn}>
              <PropertyCard property={property} onClick={() => {}} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
