"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn } from '../utils/animations';

export function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-forest/10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-forest tracking-tight">
              Elevating Real Estate Experiences
            </h2>
            <div className="w-20 h-1.5 bg-brand-lime rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principles of integrity, innovation, and unparalleled service, our agency has been connecting discerning clients with extraordinary properties for over a decade.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are seeking a lucrative commercial investment, a prime piece of land, or your dream family home, our dedicated team of experts provides a bespoke approach tailored precisely to your unique aspirations.
            </p>
            <div className="pt-6 flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
              <div>
                <p className="text-4xl font-bold text-brand-forest mb-1">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-forest mb-1">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Properties Sold</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-forest mb-1">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Commitment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
