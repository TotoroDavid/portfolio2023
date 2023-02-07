import { projects } from './profile'


export const Portfolio = () => {
    return (
        <div className='row pt-5'>
            <div className='col-md-12'>
                <div className='card card-body bg-dark'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center text-light'>Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image, frameWork, tryDemo, gidHub }, i) => (
                                <div className='col-md-4 p-2 bg-dark' key={i}>
                                    <div className='card h-100 text-white'>
                                        <div className='overflow bg-dark'>
                                            <img src={image} className='card-img-top bg-dark' />
                                        </div>
                                        <div className='card-body bg-dark text-center'>
                                            <h3>{name}</h3>
                                            <h6>{frameWork}</h6>
                                            <p>{description}</p>
                                            <a href={tryDemo} target="_blank" className='btn btn-outline-light mx-2'>tryDemo</a>
                                            <a href={gidHub} target="_blank" className='btn btn-outline-light'>source.code</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* <div className="text-center mt-4">
                        <div href="#">
                            <a className="btn btn-outline-light">More Projects</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
