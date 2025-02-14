import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <motion.nav 
      className="p-4 text-orange-500 flex justify-between items-center shadow-md shadow-orange-400 relative z-10 bg-black bg-opacity-80"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Side: Logo & Company Name */}
      <motion.div 
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
        <span className="font-bold text-3xl" style={{ fontFamily: "'Irish Grover', cursive" }}>
          The Great Indian
        </span>
      </motion.div>

      {/* Right Side: Navigation */}
      <ul className="flex space-x-6 ml-auto text-xl">
        {[
          { name: "Home", path: "/" }, 
          ...(isLoggedIn 
            ? [{ name: "Reserve", path: "/reserve" }, { name: "Profile", path: "/profile" }] 
            : [{ name: "About", path: "/about" }, { name: "Contact", path: "/contact" }]), 
          { name: "Menu", path: "/menu" }
        ].map(({ name, path }) => (
          <motion.li 
            key={name} 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={path} className="hover:text-orange-300">{name}</Link>
            {/* Animated Underline */}
            <motion.div 
              className="absolute left-0 top-7 bottom-0 h-[2.5px] bg-orange-500 w-0 group-hover:w-full transition-all duration-300"
            ></motion.div>
          </motion.li>
        ))}
      </ul>

      {/* Login Button */}
      <motion.button 
        className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 ml-4"
        onClick={handleLogin}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
