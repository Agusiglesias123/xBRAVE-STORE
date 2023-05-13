import { React, useState} from 'react';
import CartWidget from '../body/CartWidget/CartWidget';
import contador from '../body/ItemCount/ItemCount';
import './NavBar.scss';
import { Link, NavLink } from 'react-router-dom';


function BurguerButton(props) {
    return (
    <div className={`nav-icon3 ${props.clicked ? 'open' : '' }`}
        onClick={props.handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    );
}


const NavBar = () => {  
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
    <nav className="navbar navbar-expand-lg py-3" >
        <div className="container ">
            <Link className="navbar-brand  fs-3" to='/'>xBRAVE</Link>
            <div className='carrito-mobile d-lg-none'>
                <CartWidget contador={contador} />
                <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className={`navbar-nav ${clicked ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink className={  ({isActive})=> isActive ? 'nav-link hoverNav' : 'nav-link'  } to="/categoria/remeras">NEW</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">SHOP</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/accesorios" className={  ({isActive})=> isActive ? 'nav-link hoverNav' : 'nav-link'  }>ACCESORIES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">FAQs</NavLink>
                    </li>
                </ul>
            </div>
            <div className="carrito-desktop d-none d-lg-block">
                <CartWidget/>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;