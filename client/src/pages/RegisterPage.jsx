import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {  
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    function handleClose() {
        setIsVisible(false);
        navigate(-2);
    }

    return (
        isVisible && (
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
                        onClick={handleClose}
                    >
                        <X size={24} />
                    </button>

                    <img src="/register.jpg" alt="Register" className="w-70 h-[60vh]" />

                    <form className="flex flex-col justify-center items-center w-full px-6">
                        <h1 className="text-amber-100 text-4xl p-4 text-center">Register</h1>
                        
                        {/* Input Fields */}
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-amber-100 text-xl w-32" htmlFor="username">Username:</label>
                                <input className="bg-amber-100 px-2 py-1 rounded w-full" type="text" name="username" id="username" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-amber-100 text-xl w-32" htmlFor="email">Email:</label>
                                <input className="bg-amber-100 px-2 py-1 rounded w-full" type="email" name="email" id="email" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-amber-100 text-xl w-32" htmlFor="phone">Phone:</label>
                                <input className="bg-amber-100 px-2 py-1 rounded w-full" type="phone" name="phone" id="phone" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-amber-100 text-xl w-32" htmlFor="password">Password:</label>
                                <input className="bg-amber-100 px-2 py-1 rounded w-full" type="password" name="password" id="password" />
                            </div>
                        </div>

                        <p className="text-amber-100 mt-4">
                            Already have an account? <a className="underline text-black" href="/login">Login here</a>
                        </p>
                        <button className="bg-amber-300 text-amber-800 p-2 mt-4 rounded-md hover:bg-amber-400 w-28">Register</button>
                    </form>
                </div>
            </motion.div>
        )
    );
}
