const TitleColumn = (props) => {
    return (
            <h4>{props.title}</h4>
    )
}

const ElementListFooter = (props) => {
    return (
        <span>{props.content}</span>
    )
}

export const Footer = () => {
    return (
        <footer className="container-fluid bg-dark text-white" >
            <div className="container">
                <div className="row" >
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4">
                        <TitleColumn title="John Doe" className="" />
                        <ElementListFooter content="40 rue Laure Diebold" />
                        <ElementListFooter content="69009 Lyon, France" />
                        <ElementListFooter content="10 20 30 40 50" />
                        <ElementListFooter content="johndoe@gmail.com" />
                        <span className="mt-3">
                            <i className="bi bi-github"></i>
                            <i className="bi bi-twitter-x ps-2"></i>
                            <i className="bi bi-linkedin ps-2"></i>
                        </span>
                    </div>
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4 ">
                        <TitleColumn title="Liens utiles" />
                        <ElementListFooter content="Accueil" />
                        <ElementListFooter content="Services" />
                        <ElementListFooter content="Portfolio" />
                        <ElementListFooter content="Me contacter" />
                        <ElementListFooter content="Mention légales" />
                    </div>
                    <div className="col-sm col-md-4 lg-4 xl-4 xxl-4 d-flex flex-column mt-4 ">
                        <TitleColumn title="Mes dernières réalisations" />
                        <ElementListFooter content="Fresh Food" />
                        <ElementListFooter content="Restaurant Akira" />
                        <ElementListFooter content="Espace Bien Etre" />
                        <ElementListFooter content="SEO" />
                        <ElementListFooter content="Création d'une API" />
                        <ElementListFooter content="Maquette d'un site" />
                    </div>
                </div>
            </div>
        </footer>
        
    
    )

}
