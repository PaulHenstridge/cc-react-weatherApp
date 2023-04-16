import React from "react";

import InputForm from "./InputForm";
import Button from "./Button";

const Header = ({ onCitySubmit, onInputChange, userInput }) => {
    let btnTxt = 'View Watch List'
    return (
        <>
            <div className="header-container">
                <h2> Enter a location for live weather info</h2>
                < InputForm
                    userInput={userInput}
                    onCitySubmit={onCitySubmit}
                    onInputChange={onInputChange} />

            </div>

        </>
    )
}

export default Header;