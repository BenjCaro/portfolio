const ElementAccordeonOne = (props) => {
    const user = {
        name: "Doe",
        surname: "John",
        street: "40 rue Laure Diebold",
        town: "69009 Lyon, France",
        phone: "10 20 30 40 50",
        mail: "johndoe@gmail.com"
    }

    return(
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {props.heading}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" classNameName="accordion-collapse collapse show">
              <div className="accordion-body fw-semibold">
                  <span className="fs-4">{user.surname} {user.name} </span> <br/>
                  {user.street} <br/>
                  {user.town} <br/>
                  {user.phone} <br/>
                  {user.mail}
                </div>
          </div>
        </div>
    );
}

const ElementAccordeonTwo = (props) => {
    return(
        <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                {props.heading}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                  <h3 className="fw-bold fs-4">{props.title}</h3>
                  <h4>{props.adress}</h4>
                  <a href="#" className="link-primary">{props.site}</a>
              </div>
            </div>
          </div>
                
    );
}

const ElementAccordeonThree = (props) => {
    return(
        <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      {props.heading}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <h3 className="fw-bold fs-4 mb-3">{props.title}</h3>
                      <h4 className="mb-3">Ce site a été réalisé par John Doe, étudiant au <span className="text-decoration-underline text-primary">Centre Européen de Formation.</span></h4>
                      <h4 className="fst-italic mb-3">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/" target="_blank">Pixabay</a>.</h4>
                      <h4 className="fst-italic mb-3">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank">John Doe Icons erstellt Von Freepik - Flaticon</a></h4>
                    </div>
                </div>
         </div>        
    );
}


const Legals = () => {
    return (
        <div className='container'>
            <div className='text-center mt-4'>
                <h1 className='' >
                    Mentions Légales
                </h1>
            </div>
            <div className="accordion mb-5 mt-5" id="accordionPanelsStayOpenExample">
              <ElementAccordeonOne heading="Editeur du site"/>
              <ElementAccordeonTwo heading="Hébergeur" title="alwaysdata" adress="91 rue du Faubourg Saint-Honoré, 75008 Paris" site="www.alwaysdate.com"/>
              <ElementAccordeonThree heading="Crédits" title="Crédits"/>
            </div>
        </div>
    );
}

export default Legals;