const Heading = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='mt-5 mb-5 border-bottom border-primary border-4'>
                    <div className='text-center pb-4 w-30 pe-3 ps-3'>
                        <h1 className='h1 mb-1 fs-1 fw-bold mb-2'>{props.title}</h1>
                        <span className='fs-6'>{props.subtitle}</span>
                    </div>
                </div>
        </div>        
    );
}

export default Heading;