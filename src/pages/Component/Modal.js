import { useEffect, useState } from "react";

const Modal = () => {

    const [user, setUser] = useState('');

    const getUser = async () => {
        const res = await fetch('https://api.github.com/users/github-john-doe');
        const json = await res.json();
        setUser(json);
    }
    
    useEffect(() => {
        getUser();
    }, [])

    return (
       xx
    )
}


export default Modal;