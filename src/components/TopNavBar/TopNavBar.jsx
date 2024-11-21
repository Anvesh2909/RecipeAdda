import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Salad from "./Salad/Salad.jsx";
import Vegetarian from "./Vegetarian/Vegetarian.jsx";
import Sandwich from "./Sandwich/Sandwich.jsx";
import Chicken from "./Chicken/Chicken.jsx";
import Soup from "./Soup/Soup.jsx";

const TopNavBar = () => {
    return (
        <BrowserRouter>
            <div className="home-page bg-[#242424] text-white p-6">
                <div className="flex items-center justify-center relative mb-8">
                    <h1 className="text-center text-4xl font-bold">
                        Our Best Healthy <span className="text-green-500">Food Recipes</span>
                    </h1>
                    <div className="absolute right-8 flex space-x-4 items-center gap-5">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-white text-2xl cursor-pointer hover:text-green-500 transition duration-300"
                        />
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-white text-2xl cursor-pointer hover:text-green-500 transition duration-300"
                            title="Profile"
                        />
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="flex items-center border-2 border-gray-600 rounded-full px-6 py-3 bg-gray-800">
                        <FontAwesomeIcon
                            className="text-green-500 text-lg mr-4"
                            icon={faLeaf}
                        />
                        <div className="flex space-x-6">
                            <Link
                                to="/"
                                className="text-white text-lg hover:text-green-500 transition duration-300"
                            >
                                Salad
                            </Link>
                            <Link
                                to="/vegetarian"
                                className="text-white text-lg hover:text-green-500 transition duration-300"
                            >
                                Vegetarian
                            </Link>
                            <Link
                                to="/sandwich"
                                className="text-white text-lg hover:text-green-500 transition duration-300"
                            >
                                Sandwich
                            </Link>
                            <Link
                                to="/soup"
                                className="text-white text-lg hover:text-green-500 transition duration-300"
                            >
                                Soup
                            </Link>
                            <Link
                                to="/chicken"
                                className="text-white text-lg hover:text-green-500 transition duration-300"
                            >
                                Chicken
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Routes>
                        <Route path="/" element={<Salad />} />
                        <Route path="/vegetarian" element={<Vegetarian />} />
                        <Route path="/sandwich" element={<Sandwich />} />
                        <Route path="/soup" element={<Soup />} />
                        <Route path="/chicken" element={<Chicken />} />
                    </Routes>
                    <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-2 rounded-full mt-6 transition duration-300">
                        Start Cooking
                    </button>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default TopNavBar;
