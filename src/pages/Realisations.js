import Banniere from "./Component/Banniere";
import Heading from "./Component/Heading";
import Card from "./Component/Card";
import "./css/realisation.css" ;
const Realisations = () => {
    return (
        <>
            <Banniere/>
            <Heading title="Portfolio" subtitle="Voici quelques unes de mes réalisations" />
           <div className="container">
                <div className="content d-flex  justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/fresh-food.jpg" description="panier de légumes" title="Fresh Food" text="Site de produits frais en ligne" langage="Site réalisé avec PHP et MySQL"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/restaurant-japonais.jpg" description="plateau sushis" title="Restaurant Akira" text="Site de produits frais en ligne" langage="Site réalisé avec WordPress"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/espace-bien-etre.jpg" description="ambiance zen" title="Espace Bien Etre" text="Site de produits frais en ligne" langage="Site réalisé avec LARAVEL"/>
                    </div>
                    
                </div>   
                <div className="content d-flex  justify-content-center ">
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/seo.jpg" description="seo" title="SEO" text="Amélioration du référencement d'un site web" langage="Utilisations des outils SEO"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/coder.jpg" description="lignes de code" title="Création d'une API" text="Création d'une API RESTFULL publique" langage="PHP - SYMFONY"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center me-4 ms-4 mb-4">
                        <Card source="/images/portfolio/screens.jpg" description="laptop sur un bureau" title="Maquette d'un site web" text="Création d'un prototype de site" langage="Réalisé avec Figma"/>    
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Realisations;