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
        <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {props.heading}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            {user.surname} {user.name} <br/>
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
        <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      {props.heading}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        {props.content}
      </div>
    </div>
  </div>
                
    );
}

const ElementAccordeonThree = (props) => {
    return(
        <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      {props.heading}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        {props.content}
                    </div>
                </div>
         </div>
                
    )
}



const Legals = () => {
    return (
        <div className='container'>
            <div className='text-center mt-4'>
                <h1 className='' >
                    Mentions Légales
                </h1>
            </div>
            <div class="accordion mb-5 mt-5" id="accordionPanelsStayOpenExample">
            <ElementAccordeonOne heading="Editeur du site"/>
            <ElementAccordeonTwo heading="Hébergeur" />
            <ElementAccordeonThree heading="Crédits"/>
            </div>
        </div>
    )
}

export default Legals;