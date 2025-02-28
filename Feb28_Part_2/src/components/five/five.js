import { useState } from "react";
import Menu from "../menu/menu";

const Five = () => {

    const [firstName, setFirstName] = useState('')

    const update = () => {
        setFirstName("Sanjay")
    }
    return(
        <div>
            <Menu />
            First Name is : {firstName} 
            <br/>
            <input type="button" value="Change" onClick={update} />
        </div>
    )
}

export default Five;