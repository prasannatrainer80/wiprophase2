const ButtonEx = () => {

    const ajay = () => {
        alert("Hi I am Ajay...");
    }

    const neha = () => {
        alert("Hi I am Neha...");
    }

    const sanjay = () => {
        alert("Hi I am Sanjay...")
    }
    return(
        <div>
            <input type="button" value="Ajay" onClick={ajay} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Neha" onClick={neha} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Sanjay" onClick={sanjay} />
        </div>
    )
}

export default ButtonEx;