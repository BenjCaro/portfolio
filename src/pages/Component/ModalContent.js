import { useEffect, useState } from "react";

const ModalContent = ({ onClose }) => {

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
        <>
        <div className="card text-bg-dark position-fixed top-50 start-50 translate-middle w-100  d-flex justify-content-center align-items-center" data-bs-theme="dark" style={{maxWidth: "540px"}}>
           <div className="card-body mb-3">
                <div className="d-flex justify-content-between border-bottom border-secondary-subtle">
                    <h2 className="fs-4">Mon profil Github</h2> 
                    <button type="button" class="btn-close" onClick={onClose} ></button>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user.avatar_url} className="img-fluid rounded-start" alt={user.login}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title border-bottom border-secondary-subtle">{user.name}</h5>
                            <p className="card-text border-bottom border-secondary-subtle">logo {user.location}</p>
                            <p className="card-text border-bottom border-secondary-subtle">{user.bio}</p>
                            <p className="card-text border-bottom border-secondary-subtle">Repositories: {user.public_repos}</p>
                            <p className="card-text border-bottom border-secondary-subtle">Followers: {user.followers}</p>
                            <p className="card-text border-bottom border-secondary-subtle">Followings: {user.following}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-end">
                <button className="btn btn-secondary" onClick={onClose}>Fermer</button>
            </div>
        </div>
        </>
        
     )
}


export default ModalContent;