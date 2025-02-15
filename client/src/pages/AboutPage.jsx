import { FaUtensils, FaConciergeBell, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-[url('/restaurant-bg.jpg')] text-white">
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">
                {/* Title */}
                <motion.h1 
                    className="text-6xl font-extrabold text-orange-400 mb-6 tracking-wide"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    A Culinary Journey Awaits
                </motion.h1>
                
                {/* Intro Text */}
                <motion.p 
                    className="text-lg max-w-3xl leading-relaxed mb-8 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    At <span className="text-orange-400 font-semibold">The Great Indian</span>, we believe dining is more than just food—it's an **experience**.  
                    From intimate candlelit dinners to grand celebrations, we connect you with the finest restaurants  
                    for **seamless, unforgettable moments.**  
                </motion.p>

                {/* Features Section */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8 max-w-5xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    {/* Feature 1 */}
                    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
                        <FaUtensils className="text-orange-400 text-6xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Exquisite Dining</h2>
                        <p className="text-gray-300">Indulge in **handpicked restaurants** offering world-class cuisine and ambiance.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
                        <FaConciergeBell className="text-orange-400 text-6xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Effortless Experience</h2>
                        <p className="text-gray-300">From **VIP seating** to **special requests**, we ensure a personalized touch.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
                        <FaCalendarCheck className="text-orange-400 text-6xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Instant Reservations</h2>
                        <p className="text-gray-300">Secure your **perfect table** in seconds—no queues, no delays.</p>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button 
                    className="mt-8 bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-lg text-xl shadow-lg tracking-wide"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/login" className="hover:text-orange-300">Find your Perfect Spot</Link>
                </motion.button>
            </div>
        </div>
    );
}
