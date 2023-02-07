import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
    FaJsSquare,
    FaAngular,
    FaCss3,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
    FaTelegram,
    FaVuejs,
    FaBluetoothB,
    FaRegWindowRestore,
    FaRegFolderOpen
} from 'react-icons/fa'

import {
    SiBehance,
    SiRedux,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiInstagram,
    SiTypescript
} from 'react-icons/si'


export const SocialLinks = () => {
    return (
        <div className="container text-white card_body">
            <h2>on the web!!!</h2>
            <div className="container container_index">
                <div>
                    <FiGithub className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://github.com/TotoroDavid?tab=repositories" target="_blank" > <span className='highlighted-word'>@github-projects</span></a>
                </div>
                <div>
                    <FaRegWindowRestore className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://totorowebdesignlinks.webflow.io/" target="_blank" > <span className='highlighted-word'>@PersonalWebsite</span></a>
                </div>
                <div>
                    <FiLinkedin className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://www.linkedin.com/in/davidtoro90/" target="_blank" > <span className='highlighted-word'>@davidtoro90</span></a>
                </div>
                <div>
                    <SiBehance className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://www.behance.net/davidtoro6" target="_blank" > <span className='highlighted-word'>@ToroDavidBehance</span></a>
                </div>
                <div>
                    <SiInstagram className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://www.instagram.com/totorowebdesign/" target="_blank" > <span className='highlighted-word'>@toroWebDeveloper</span></a>
                </div>
                <div>
                    <FaRegFolderOpen className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://cvresumentotorodavid.webflow.io/" target="_blank" > <span className='highlighted-word'>@MyCv</span></a>
                </div>
                <div>
                    <FaRegFolderOpen className='px-2 fa-5x' size={70} color='#39FADB' />
                    <a className='text-decoration-none text-white' href="https://cv-resume-davidtoro.netlify.app/" target="_blank" > <span className='highlighted-word'>@MyResume</span></a>
                </div>
            </div>
        </div>
    )
}
