import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../components/authcontext"; // ✅ Import Auth Context


export default function LoginPage() {  
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { login } = useAuth();  // ✅ Get login function from context
    const navigate = useNavigate();

    // Handle input changes
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log("🚀 Logging in:", formData);
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            console.log("✅ Login Successful:", response.data);

            // ✅ Store token & user info in localStorage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.user.id);
            login(response.data.token);  // ✅ Update global state

            // ✅ Show success toast
            toast.success("Signed in Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

            // ✅ Redirect after a short delay
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            console.error("❌ Login Failed:", err.response?.data || err.message);

            // ✅ Show error toast
            toast.error(err.response?.data?.message || "Invalid credentials!");
        }
    }

    return (
        <motion.div 
            className="login-page fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative w-[40vw] h-[50vh] bg-orange-400 flex flex-row shadow-lg rounded-lg overflow-hidden">
                
                {/* Close Button */}
                <button 
                    className="absolute top-3 right-3 text-amber-100 hover:text-black"
                    onClick={() => navigate(-1)}
                >
                    <X size={24} />
                </button>

                <img src="/loginpage.jpg" alt="login page" className="w-70 h-[50vh]"/>
                
                <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit}>
                    <h1 className="text-amber-100 text-4xl p-4 text-center">Login</h1>
                    
                    <div className="flex flex-col">
                        <label className="text-amber-100 text-xl p-2" htmlFor="email">Email:</label>
                        <input 
                            className="mb-2 bg-amber-100 py-1 px-2 rounded w-46" 
                            type="text" 
                            name="email" 
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="text-amber-100 text-xl p-2" htmlFor="password">Password:</label>
                        <input 
                            className="mb-2 bg-amber-100 py-1 px-2 rounded w-46 ml-1.5" 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <p className="text-amber-100 mt-4">
                        Are you a new user? <a className="underline text-black" href="/register">Register here</a>
                    </p>

                    <button className="bg-amber-300 text-amber-800 p-2 m-4 rounded-md hover:bg-amber-400 w-28">
                        Login
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
