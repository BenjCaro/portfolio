const Card = (props) => {
    return (

        <div className="card col-sm text-center m-auto" style={{width: "18rem"}}>
            <img src={props.source} className="card-img-top img-fluid" alt={props.description}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">
                {props.langage} 
            </div>
        </div>

    )
}


export default Card;