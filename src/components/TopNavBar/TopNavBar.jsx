import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Salad from "./Salad/Salad.jsx";
import Vegetarian from "./Vegetarian/Vegetarian.jsx";
import Sandwich from "./Sandwich/Sandwich.jsx";
import Chicken from "./Chicken/Chicken.jsx";
import Soup from "./Soup/Soup.jsx";

const TopNavBar = () => {
    const [activeTab, setActiveTab] = useState("Salad");

    const renderActiveTab = () => {
        switch (activeTab) {
            case "Salad":
                return <Salad />;
            case "Vegetarian":
                return <Vegetarian />;
            case "Sandwich":
                return <Sandwich />;
            case "Soup":
                return <Soup />;
            case "Chicken":
                return <Chicken />;
            default:
                return <Salad />;
        }
    };

    return (
        <div className="home-page bg-[#242424] text-white flex flex-col items-center p-6 w-full">
            <div className="flex justify-center items-center relative mb-8 w-[90%]">
                <h1 className="text-center text-4xl font-bold">
                    Our Best Healthy <span className="text-green-500">Food Recipes</span>
                </h1>
                <div className="absolute right-8 flex space-x-4 items-center">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-white text-2xl cursor-pointer hover:text-green-500 transition duration-300"
                        title="Search"
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
                        icon={faLeaf}
                        className="text-green-500 text-lg mr-4"
                    />
                    <div className="flex space-x-6">
                        {["Salad", "Vegetarian", "Sandwich", "Soup", "Chicken"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-lg ${
                                    activeTab === tab ? "text-green-500" : "text-white"
                                } hover:text-green-500 transition duration-300`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                {renderActiveTab()}
                <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-2 rounded-full mt-6 transition duration-300">
                    Start Cooking
                </button>
            </div>
        </div>
    );
};

export default TopNavBar;
