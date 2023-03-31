import React from 'react';
import './Card.scss';



{/* <div className="row px-4  pb-5">
<div className='center-card row'>
<div className=" cards-ordenar"></div>
<div className="col-12">Remera Brave</div>
<div className="col-12 fw-bold fs-5">$14.500</div>
<div className="col-12 font-desc fw-medium">6 cuotas sin interes de $2.416</div>
</div>
<div className="container-fluid center-card row  ">
    <button type="button" className="mostrar-botones me-3 col-6 btn btn-primary btn-sm">COMPRAR</button>
    <button type="button" className="mostrar-botones col-6 btn btn-secondary btn-sm">VER</button>
</div>
</div> */}


function Card() {
    return(
        <div className="Card-father">
            <div className="Card container">
                <div className="row py-4">
                    <div className="col-md-4 foto col-6">
                        <div className=" cards-ordenar">1</div>
                        <div className="row foto px-4">
                            <div className="col-12">Remera Brave</div>
                            <div className="col-12 fw-bold fs-5 font-mobile">$14.500</div>
                            <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de $2.416</div>
                            <div className="container center-card row pt-2 ">
                                <button type="button" className="mostrar-botones me-3  btn-sm">COMPRAR</button>
                                <button type="button" className="mostrar-botones btn-ver col-6  btn-sm"> <i className="bi pe-1 bi-eye p"></i>VER</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className=" cards-ordenar">1</div>
                        <div className="row px-4 foto">
                            <div className="col-12">Remera Brave</div>
                            <div className="col-12 fw-bold fs-5 font-mobile">$14.500</div>
                            <div className="col-12 font-desc fw-medium">6 cuotas sin interes de $2.416</div>
                            <div className="container center-card row pt-2 ">
                                <button type="button" className="mostrar-botones me-3  btn-sm">COMPRAR</button>
                                <button type="button" className="mostrar-botones btn-ver col-6  btn-sm"> <i className="bi pe-1 bi-eye p"></i>VER</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className=" cards-ordenar">1</div>
                        <div className="row px-4 foto">
                            <div className="col-12">Remera Brave</div>
                            <div className="col-12 fw-bold fs-5 font-mobile">$14.500</div>
                            <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de $2.416</div>
                            <div className="container center-card row pt-2 ">
                                <button type="button" className="mostrar-botones me-3  btn-sm">COMPRAR</button>
                                <button type="button" className="mostrar-botones btn-ver col-6  btn-sm"> <i className="bi pe-1 bi-eye p"></i>VER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-md-6 col-12 ">
                        <div className="row pad-card container">
                        <div className=" cards-ordenar foto">1</div>
                        <div className="foto">
                            <div className="col-12 font-mobile">Remera Brave</div>
                            <div className="col-12 fw-bold fs-5 font-mobile">$14.500</div>
                            <div className="col-12 font-desc fw-medium ">6 cuotas sin interes de $2.416</div>
                            <div className="container center-card row pt-2 ">
                                <button type="button" className="mostrar-botones me-3  btn-sm">COMPRAR</button>
                                <button type="button" className="mostrar-botones btn-ver col-6  btn-sm"> <i className="bi pe-1 bi-eye p"></i>VER</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row pad-card  container">
                        <div className=" cards-ordenar foto">1</div>
                        <div className='foto'>
                            <div className="col-12">Remera Brave</div>
                            <div className="col-12 fw-bold fs-5 font-mobile">$14.500</div>
                            <div className="col-12 font-desc fw-medium">6 cuotas sin interes de $2.416</div>
                            <div className="container center-card row pt-2 ">
                                <button type="button" className="mostrar-botones me-3  btn-sm">COMPRAR</button>
                                <button type="button" className="mostrar-botones btn-ver col-6  btn-sm"> <i className="bi pe-1 bi-eye p"></i>VER</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Card;


