// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-4xl font-bold mb-6">Welcome to Your App</h1>
            <p className="text-lg mb-4">Sign in to go Home!</p>
            <div className="flex gap-4">
                <Link to="/login">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;