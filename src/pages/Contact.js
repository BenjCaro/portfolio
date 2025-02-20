import React from 'react';
import Heading from './Component/Heading';
import Form from './Component/Form';

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
        <section className='container content border-white shadow rounded-1 d-flex mt-4 mb-4'>
            <div className='m-2 p-2 col-lg-6 col-md-6 col-sm-12'>
                <h2 className='border-bottom border-primary border-4 fw-bold pb-2 fs-4 '>
                    Formulaire de contact
                </h2>
                <Form/>
            </div>
            <div className='m-2 p-2 col-lg-6 col-md-6 col-sm-12'>
                <h2 className='border-bottom border-primary border-4 me-4 fw-bold pb-2 fs-4'>
                   Mes Coordonnées
                </h2>
                <div className=''>
                    <div className="mt-4">
                        <span className="fs-4">{user.surname} {user.name} </span> <br/>
                        <i class="bi bi-map"></i> {user.street} <br/>
                        <i class="bi bi-geo-alt"></i> {user.town} <br/>
                        <i class="bi bi-phone"></i> {user.phone} <br/>
                        <i class="bi bi-envelope-at"></i> {user.mail}
                    </div>
                    <div className='mt-2 overflow-hidden me-lg-3 me-md-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11130.305869243979!2d4.794157184538999!3d45.77967760886546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1739985401143!5m2!1sfr!2sfr" title="Google map localisation" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

        </>
   
    )
}

export default Contact;