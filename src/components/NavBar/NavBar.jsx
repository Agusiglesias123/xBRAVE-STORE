import React from 'react';
import './NavBar.scss';





function BurguerButton(props) {
    return (
    // eslint-disable-next-line react/prop-types
    <div className={`nav-icon3 ${props.clicked ? 'open' : '' }`}
        // eslint-disable-next-line react/prop-types
        onClick={props.handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    );
}
export const NavBar = () => {  
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
    <nav className="navbar navbar-expand-lg " >
        <div className="container ">
            <a className="navbar-brand  fs-3" href="#">xBRAVE</a>
            <div className='carrito-mobile d-lg-none'>
                <button type="button" className="btn position-relative btn-carrito"><i className="bi bi-bag fs-4"></i>
                    <span className="position-absolute carrito top-0   badge rounded-pill ">
                        2
                    </span>
                </button>
                <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className={`navbar-nav ${clicked ? 'active' : ''}`}>
                    <li className="nav-item pe-4">
                        <a className="nav-link active" href="#">NEW</a>
                    </li>
                    <li className="nav-item pe-4">
                        <a className="nav-link" href="#">SHOP</a>
                    </li>
                    <li className="nav-item pe-4">
                        <a className="nav-link" href="#">ACCESORIES</a>
                    </li>
                    <li className="nav-item pe-4">
                        <a className="nav-link" href="#">FAQs</a>
                    </li>
                </ul>
            </div>
            <div className="carrito-desktop d-none d-lg-block">
            <button type="button" className="btn position-relative btn-carrito"><i className="bi bi-bag fs-4"></i>
                    <span className="position-absolute carrito top-0   badge rounded-pill ">
                        2
                    </span>
                </button>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;