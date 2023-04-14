import InputForm from "./InputForm";
import Button from "./Button";

const Header = ({ onCitySubmit, onInputChange, userInput }) => {
    return (
        <>
            <h3>Header.  </h3>
            < InputForm userInput={userInput} onCitySubmit={onCitySubmit} onInputChange={onInputChange} />
            <Button />

        </>
    )
}

export default Header;