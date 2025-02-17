import './css/services.css';

const Banniere = () => <img alt="banniere" title="banniere" src="/images/banner.jpg" className='img-fluid'/>
const Card = (props) => {
    return (
        <div className="card col-4" style={{width: "18rem"}}>
            <div className="card-body text-center">
                <i className={props.icon}></i>
                <h2 className="card-title fs-5 fw-bold">{props.title}</h2>
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
                <div className=''>
                    <div className='text-center' >
                        <h1 className='h1 mb-1 fw-bold'>Mon offre de services</h1>
                        <span className='fs-6'>Voici les prestations sur lesquelles je peux intervenir</span>
                    </div>
                </div>
                <div className='row gap-3'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>

    )
}

export default Services;