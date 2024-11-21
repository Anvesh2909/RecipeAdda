import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faHeart,
    faClock,
    faFileAlt,
    faPlus,
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";
const LeftSideBar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-20 bg-[#242424] flex flex-col justify-between items-center border-r border-gray-700 py-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700">
                <FontAwesomeIcon className="text-green-500 text-lg" icon={faLeaf} />
            </div>
            <div className="flex flex-col items-center space-y-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition duration-300 cursor-pointer">
                    <FontAwesomeIcon
                        className="text-[rgba(255,255,255,0.87)] text-lg"
                        icon={faHome}
                        title="Home"
                    />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition duration-300 cursor-pointer">
                    <FontAwesomeIcon
                        className="text-[rgba(255,255,255,0.87)] text-lg"
                        icon={faHeart}
                        title="Favorites"
                    />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition duration-300 cursor-pointer">
                    <FontAwesomeIcon
                        className="text-[rgba(255,255,255,0.87)] text-lg"
                        icon={faClock}
                        title="History"
                    />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition duration-300 cursor-pointer">
                    <FontAwesomeIcon
                        className="text-[rgba(255,255,255,0.87)] text-lg"
                        icon={faFileAlt}
                        title="Recipes"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition duration-300 cursor-pointer">
                <FontAwesomeIcon
                    className="text-[rgba(255,255,255,0.87)] text-lg"
                    icon={faPlus}
                    title="Add"
                />
            </div>
        </div>
    );
};
export default LeftSideBar;