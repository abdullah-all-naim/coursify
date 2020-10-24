import React from 'react';
import { faBookReader, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tablet from '../../tablet.png'

const NeetExam = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-5'><FontAwesomeIcon className='mr-2' icon={faBookReader} />NEET Preparation</h2>
            <div className='row  d-flex justify-content-center align-items-center'>
                <div className='col-md-5 mt-4'>
                    <img style={{ width: '100%' }} src={tablet} alt="" />
                </div>
                <div className='col-md-7 text-left mt-4'>
                    <h4 className='font-weight-bold'><FontAwesomeIcon className='mr-2 text-success' icon={faCheckCircle} />Multi-Lingual Video Explanation</h4>
                    <h4 className='font-weight-bold'><FontAwesomeIcon className='mr-2 text-success' icon={faCheckCircle} />All Subjects Covered</h4>
                    <br /> <br /> <br />
                    <button className='btn btn-primary py-2 px-5 rounded ml-5'>Prepare for NEET now</button>
                </div>

            </div>
        </div>
    );
};

export default NeetExam;