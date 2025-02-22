import { NavLink } from "react-router-dom";

const TitleColumn = (props) => {
    return (
            <h3 className="fs-4">{props.title}</h3>
    )
}

const ElementListFooter = (props) => {
    return (
        <span className="fs-6">{props.content}</span>
        
    )
}


export const Footer = () => {
    return (
        <footer className="container-fluid bg-dark text-white pb-5" >
            <div className="container ps-4 pe-4 ps-md-5">
                <div className="row" >
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4">
                        <TitleColumn title="John Doe" className="" />
                        <ElementListFooter content="40 rue Laure Diebold" />
                        <ElementListFooter content="69009 Lyon, France" />
                        <ElementListFooter content="10 20 30 40 50" />
                        <ElementListFooter content="johndoe@gmail.com" />
                        <span className="mt-3">
                               <a href="https://github.com/BenjCaro/" target='_blank' rel="noreferrer"><i className="bi bi-github "></i></a> 
                               <a href="https://x.com/?lang=fr" target='_blank' rel="noreferrer"><i className="bi bi-twitter-x ps-2 "></i></a>
                               <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><i className="bi bi-linkedin ps-2 "></i></a>
                        </span>
                    </div>
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4 ">
                        <TitleColumn title="Liens utiles" />
                        <NavLink className="nav-link" aria-current="page" to="/">Accueil</NavLink>
                        <NavLink className="nav-link" to="/pages/services">Services</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">Portfolio</NavLink>
                        <NavLink className="nav-link" to="/pages/contact">Me contacter</NavLink>
                        <NavLink className="nav-link" to="/pages/legals">Mentions légales</NavLink>
                    </div>
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4 ">
                        <TitleColumn title="Mes dernières réalisations" />
                        <NavLink className="nav-link" to="/pages/realisations">Fresh Food</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">Restaurant Akira</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">Espace bien-être</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">SEO</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">Création d'une API</NavLink>
                        <NavLink className="nav-link" to="/pages/realisations">Maquette d'un site</NavLink>   
                    </div>
                </div>
            </div>
        </footer>
        
    
    )

}
