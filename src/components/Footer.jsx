
export const Footer = () => {

    return (
        <>
            <footer className='bg-dark text-light text-center'>
                <div className='container p-4'>
                    <h1>&copy TotoroDave Portfolio</h1>
                    <p> 2020 - {new Date().getFullYear()}</p>
                    <p>Get in touch
                        <span className="mx-2 wave">👉</span>
                        <span className="mail">davidtoro65@hotmail.com</span>
                    </p>
                    <p>All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}