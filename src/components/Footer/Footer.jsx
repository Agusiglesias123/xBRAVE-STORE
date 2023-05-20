import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';


function Footer() {
    return(
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12row">
                    <div className="col-12 pt-3">
                        <Link className="navbar-brand col-12 fs-3 " to='/'>xBRAVE</Link>
                    </div>
                    <div className="col-12 py-4" >
                        <ul className="navbar-nav footer-nav" >
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
                </div>
                <div className="col-12">
                    <div className="col-12">
                        <h4 className='text-center pb-2 fw-medium'>
                            atencionalcliente@xbrave.com
                        </h4>
                        <h4 className='text-center fw-medium'>
                            (+54) 11 1234-5678 Lunes a Viernes de 9 a 18hs
                        </h4>

                    </div>
                </div>
                <div className="col-12 py-3">
                <hr />
                    <div className="">
                        <h6 className='font-tam'> Copyright xBRAVE - 2023. Todos los derechos reservados.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;