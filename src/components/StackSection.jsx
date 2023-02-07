import {
    FaJsSquare,
    FaAngular,
    FaCss3,
    FaHtml5,
    FaNodeJs,
    FaReact,
} from 'react-icons/fa'

import {
    SiRedux,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiTypescript
} from 'react-icons/si'

export const StackSection = () => {
    return (
        <>
            <div className='card_body2 pt-4'>
                <div className='container d-flex flex-column card_body2'>
                    <h1 className='stack_container  container_index bg-dark'>STACK</h1>s
                    <div>
                        <FaHtml5 className='px-2 fa-5x' size={70} color='#39FADB' />
                        <FaCss3 className='px-2 fa-5x' size={70} color='#39FADB' />
                        <FaJsSquare className='px-2 fa-5x' size={70} color='#39FADB' />
                        <SiTypescript className='px-2 fa-5x' size={70} color='#39FADB' />
                        <FaAngular className='px-2 fa-5x' size={70} color='#39FADB' />
                        <FaReact className='px-2 fa-5x' size={70} color='#39FADB' />
                    </div>
                    <div>
                        <SiRedux className='px-2 fa-5x' size={70} color='#39FADB' />
                        <FaNodeJs className='px-2 fa-5x' size={70} color='#39FADB' />
                        <SiFigma className='px-2 fa-5x' size={70} color='#39FADB' />
                        <SiAdobephotoshop className='px-2 fa-5x' size={70} color='#39FADB' />
                        <SiAdobeillustrator className='px-2 fa-5x' size={70} color='#39FADB' />
                    </div>
                </div>
            </div>
        </>
    )
}
