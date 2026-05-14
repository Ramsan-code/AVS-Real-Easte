"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Property } from '../types';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:max-w-4xl md:max-w-5xl p-0 overflow-hidden bg-brand-cloud border-none">
        <VisuallyHidden>
          <DialogTitle>{property.name} Details</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-brand-forest text-brand-lime px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              {property.category}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
            <h2 className="text-3xl font-bold text-brand-forest mb-2">{property.name}</h2>
            <p className="text-3xl font-semibold text-brand-forest mb-6">
              ${property.price.toLocaleString()}
            </p>
            
            <div className="flex items-center text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{property.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {property.bedrooms && (
                <div className="flex items-center text-brand-forest">
                  <div className="bg-brand-lime/20 p-2 rounded-full mr-3">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Bedrooms</p>
                    <p className="font-semibold">{property.bedrooms}</p>
                  </div>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center text-brand-forest">
                  <div className="bg-brand-lime/20 p-2 rounded-full mr-3">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center text-brand-forest">
                <div className="bg-brand-lime/20 p-2 rounded-full mr-3">
                  <Square className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Square Feet</p>
                  <p className="font-semibold">{property.squareFeet.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="mb-8 flex-grow">
              <h3 className="text-xl font-bold text-brand-forest mb-3">About this property</h3>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            <Button 
              className="w-full bg-brand-forest text-white hover:bg-brand-forest/90 py-6 text-lg rounded-xl mt-auto"
              onClick={() => alert('Contact agent form would open here.')}
            >
              Contact Agent
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
