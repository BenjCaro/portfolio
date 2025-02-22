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
        <div className="card text-bg-dark position-fixed top-50 start-50 translate-middle w-100 m-sm-4" data-bs-theme="dark" style={{maxWidth: "600px"}}>
           <div className="card-header">
                <div className="d-flex justify-content-between ">
                    <h2 className="fs-4">Mon profil Github</h2> 
                    <button type="button" class="btn-close" onClick={onClose} ></button>
                </div>
            </div>  
            <div className="row m-2">
                    <div className="col-md-8 mt-3">
                        <img src={user.avatar_url} className="img-fluid rounded-start" alt={`${user.login} developpeur full stack`}/>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card-body">
                            <h5 className="card-title border-bottom border-secondary-subtle"><i class="i-modal bi bi-person"></i><a href="https://github.com/" target='_blank' rel="noreferrer">{user.name}</a></h5>
                            <p className="card-text border-bottom border-secondary-subtle"><i class="i-modal bi bi-geo-alt"></i>{user.location}</p>
                            <p className="card-text border-bottom border-secondary-subtle"><i class="i-modal bi bi-card-text"></i>{user.bio}</p>
                            <p className="card-text border-bottom border-secondary-subtle"><i class="i-modal bi bi-box"></i>Repositories: {user.public_repos}</p>
                            <p className="card-text border-bottom border-secondary-subtle"><i class="i-modal bi bi-people"></i>Followers: {user.followers}</p>
                            <p className="card-text"><i class="i-modal bi bi-people"></i>Followings: {user.following}</p>
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

