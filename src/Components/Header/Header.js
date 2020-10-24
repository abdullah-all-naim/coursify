import React from 'react';
import illustrations from '../../Illustration.png'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className='container my-5'>
            <div className='row  d-flex justify-content-center'>
                <div className='col-md-6 text-left mt-4'>
                    <h1 className='font-weight-bold'>Clarify Your Doubts <br />in Your <h1 className='font-weight-bold d-inline text-info'>Language</h1> </h1> <br/> <br/> <br/>
                    <button className='btn btn-primary px-5 rounded ml-5'> <FontAwesomeIcon className='mr-2' icon={faDownload} /> Download our app for free </button>
                </div>
                <div className='col-md-6 mt-4'>
                    <img style={{ width: '100%' }} src={illustrations} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;