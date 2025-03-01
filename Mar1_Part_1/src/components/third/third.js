import { useState } from "react";

const Third = () => {

    const [data, setData] = useState({
        firstName : '',
        lastName : '',
        fullName : ''
    })

    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }
  
    const show = () => {
        alert(data.firstName);
        alert(data.lastName);
        let res = data.firstName + " " +data.lastName;
        setData({
            fullName : res 
        });
    }
    return(
        <div>
            <form>
                <label>First Name :</label>
                <input type="text" name="firstName" 
                    value={data.firstName} onChange={handleChange} /> <br/> 
                <label>Last Name : </label>
                <input type="text" name="lastName"
                    value={data.lastName} onChange={handleChange} /> <br/> 
                <label>Full Name </label>
                    <input type="text" name="fullName" 
                        value={data.fullName} />  <br/>
                <input type="button" value="Show" onClick={show} />
            </form>
        </div>
    )
}

export default Third;