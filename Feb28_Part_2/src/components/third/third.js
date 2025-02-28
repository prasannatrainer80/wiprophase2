import Menu from "../menu/menu";

const Third = (props) => {
    return(
        <div>
            <Menu />
            First Name : {props.firstName} <br/>
            Lats Name : {props.lastName} <br/>
            Company : {props.company}
        </div>
    )
}

export default Third;