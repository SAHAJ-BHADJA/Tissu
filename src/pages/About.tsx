import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Shield, Leaf, Droplet, Ban, Recycle } from 'lucide-react';
import aboutHeroImage from '../images/about_hero.jpg';
import aboutStory1Image from '../images/about_story1.jpg';
import aboutStory2Image from '../images/about_story2.jpg';
import aboutStory3Image from '../images/about_story3.jpeg';
import aboutStory4Image from '../images/about_story4.jpg';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const ingredients = [
    {
      title: '100% Virgin or FSC-Certified Bamboo Pulp',
      description: 'Carefully sourced from responsibly managed forests or fast-growing bamboo, ensuring strength and softness.',
      icon: <Leaf className="h-6 w-6 text-primary" />
    },
    {
      title: 'Natural Water-Based Binder',
      description: 'Used in minimal amounts to help bind the fibers naturally — safe for skin, safe for the planet.',
      icon: <Droplet className="h-6 w-6 text-primary" />
    },
    {
      title: 'No Harmful Additives',
      description: 'Free from bleach, dyes, chlorine, and artificial fragrances.',
      icon: <Ban className="h-6 w-6 text-primary" />
    },
    {
      title: 'Filtered Water in Manufacturing',
      description: 'Ensuring clean and hygienic processing at every stage.',
      icon: <Recycle className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImage}
            alt="Tissu manufacturing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story: Softness with a Purpose
            </h1>
            <p className="text-xl mb-6">
              Creating tissue paper that's gentle on your skin and kinder to the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-4">
                At Tissu, we believe that even the smallest essentials can leave the greatest impact. Our journey began with a simple thought — to create tissue paper that's gentle on your skin and kinder to the planet.
              </p>
              <p className="text-gray-700 mb-4">
                Frustrated by the wasteful, chemical-heavy products dominating the market, we set out to redefine softness and sustainability, one sheet at a time.
              </p>
              <p className="text-gray-700">
                From bathrooms to boardrooms, from kitchen spills to emotional moments — we realized tissues aren't just products. They're part of life's everyday stories.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={aboutStory1Image} 
                  alt="Eco-friendly tissue paper" 
                  className="rounded-lg shadow-medium h-48 object-cover"
                />
                <img 
                  src={aboutStory2Image}
                  alt="Sustainable production" 
                  className="rounded-lg shadow-medium h-48 object-cover"
                />
                <img 
                  src={aboutStory3Image} 
                  alt="Quality control" 
                  className="rounded-lg shadow-medium h-48 object-cover"
                />
                <img 
                  src={aboutStory4Image} 
                  alt="Finished products" 
                  className="rounded-lg shadow-medium h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Composition</h2>
            <p className="section-subtitle">
              What Makes Our Tissue Paper the Best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1 
                    }
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-soft flex items-start"
              >
                <div className="mr-4 mt-1">{ingredient.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{ingredient.title}</h3>
                  <p className="text-gray-600">{ingredient.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}


      {/* Customer Benefits Section */}
      <section className="section bg-primary bg-opacity-5">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Customers Love Us</h2>
            <p className="section-subtitle">
              Experience the difference of truly sustainable tissue paper.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: 'Ultra-Soft Texture',
                description: 'Gentle on sensitive skin without compromising on strength.'
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: 'Strong & Reliable',
                description: 'Perfect for every use, from sneezes to spills.'
              },
              {
                icon: <Droplet className="h-10 w-10 text-primary" />,
                title: 'Septic-Safe',
                description: 'Fully flushable and safe for all plumbing systems.'
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: 'Dermatologically Tested',
                description: 'Cruelty-free and safe for all skin types.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1 
                    }
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-soft text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;