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
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-brand-cloud/80 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-brand-forest/5 gap-1 h-auto sm:h-14">
          {CATEGORIES.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="rounded-xl data-[state=active]:bg-brand-forest data-[state=active]:text-brand-lime data-[state=active]:shadow-md transition-all py-3 sm:py-0 sm:h-full text-sm sm:text-base font-semibold text-brand-forest/70 hover:bg-white/50 data-[state=active]:hover:bg-brand-forest"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
