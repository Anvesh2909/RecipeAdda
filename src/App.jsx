import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Signup from "./auth/Signup/Signup.jsx";
import Login from "./auth/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import TopNavBar from "./components/TopNavBar/TopNavBar.jsx";
import LeftSidebar from "./components/LeftSideBar/LeftSideBar.jsx";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Cleanup listener on component unmount
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />

                {/* Dashboard Route (Protected) */}
                <Route
                    path="/dashboard"
                    element={user ? (
                        <>
                            <TopNavBar />
                            <div className="flex">
                                <LeftSidebar />
                                <Dashboard />
                            </div>
                        </>
                    ) : (
                        <Navigate to="/login" />
                    )}
                />
            </Routes>
        </Router>
    );
}

export default App;
