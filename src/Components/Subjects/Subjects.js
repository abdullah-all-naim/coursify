import React from 'react';
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import math from '../../math.png'
import physics from '../../physics.png'
import chemistry from '../../chemistry.png'
import biology from '../../biology.png'

const Subjects = () => {
    return (
        <div>
            <h2 className='text-center'><FontAwesomeIcon className='mr-2' icon={faUpload} />Explore Our Subjects</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <img style={{ width: '100px' }} src={math} alt="" />
                    <h5 className='font-weight-bold my-3'>Math</h5>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <img style={{ width: '100px' }} src={physics} alt="" />
                    <h5 className='font-weight-bold my-3'>Physics</h5>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <img style={{ width: '100px' }} src={chemistry} alt="" />
                    <h5 className='font-weight-bold my-3'>Chemistry</h5>
                </div>
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <img style={{ width: '100px' }} src={biology} alt="" />
                    <h5 className='font-weight-bold my-3'>Biology</h5>
                </div>
            </div>
        </div>
    );
};

export default Subjects;