import reactLogo from '../assets/img/react-logo.webp'

function Navbar() {
    return(
        <nav className="bg-darkergray d-flex align-items-center justify-content-between flex-sm">
            <div className="logo-div d-flex">
                <div className="logo">
                    <img className="nav-logo-img" src={reactLogo} />
                </div>
                <div className="site-title">
                    <span className="site-title-text text-brightblue">ReactFacts</span>
                </div>
            </div>
            <div className="subtitle-div">
                <p className="text-lighterblue">React Course - Project 1</p>
            </div>
        </nav>
    )
}

export default Navbar