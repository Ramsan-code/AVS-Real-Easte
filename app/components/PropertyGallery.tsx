"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFilteredProperties } from '../hooks/useFilteredProperties';
import { FilterTabs } from './FilterTabs';
import { PropertyCard } from './PropertyCard';
import { PropertyModal } from './PropertyModal';
import { Property } from '../types';

export function PropertyGallery() {
  const { activeCategory, setActiveCategory, filteredProperties } = useFilteredProperties('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section className="py-20 bg-gray-50 min-h-screen" id="properties">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-forest mb-4">Property Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of premium properties. Filter by category to find your perfect match.
          </p>
        </div>

        <FilterTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={property} onClick={setSelectedProperty} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-400">No properties found in this category.</h3>
          </div>
        )}

        <PropertyModal 
          property={selectedProperty} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      </div>
    </section>
  );
}
