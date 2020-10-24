import React from 'react';
import { faUpload, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sad from '../../sad.png'
import smile from '../../smile.jpg'
import greaterthan from '../../greaterthan.png'
import { Form } from 'react-bootstrap';
import './HowItWorks.css'
const HowItWorks = () => {
    return (
        <div id='how-it-works'>
            <h2 className='text-center'>How it works</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <h5 className='font-weight-bold my-3'>Have a doubt?</h5>
                    <img style={{ width: '100px' }} src={sad} alt="" />
                </div>
                <img style={{ width: '30px', height: '30px', marginTop: '145px' }} src={greaterthan} alt="" />
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <h5 className='font-weight-bold my-3'>Type your question</h5>
                    <Form.Control type="email" className='col-12' placeholder="Search your doubt here" />
                    <h6>or</h6>
                    <button className='btn btn-primary rounded my-4'> <FontAwesomeIcon className='mr-2' icon={faUpload} />Upload an image</button>
                </div>
                <img style={{ width: '30px', height: '30px', marginTop: '145px' }} src={greaterthan} alt="" />
                <div className="col-md-6 col-lg-2 col-8 m-5 shadow p-3 mb-5 text-center bg-white" style={{ borderRadius: '20px' }} data-aos="flip-left">
                    <h5 className='font-weight-bold my-3'>You got answer!</h5>
                    <img style={{ width: '100px' }} src={smile} alt="" />
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-primary rounded my-4'> <FontAwesomeIcon className='mr-2' icon={faDownload} />Clarify your doubts now</button>
            </div>
        </div>
    );
};

export default HowItWorks;