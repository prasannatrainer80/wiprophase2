import { useMemo, useState } from "react";

const UseMemo2 = () => {

    const[name,setName] = useState("Welcome to React");

    const lc = useMemo(() => lowerCase(name),[name]);
    const uc = useMemo(() => upperCase(name), [name]);

    function lowerCase(name) {
        return name.toLowerCase();
    }

    function upperCase(name) {
        return name.toUpperCase();
    }

    return(
        <div>
            <p>Use Memo Example</p> 
            <p>Upper Case : <b>{lc}</b></p>
            <p>Lower Case : <b>{uc}</b></p>
            Default Value : 
            <input type="text" value={name} 
                onChange={ (e) => setName(e.target.value)} />
        </div>
    )

}

export default UseMemo2;