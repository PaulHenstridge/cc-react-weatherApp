import React from "react";
const InputForm = ({ onCitySubmit, onInputChange, userInput }) => {
    return (<>
        <form onSubmit={onCitySubmit}>
            <label class="hidden" htmlFor="locInput">Enter location</label>
            <input placeholder="Enter location here" type="text" onInput={e => onInputChange(e)} value={userInput} id="locInput" />
            <button type="submit">Search</button>
        </form>
    </>)
}

export default InputForm;