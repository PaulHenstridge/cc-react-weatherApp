import React from "react";
const Button = ({ clickFunc, btnTxt }) => {
    return (<>
        <button onClick={(e) => { clickFunc(e) }}> {btnTxt}</button>
    </>);
}

export default Button;