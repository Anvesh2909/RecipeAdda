import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch,faFire} from "@fortawesome/free-solid-svg-icons";
const Vegetarian = () => {
    return (
        <div className="recipe-item">
            <div className="tag">
                <FontAwesomeIcon className="icon stopwatch-icon" icon={faStopwatch}/>
                <p>15m</p>
            </div>
            <div>
                <img className="recipe-image"
                     src="http://forkify-api.herokuapp.com/images/11647482cf.jpg"/>
                <h1 className="recipe-name">Vegetarian Korma</h1>
            </div>
            <div className="tag">
                <FontAwesomeIcon className="icon fire-icon" icon={faFire}/>
                <p>150cal</p>
            </div>
        </div>
    )
}
export default Vegetarian
