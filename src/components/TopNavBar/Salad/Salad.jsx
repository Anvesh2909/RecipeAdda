import React from 'react'
import './Salad.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch,faFire} from "@fortawesome/free-solid-svg-icons";
const Salad = () => {
    return (
        <div className="recipe-item">
            <div className="tag">
                <FontAwesomeIcon className="icon stopwatch-icon" icon={faStopwatch}/>
                <p>15m</p>
            </div>
            <div>
                <img className="recipe-image"
                     src="http://forkify-api.herokuapp.com/images/764636_MEDIUMb29c.jpg"/>
                <h1 className="recipe-name">Salad</h1>
            </div>
            <div className="tag">
                <FontAwesomeIcon className="icon fire-icon" icon={faFire}/>
                <p>150cal</p>
            </div>
        </div>
    )
}
export default Salad
