
const url = `https://raw.githubusercontent.com/TotoroDavid/You-dont-know-JS/master/fotor_2023-2-6_15_11_3.png`

export const HeaderSection = () => {

    return (
        <>
            <header className='row'>
                <div className='col-md-12'>
                    <div className='bg_dark bg-gradient text-light'>
                        <div className='row d-flex'>

                            <div className='col-md-12 card_body'>
                                <div className='col-md-4 img_index'>
                                    <img src={url} className='pt-5' />
                                </div>
                                <div className='container card_body container_index'>
                                    <h1 className='bg-dark title_index'>Hey, I'm ToroDave
                                        <span className="wave mx-2">👋</span>
                                    </h1>
                                    <h2 className='h3_body'>Junior Software Developer ( javascript | React.Js | Angular | NodeJs ),
                                        <span className="highlighted-word">
                                            full-stack developer</span> and <span className="highlighted-word">tech enthusiast.</span>
                                    </h2>
                                    <p className='h3_body'>Hello World! I’m David. Nice to meet you. I am a web developer in constant learning. I am always experimenting, always learning, and never get bored.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
