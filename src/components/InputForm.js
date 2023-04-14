const InputForm = ({ onCitySubmit, onInputChange, userInput }) => {
    return (<>
        <h5>input form</h5>
        <form onSubmit={onCitySubmit}>
            <input type="text" onInput={e => onInputChange(e)} value={userInput} />
            <input type="submit" />
        </form>
    </>);
}

export default InputForm;