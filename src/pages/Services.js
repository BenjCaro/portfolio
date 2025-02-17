import './css/services.css';

const Banniere = () => <img alt="banniere" title="banniere" src="/images/banner.jpg" className='img-fluid'/>
const Card = (props) => {
    return (
        <div className="card col-md-4" style={{width: "24rem"}}>
            <div className="card-body text-center">
                <i className={props.icon}></i>
                <h2 className="card-title pt-4 fs-3 fw-bold">{props.title}</h2>
                <p className="card-text fs-6">{props.services}</p>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <>
            <Banniere/>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <div className='mt-5 mb-5 border-bottom border-primary border-4'>
                    <div className='text-center pb-4' >
                        <h1 className='h1 mb-1 fs-1 fw-bold mb-2'>Mon offre de services</h1>
                        <span className='fs-6'>Voici les prestations sur lesquelles je peux intervenir</span>
                    </div>
                </div>
                <div className='row gap-4 mb-5'>
                    <Card icon="bi bi-brush" title="UX Design" 
                          services="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. 
                                    L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."/>
                    <Card icon="bi bi-code-slash" title="Développement web" 
                          services="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation 
                                    (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."/>
                    <Card icon="bi bi-search" title="Réferencement" 
                          services="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). 
                                    L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."/>
                </div>
            </div>
        </>

    )
}

export default Services;