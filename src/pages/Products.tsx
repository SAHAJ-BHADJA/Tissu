import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Leaf, DropletIcon, ShieldCheck, Recycle, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const categories = [
    'All Products',
    'Facial Tissues',
    'Bathroom Tissues',
    'Kitchen Towels',
    'Napkins',
    'Specialty Papers'
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Facial Tissues',
      description: 'Ultra-soft, 3-ply facial tissues made from 100% virgin pulp, perfect for sensitive skin.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg',
      category: 'Facial Tissues',
      features: ['3-ply softness', 'Virgin pulp', 'Dermatologically tested']
    },
    {
      id: 2,
      name: 'Bamboo Toilet Paper',
      description: 'Sustainable toilet paper made from FSC-certified bamboo, combining strength with eco-friendliness.',
      image: 'https://images.pexels.com/photos/6940148/pexels-photo-6940148.jpeg',
      category: 'Bathroom Tissues',
      features: ['Bamboo fiber', 'Plastic-free packaging', 'Biodegradable']
    },
    {
      id: 3,
      name: 'Eco Kitchen Towels',
      description: 'Strong, absorbent kitchen towels perfect for all cleaning needs, made with sustainable materials.',
      image: 'https://images.pexels.com/photos/4239056/pexels-photo-4239056.jpeg',
      category: 'Kitchen Towels',
      features: ['Super absorbent', 'Durable wet strength', 'Eco-friendly']
    },
    {
      id: 4,
      name: 'Organic Dinner Napkins',
      description: 'Elegant, soft napkins made from organic materials, perfect for any dining occasion.',
      image: 'https://images.pexels.com/photos/5824438/pexels-photo-5824438.jpeg',
      category: 'Napkins',
      features: ['Organic materials', 'Elegant texture', 'Biodegradable']
    },
    {
      id: 5,
      name: 'Natural Facial Tissues',
      description: 'Unbleached facial tissues with natural water-based binders, perfect for sensitive skin.',
      image: 'https://images.pexels.com/photos/3860786/pexels-photo-3860786.jpeg',
      category: 'Facial Tissues',
      features: ['Unbleached', 'Natural binders', 'Sensitive skin friendly']
    },
    {
      id: 6,
      name: 'Recycled Toilet Paper',
      description: 'High-quality toilet paper made from recycled materials without compromising on softness.',
      image: 'https://images.pexels.com/photos/6941088/pexels-photo-6941088.jpeg',
      category: 'Bathroom Tissues',
      features: ['100% recycled', 'Chlorine-free', 'Septic-safe']
    },
    {
      id: 7,
      name: 'Premium Kitchen Rolls',
      description: 'Extra strong kitchen towels made with sustainable virgin pulp for superior absorption.',
      image: 'https://images.pexels.com/photos/6942045/pexels-photo-6942045.jpeg',
      category: 'Kitchen Towels',
      features: ['Virgin pulp', 'Extra strong', 'Reusable when wet']
    },
    {
      id: 8,
      name: 'Eco Party Napkins',
      description: 'Colorful, sustainable napkins perfect for parties and events, made from recycled materials.',
      image: 'https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg',
      category: 'Napkins',
      features: ['Recycled materials', 'Variety of colors', 'Biodegradable']
    },
    {
      id: 9,
      name: 'Natural Gift Tissue',
      description: 'Delicate, unbleached tissue paper for beautiful gift presentations, made sustainably.',
      image: 'https://images.pexels.com/photos/1598024/pexels-photo-1598024.jpeg',
      category: 'Specialty Papers',
      features: ['Unbleached', 'Acid-free', 'Natural colors']
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All Products');

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7262776/pexels-photo-7262776.jpeg" 
            alt="Tissu products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl mb-6">
              Sustainable tissue paper products for every need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Our Products Stand Out</h2>
            <p className="section-subtitle">
              Every Tissu product is crafted with care, quality, and sustainability in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: 'Premium Materials',
                description: 'Made with carefully selected virgin pulp or FSC-certified bamboo for optimal quality.'
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: 'Natural Composition',
                description: 'Free from harmful additives, using only natural water-based binders.'
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: 'Skin-Friendly',
                description: 'Dermatologically tested and perfect for sensitive skin.'
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
                className="bg-white p-6 rounded-lg shadow-soft"
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
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <h2 className="text-3xl font-bold">Browse Our Products</h2>
            <div className="flex items-center mt-4 md:mt-0">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 mr-3">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section bg-primary bg-opacity-5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Our Eco-Friendly Promise</h2>
              <p className="text-gray-700 mb-6">
                Every Tissu product is created with our commitment to sustainability at its core. From responsible sourcing to biodegradable packaging, we ensure our products are as kind to the Earth as they are to you.
              </p>
              <ul className="space-y-4">
                {[
                  'Biodegradable and compostable materials',
                  'Plastic-free packaging options',
                  'Low-waste manufacturing process',
                  'Energy-efficient production',
                  'Water conservation practices'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mt-0.5">
                      <Recycle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
              <img 
                src="https://images.pexels.com/photos/7262397/pexels-photo-7262397.jpeg" 
                alt="Sustainable manufacturing" 
                className="rounded-lg shadow-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Bulk Orders for Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We offer special pricing and customized solutions for businesses. Contact our sales team to discuss your requirements.
            </p>
            <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;