import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4545161/pexels-photo-4545161.jpeg" 
            alt="Contact Tissu" 
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
              Get in Touch
            </h1>
            <p className="text-xl mb-6">
              We'd love to hear from you. Reach out for inquiries, feedback, or collaboration opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Multiple ways to reach our team for assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="h-10 w-10 text-primary" />,
                title: 'Phone',
                content: '+1 (234) 567-8900',
                link: 'tel:+12345678900'
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: 'Email',
                content: 'info@tissu.com',
                link: 'mailto:info@tissu.com'
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: 'Address',
                content: '123 Paper Street, Suite 100, New York, NY 10001',
                link: 'https://maps.google.com'
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: 'Business Hours',
                content: 'Monday - Friday: 9am - 5pm',
                link: null
              }
            ].map((item, index) => (
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
                className="bg-white p-6 rounded-lg shadow-soft text-center hover-scale"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-gray-600 hover:text-primary transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Bulk Orders">Bulk Orders</option>
                      <option value="Partnership Opportunities">Partnership Opportunities</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary inline-flex items-center"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </motion.div>
            
            {/* Map */}
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
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                Our headquarters is located in the heart of New York City. Feel free to stop by during business hours.
              </p>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-medium h-[400px] relative">
                {/* Placeholder for map - in a real implementation, you would embed Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary opacity-30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="font-semibold text-lg">Tissu Headquarters</h3>
                  <p className="text-gray-600">123 Paper Street, Suite 100, New York, NY 10001</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Do you offer custom branding for business orders?',
                answer: 'Yes, we offer custom branding options for bulk orders, including logo printing and custom packaging. Please contact our sales team for details and minimum order requirements.'
              },
              {
                question: 'What is your minimum order quantity for wholesale?',
                answer: 'Our minimum order quantities vary by product line. For standard products, the minimum is typically 100 units, while custom products may require higher minimums. Please contact us for specific information.'
              },
              {
                question: 'Are your products environmentally friendly?',
                answer: 'Yes, we offer a range of eco-friendly products made from sustainable materials like recycled paper and bamboo. All our products are manufactured using processes designed to minimize environmental impact.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship to select international locations. Shipping rates and delivery times vary by destination. Please contact us for specific shipping information for your location.'
              },
              {
                question: 'Can I request product samples before placing a large order?',
                answer: 'Absolutely! We offer sample kits for businesses considering bulk orders. There may be a small fee for samples, which is credited towards your first order.'
              }
            ].map((faq, index) => (
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
                className="mb-6"
              >
                <details className="bg-white rounded-lg shadow-soft overflow-hidden">
                  <summary className="p-6 cursor-pointer font-semibold text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="text-primary">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;