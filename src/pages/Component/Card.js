const Card = (props) => {
    return (

        <div id={props.identifiant} className="card-hover card col text-center m-auto" style={{width: "18rem"}}>
            <img src={props.source} className="card-img-top img-fluid" width="600" height="400" loading="lazy" alt={props.description}></img>
            <div className="card-body">
                <h2 className="card-title fs-4 fw-bold">{props.title}</h2>
                <p className="card-text">{props.text}</p>
                <a href={props.url} className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">
                {props.langage} 
            </div>
        </div>

    )
}


export default Card;