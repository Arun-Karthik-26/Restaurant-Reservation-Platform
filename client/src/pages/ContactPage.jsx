import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-gray-950 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-20"></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">
                
                {/* Title */}
                <motion.h1 
                    className="text-5xl md:text-6xl font-extrabold text-orange-400 mb-6 tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    className="text-lg max-w-3xl leading-relaxed mb-10 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Whether you have a question, feedback, or just want to say hello, 
                    we're here to help. Reach out to us anytime!
                </motion.p>

                {/* Contact Info Grid */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8 max-w-5xl text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* Phone */}
                    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                        <FaPhoneAlt className="text-orange-400 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
                        <p className="text-gray-300">+1 234 567 890</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                        <FaEnvelope className="text-orange-400 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Email</h2>
                        <p className="text-gray-300">support@thegreatindian.com</p>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                        <FaMapMarkerAlt className="text-orange-400 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
                        <p className="text-gray-300">123 Main Street, New York, NY 10001</p>
                    </div>
                </motion.div>

                {/* Google Maps Embed */}
                <motion.div 
                    className="mt-10 w-full max-w-4xl h-64 rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798890287!2d-74.25986690231287!3d40.69714942396592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af1801b8ff%3A0x697c8dd70553e3b3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1648244537471!5m2!1sen!2sin" 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className="mt-12 w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    <form className="flex flex-col space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 h-28"
                        ></textarea>
                        <motion.button 
                            type="submit" 
                            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-lg text-xl shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                {/* Social Media Links */}
                <motion.div 
                    className="mt-8 flex space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <a href="#" className="text-orange-400 text-2xl hover:text-white transition duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-orange-400 text-2xl hover:text-white transition duration-300">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-orange-400 text-2xl hover:text-white transition duration-300">
                        <FaInstagram />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
