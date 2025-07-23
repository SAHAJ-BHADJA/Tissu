import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Leaf, ShieldCheck, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsHeroImage from '../images/products_hero.jpeg';
import browseToiletPaperImage from "../images/browse_toilet_paper.jpeg";
import browseDinnerPaperImage from "../images/browse_dinner_paper.jpeg";
import browseFacialPaperImage from "../images/browse_facial_paper.webp";
import browseKitchenPaperImage from "../images/browse_kitchen_paper.webp";

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
    'Bathroom Tissues',
    'Kitchen Towels',
    'Napkins'
  ];

  const products = [

    {
      id: 1,
      name: 'Toilet Paper',
      description: 'Sustainable toilet paper made from FSC-certified bamboo, combining strength with eco-friendliness.',
      image: browseToiletPaperImage,
      category: 'Bathroom Tissues',
      features: ['Bamboo fiber', 'Plastic-free packaging', 'Biodegradable']
    },
    {
      id: 2,
      name: 'Organic Dinner Napkins',
      description: 'Elegant, soft napkins made from organic materials, perfect for any dining occasion.',
      image: browseDinnerPaperImage,
      category: 'Napkins',
      features: ['Organic materials', 'Elegant texture', 'Biodegradable']
    },
    {
      id: 3,
      name: 'Natural Facial Tissues',
      description: 'Unbleached facial tissues with natural water-based binders, perfect for sensitive skin.',
      image: browseFacialPaperImage,
      category: 'Facial Tissues',
      features: ['Unbleached', 'Natural binders', 'Sensitive skin friendly']
    },
    {
      id: 5,
      name: 'Premium Kitchen Rolls',
      description: 'Extra strong kitchen towels made with sustainable virgin pulp for superior absorption.',
      image: browseKitchenPaperImage,
      category: 'Kitchen Towels',
      features: ['Virgin pulp', 'Extra strong', 'Reusable when wet']
    },

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
            src={productsHeroImage} 
            alt="Tissu products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
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