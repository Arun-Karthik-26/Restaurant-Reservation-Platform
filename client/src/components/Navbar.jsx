import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../components/authcontext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Calls logout function from AuthContext
    navigate("/login"); // ✅ Redirects to login page
  };

  return (
    <motion.nav 
      className="p-4 text-orange-500 flex justify-between items-center shadow-md shadow-orange-400 relative z-10 bg-black bg-opacity-80"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
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

      {/* Navigation Links */}
      <ul className="flex space-x-6 ml-auto text-xl">
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link to="/" className="hover:text-orange-300">Home</Link>
        </motion.li>

        {isLoggedIn ? (
          <>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/reserve" className="hover:text-orange-300">Reserve</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/profile" className="hover:text-orange-300">Profile</Link>
            </motion.li>
          </>
        ) : (
          <>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/about" className="hover:text-orange-300">About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/contact" className="hover:text-orange-300">Contact</Link>
            </motion.li>
          </>
        )}

        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link to="/menu" className="hover:text-orange-300">Menu</Link>
        </motion.li>
      </ul>

      {/* Login / Logout Button */}
      {isLoggedIn ? (
        <motion.button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
          onClick={handleLogout}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Logout
        </motion.button>
      ) : (
        <motion.button 
          className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 ml-4"
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.button>
      )}
    </motion.nav>
  );
};

export default Navbar;
