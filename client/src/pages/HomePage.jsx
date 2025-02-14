import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div className="relative h-screen bg-cover bg-center bg-[url('/download.png')]">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Experience the Best Dining in Town
                </motion.h1>

                <motion.p 
                    className="text-lg mb-6 max-w-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Enjoy exquisite flavors, a warm ambiance, and unforgettable moments at our restaurant.
                </motion.p>

                <motion.button 
                    className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-lg text-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    Reserve a Table
                </motion.button>
            </motion.div>
        </div>
    );
}
