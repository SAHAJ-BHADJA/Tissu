import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import ProductCard from '../components/ProductCard';
import landingImage from "../images/home_page.jpg";

const Home: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Facial Tissues',
      description: 'Ultra-soft, 3-ply facial tissues for everyday comfort.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg',
      category: 'Facial Tissues',
    },
    {
      id: 2,
      name: 'Eco-Friendly Toilet Paper',
      description: 'Sustainable, recycled toilet paper that\'s gentle on skin and the environment.',
      image: 'https://images.pexels.com/photos/6940148/pexels-photo-6940148.jpeg',
      category: 'Bathroom Tissues',
    },
    {
      id: 3,
      name: 'Kitchen Paper Towels',
      description: 'Strong, absorbent paper towels for all your kitchen cleaning needs.',
      image: 'https://images.pexels.com/photos/4239056/pexels-photo-4239056.jpeg',
      category: 'Kitchen Towels',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Office Manager',
      company: 'Global Enterprises',
      content: 'Tissu products have transformed our office experience. The quality is unmatched, and our employees love the softness and durability.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Hotel Chain Director',
      company: 'Luxury Stays',
      content: 'We\'ve been using Tissu in all our hotels for the past year. The quality consistency and eco-friendly options align perfectly with our brand values.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      id: 3,
      name: 'Emma Chen',
      position: 'Sustainability Officer',
      company: 'Green Living Co.',
      content: 'Finally, a tissue company that truly cares about sustainability. Tissu\'s commitment to environmental responsibility is evident in every product.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src= {landingImage} 
            alt="Tissu tissue papers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Softness Crafted with Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Premium tissue paper products for everyday comfort and sustainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/about" className="btn bg-white text-gray-900 hover:bg-gray-100">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose Tissu?</h2>
            <p className="section-subtitle">
              Our commitment to quality, comfort, and sustainability sets us apart in the tissue paper industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: 'Premium Quality',
                description: 'Our products are crafted with the finest materials for exceptional softness and strength.'
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: 'Eco-Friendly',
                description: 'Committed to sustainability with biodegradable and recycled paper options.'
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: 'Certified Excellence',
                description: 'Meeting the highest industry standards with international certifications.'
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: 'Customer Satisfaction',
                description: 'Dedicated to providing products that enhance comfort in everyday life.'
              }
            ].map((feature, index) => (
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
                className="bg-white p-6 rounded-lg shadow-soft hover-scale"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Featured Products</h2>
            <p className="section-subtitle">
              Discover our range of premium tissue paper products designed for comfort and everyday use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link to="/products" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      {/* <section className="section bg-primary bg-opacity-5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
              <p className="text-gray-700 mb-6">
                At Tissu, we believe in creating products that are gentle on both you and the environment. Our sustainable practices ensure we minimize our ecological footprint while maximizing comfort.
              </p>
              <ul className="space-y-4">
                {[
                  'Responsibly sourced materials from managed forests',
                  'Biodegradable and recyclable packaging',
                  'Energy-efficient manufacturing processes',
                  'Water conservation initiatives in production',
                  'Zero-waste commitment across our supply chain'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mt-0.5">
                      <Leaf className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary mt-8">
                Learn More About Our Initiatives
              </Link>
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
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/7262397/pexels-photo-7262397.jpeg" 
                alt="Sustainability at Tissu" 
                className="w-full h-[500px] object-cover rounded-lg shadow-medium"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-soft">
                <img 
                  src="https://images.pexels.com/photos/4239012/pexels-photo-4239012.jpeg" 
                  alt="Eco-friendly tissue" 
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from businesses and organizations that trust Tissu for their tissue paper needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Tissu Quality?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our premium tissue paper products can meet your needs.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;