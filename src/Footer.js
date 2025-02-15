const TitleColumn = (props) => {
    return (
            <h4>{props.title}</h4>
    )
}

const ElementListFooter = (props) => {
    return (
        <li>{props.content}</li>
    )
}

export const Footer = () => {
    return (
        <footer>
            <div className="container" >
                <div className="row">
                    <TitleColumn title="John Doe" />
                    <ul>
                        <ElementListFooter content="40 rue Laure Diebold" />
                        <ElementListFooter content="69009 Lyon, France" />
                        <ElementListFooter content="10 20 30 40 50" />
                        <ElementListFooter content="johndoe@gmail.com" />
                    </ul>
                    <span>
                        <i className="bi bi-github"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-linkedin"></i>
                    </span>
                </div>
                <div className="row">
                    <TitleColumn title="Liens utiles" />
                    <ul>
                        <ElementListFooter content="Accueil" />
                        <ElementListFooter content="Services" />
                        <ElementListFooter content="Portfolio" />
                        <ElementListFooter content="Me contacter" />
                        <ElementListFooter content="Mention légales" />
                    </ul>
                </div>
                <div className="row">
                    <TitleColumn title="Mes dernières réalisations" />
                    <ul>
                    <ElementListFooter content="Fresh Food" />
                    <ElementListFooter content="Restaurant Akira" />
                    <ElementListFooter content="Espace Bien Etre" />
                    <ElementListFooter content="SEO" />
                    <ElementListFooter content="Création d'une API" />
                    <ElementListFooter content="Maquette d'un site" />
                    </ul>
                </div>

            </div>
        </footer>
        
    
    )

}