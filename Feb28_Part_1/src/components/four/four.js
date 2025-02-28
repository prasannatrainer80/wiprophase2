import { useState } from "react";

const Four = () => {

    const [firstName] = useState('Shurya')
    const [lastName] = useState('Pratap')
    return(
        <div>
            <p>
                First Name is : {firstName} <br/>
                Last Name is : {lastName}<br/>
            </p>
        </div>
    )
}

export default Four;