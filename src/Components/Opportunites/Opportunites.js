import React from 'react';
import { faHome, faPlayCircle , faSmile, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Opportunities = () => {
    return (
        <div className="" style={{ margin: '90px 0' }}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-lg-2 col-8 m-2 shadow p-3 mb-5 text-center" id="services" data-aos="flip-left">
                    <h5 className='font-weight-bold mt-3'><FontAwesomeIcon className='mr-2' icon={faHome} />20+</h5>
                    <small>State boards</small>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-2 shadow p-3 mb-5 text-center" id="services" data-aos="flip-left">
                    <h5 className='font-weight-bold mt-3'><FontAwesomeIcon className='mr-2' icon={faPlayCircle} />1,000,000+</h5>
                    <small>Video lectures</small>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-2 shadow p-3 mb-5 text-center" id="services" data-aos="flip-left">
                    <h5 className='font-weight-bold mt-3'><FontAwesomeIcon className='mr-2' icon={faSmile} />40,000+</h5>
                    <small>Access to quality education anytime</small>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-2 shadow p-3 mb-5 text-center" id="services" data-aos="flip-left">
                    <h5 className='font-weight-bold mt-3'><FontAwesomeIcon className='mr-2' icon={faBookOpen} />5000+</h5>
                    <small>Books covered</small>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;