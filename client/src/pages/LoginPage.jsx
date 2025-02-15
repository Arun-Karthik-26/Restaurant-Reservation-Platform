import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {  
    const [isVisible, setIsVisible] = useState(true);
    const navigate=useNavigate();

    function handleClick(){
        setIsVisible(false);
        navigate(-1);
    }
    return (
        isVisible && (
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
                        onClick={handleClick}
                    >
                        <X size={24} />
                    </button>

                    <img src="/loginpage.jpg" alt="login page" className="w-70 h-[50vh]"/>
                    
                    <form action="" className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-amber-100 text-4xl p-4 text-center">Login</h1>
                        <div>
                            <label className="text-amber-100 text-xl p-4" htmlFor="username">Username:</label>
                            <input className="mb-2 bg-amber-100 py-1 rounded w-46" type="text" name="username" id="username" /><br />
                        </div>
                        <div>
                            <label className="text-amber-100 text-xl p-4" htmlFor="pwd">Password:</label>
                            <input className="mb-2 bg-amber-100 py-1 rounded w-46 ml-1.5" type="password" name="pwd" id="pwd" />
                        </div>
                        <p className="text-amber-100 mt-4">Are you a new user? <a className="underline text-black" href="/register">Register here</a></p>
                        <button className="bg-amber-300 text-amber-800 p-2 m-4 rounded-md hover:bg-amber-400 w-28">Login</button>
                    </form>
                </div>
            </motion.div>
        )
    );
}
