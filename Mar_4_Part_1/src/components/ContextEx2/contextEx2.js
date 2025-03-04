import { useContext } from "react";
import { UserConText } from "../../context/UserContext";

const ContextEx2 = () => {

    const user = useContext(UserConText);
    return(
        <div>
            <p>User Name : <b>{user.userName}</b> </p>
            <p>Company : <b>{user.company}</b></p>
            <p>Topic : <b>{user.topic}</b></p>
        </div>
    )
}

export default ContextEx2;