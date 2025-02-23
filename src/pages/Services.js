import './css/services.css';
import Banniere from "./Component/Banniere";
import Heading from './Component/Heading';


function CardServices(props) {
    return (
        <div className="card-hover card ms-3 me-3 mb-3">
            <div className="card-body text-center">
                <i className={`${props.icon} service-i`}></i>
                <h2 className="card-title pt-4 fs-3 fw-bold">{props.title}</h2>
                <p className="card-text fs-6">{props.services}</p>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <>
            <Banniere/>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <Heading title="Mon offre de services" subtitle="Voici les prestations sur lesquelles je peux intervenir"/>
                <div className='d-flex flex-wrap justify-content-center m-4'>
                    <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center'>
                        <CardServices icon="bi bi-brush" title="UX Design" 
                              services="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."/>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center'>
                        <CardServices icon="bi bi-code-slash" title="Développement web" 
                              services="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."/>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center'>
                        <CardServices icon="bi bi-search" title="Référencement" 
                              services="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;