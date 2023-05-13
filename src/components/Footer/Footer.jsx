import React from 'react';
import './Footer.scss';

function Footer() {
    return(
        <div className='container'>
            <div className="row ">
                <div className="col-6 d-flex bg-danger padding ">
                    <div className="col-4 ">1</div>
                    <div className="col-4">2</div>
                    <div className="col-4">3</div>
                </div>
                <div className="col-6 padding">
                    <div className="col-12 bg-warning">4

                    </div>
                </div>
                <div className="col-12 padding">
                    <div className=" bg-success">5
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;