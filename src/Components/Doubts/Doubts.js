import React from 'react';
import doubts from '../../doubts.png'
import { faPlayCircle, faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doubts = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center my-5 py-5'><FontAwesomeIcon className='mr-2' icon={faQuestionCircle} />Solve your doubts faster</h2>
            <div className='row  d-flex justify-content-center'>
                <div className='col-md-6 text-left mt-4'>
                    <h3 className='font-weight-bold'><FontAwesomeIcon className='mr-2' icon={faGlobe} />Accesible everywhere</h3>
                    <small>Access to quality education anytime, anywhere</small>
                     <br/> <br/> <br/>
                    <h3 className='font-weight-bold'> <FontAwesomeIcon className='mr-2' icon={faPlayCircle} /> <h3 className='font-weight-bold d-inline text-primary'>1 milion+</h3> videos</h3>
                    <small>Unilimited access to the video solutions</small>
                     <br/> <br/> <br/>
                </div>
                <div className='col-md-6 mt-4'>
                    <img style={{ width: '100%' }} src={doubts} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Doubts;