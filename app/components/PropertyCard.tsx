"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-none bg-white"
      onClick={() => onClick(property)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(property);
        }
      }}
    >
      <div className="relative h-64 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-brand-forest text-brand-lime px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {property.category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-brand-forest mb-2">{property.name}</h3>
        <p className="text-2xl font-semibold text-brand-forest mb-4">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center justify-between text-gray-500 text-sm border-t border-gray-100 pt-4">
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.squareFeet.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
