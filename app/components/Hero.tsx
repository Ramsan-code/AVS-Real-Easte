"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn } from '../utils/animations';

export function Hero() {
  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Premium Real Estate"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Discover Your Next Premium Property
        </h1>
        <p className="text-lg md:text-xl text-brand-cloud/90 mb-8 max-w-2xl mx-auto">
          Explore an exclusive portfolio of housing, shop buildings, and prime locations tailored to elevate your lifestyle and business.
        </p>
        <Button
          onClick={scrollToProperties}
          size="lg"
          className="bg-brand-lime text-brand-forest hover:bg-brand-lime/90 font-semibold text-lg px-8 py-6 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          Explore Properties
        </Button>
      </motion.div>
    </section>
  );
}
