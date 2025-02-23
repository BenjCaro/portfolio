const Heading = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='mt-5 mb-5'>
                    <div className='text-center pb-4 pe-3 ps-3'>
                        <h1 className='h1 mb-1 fs-1 fw-bold mb-2'>{props.title}</h1>
                        <span className='fs-6'>{props.subtitle}</span>
                    </div>
                    <hr className="border border-primary border-2 opacity-100 m-auto w-75"/>
                </div>   
        </div>        
    );
}

export default Heading;

