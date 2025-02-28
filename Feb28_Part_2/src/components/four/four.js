import { useState } from "react";
import Menu from "../menu/menu";

const Four = () => {

    const [firstName] = useState('Shurya')
    const [lastName] = useState('Pratap')
    return(
        <div>
            <Menu />
            <p>
                First Name is : {firstName} <br/>
                Last Name is : {lastName}<br/>
            </p>
        </div>
    )
}

export default Four;