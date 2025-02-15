import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {  
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input changes
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            console.log("✅ Registration Successful:", response.data);
            navigate("/login"); // Redirect to login page after successful registration
        } catch (err) {
            console.error("❌ Registration Failed:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Registration failed");
        }
    }

    return (
        <motion.div 
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative w-[40vw] h-[60vh] bg-orange-400 flex flex-row shadow-lg rounded-lg overflow-hidden">
                
                {/* Close Button */}
                <button 
                    className="absolute top-3 right-3 text-amber-100 hover:text-black"
                    onClick={() => navigate(-2)}
                >
                    <X size={24} />
                </button>

                <img src="/register.jpg" alt="Register" className="w-70 h-[60vh]" />

                <form className="flex flex-col justify-center items-center w-full px-6" onSubmit={handleSubmit}>
                    <h1 className="text-amber-100 text-4xl p-4 text-center">Register</h1>
                    
                    {/* Input Fields */}
                    <div className="w-full flex flex-col gap-4">
                        {["username", "email", "phone", "password"].map((field) => (
                            <div className="flex items-center gap-2" key={field}>
                                <label className="text-amber-100 text-xl w-32" htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                                </label>
                                <input 
                                    className="bg-amber-100 px-2 py-1 rounded w-full" 
                                    type={field === "password" ? "password" : "text"} 
                                    name={field} 
                                    id={field} 
                                    value={formData[field]} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <p className="text-amber-100 mt-4">
                        Already have an account? <a className="underline text-black" href="/login">Login here</a>
                    </p>
                    <button className="bg-amber-300 text-amber-800 p-2 mt-4 rounded-md hover:bg-amber-400 w-28">
                        Register
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
