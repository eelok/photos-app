import React from 'react';
import './navigation-style.scss';
import {Link} from "react-router-dom";
import CITY from './city';


const NavigationComponent = () => {
    const cities = CITY;

    return (

        <nav className="navigation">
            <ul className="navigation__container">
                <li className="navigation__item">
                    <Link className="navigation__link" to="#">Home</Link>
                </li>
                <li className="navigation__item navigation__item-with-dropdown">
                    <Link className="navigation__link" to="#">Cities</Link>
                    <ul className="navigation__dropdown">
                        {
                            cities.map((city, index) =>
                                <li key={index} className="navigation__item navigation__subitem">
                                    <Link className="navigation__link navigation__sublink" >{city}</Link>
                                </li>
                            )
                        }
                    </ul>
                </li>
                <li className="navigation__item">
                    <Link className="navigation__link" to="#">Architecture</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavigationComponent;