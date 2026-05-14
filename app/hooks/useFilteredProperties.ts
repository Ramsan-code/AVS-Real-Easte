import { useState, useMemo } from 'react';
import { Property, Category } from '../types';
import { properties as allProperties } from '../utils/propertyData';

export function useFilteredProperties(initialCategory: Category = 'All') {
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  const filteredProperties = useMemo(() => {
    if (activeCategory === 'All') {
      return allProperties;
    }
    return allProperties.filter((property) => property.category === activeCategory);
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredProperties,
  };
}
