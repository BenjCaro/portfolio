import React from 'react';
import Heading from './Component/Heading';


const user = {
    name: "Doe",
    surname: "John",
    street: "40 rue Laure Diebold",
    town: "69009 Lyon, France",
    phone: "10 20 30 40 50",
    mail: "johndoe@gmail.com"
}

const Contact = () => {
    return (
        <>
        <Heading title="Contact" subtitle="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
        <section>
            <div>
                <h2 className='border-bottom border-primary border-4 fw-bold pb-2 fs-4'>
                    Formulaire de contact
                </h2>
            </div>
            <div>
                <h2 className='border-bottom border-primary border-4 fw-bold pb-2 fs-4'>
                   Mes Coordonnées
                </h2>
            <   div>
                    <div className="accordion-body fw-semibold">
                        <span className="fs-4">{user.surname} {user.name} </span> <br/>
                        <i class="bi bi-map"></i> {user.street} <br/>
                        <i class="bi bi-geo-alt"></i> {user.town} <br/>
                        <i class="bi bi-phone"></i> {user.phone} <br/>
                        <i class="bi bi-envelope-at"></i> {user.mail}
                    </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.115670678902!2d2.302339976756815!3d48.8761739994545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc093ebd065%3A0xc02e08457a1927c0!2s40%20Rue%20Laure%20Diebold%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1739972692887!5m2!1sfr!2sfr"  title="Google Map localisation" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>
        </section>

        </>
   
    )
}

export default Contact;