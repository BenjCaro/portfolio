import { ButtonHome } from './ButtonHome';
import Modal from './Component/Modal';
import './css/home.css';
const TitleHome = () => <h1 className='fw-bold'>Developpeur web full stack</h1> ;
const Hello = (props) => <h2 className='fw-bold'>Bonjour, je suis {props.surname} {props.name}</h2>;
const Paragraph = (props) => <p>{props.content}</p>;
const Progress = (props) => <h4>{props.langage}</h4>;
      

const Home = () => {
    return (
        <>
            <div className="container-fluid  img-bg d-flex justify-content-center align-items-center">
                <div className='text-center text-white'>
                    <Hello surname="John" name="Doe" />
                    <TitleHome />
                    <ButtonHome />
                </div>
            </div>
            <div className='container bg-body'>
                <div className='row border border-white shadow rounded-1 ms-1 me-1 mt-5 mb-5'>
                    <section className='col-md-6 py-3 ps-4'>
                        <h3 className='border-bottom border-primary border-4 fw-bold pb-2'>
                            A propos
                        </h3>
                        <img className='img-fluid mb-4' src="/images/john-doe-about.jpg" alt="John Doe qui travaille" title="John Doe"></img>
                        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta, tortor in pharetra sodales, dolor diam condimentum velit, non pharetra sapien odio imperdiet enim. " />
                        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta, tortor in pharetra sodales, dolor diam condimentum velit, non pharetra sapien odio imperdiet enim. " />
                        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta, tortor in pharetra sodales, dolor diam condimentum velit, non pharetra sapien odio imperdiet enim. " />
                    </section>
                    <section className='col-md-6 py-3 ps-4 pe-4'>
                        <h3 className='border-bottom border-primary border-4 fw-bold pb-2'>
                           Mes Compétences
                        </h3>
                        <div className='mt-4 mb-4'>
                            <Progress langage="HTML5 90%" />
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <Progress langage="CSS3 80%" />
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <Progress langage="JAVASCRIPT 70%" />
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <Progress langage="PHP 60%"/>
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <Progress langage="REACT 50%" />
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-blue" style={{width: "50%"}}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
          
    )
}

export default Home;