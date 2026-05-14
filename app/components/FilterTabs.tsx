"use client";

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CATEGORIES } from '../utils/constants';
import { Category } from '../types';

interface FilterTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="w-full flex justify-center mb-12">
      <Tabs 
        value={activeCategory} 
        onValueChange={(value) => onCategoryChange(value as Category)}
        className="w-full max-w-2xl"
      >
        <TabsList className="grid w-full grid-cols-3 bg-brand-cloud p-1 rounded-xl shadow-sm h-14">
          {CATEGORIES.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="rounded-lg data-[state=active]:bg-brand-forest data-[state=active]:text-white data-[state=active]:shadow-md transition-all h-full text-xs sm:text-sm md:text-base font-medium"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
