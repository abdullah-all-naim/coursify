import React from 'react';
import liveclass from '../../liveclass.png'
import { faGraduationCap,faClock, faGlobe, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiveClass = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center my-5'><FontAwesomeIcon className='mr-2' icon={faPlayCircle} />Live Classes</h2>
            <div className='row  d-flex justify-content-center '>
                <div className='col-md-6'>
                    <img style={{ width: '100%' }} src={liveclass} alt="" />
                </div>
                <div className='col-md-5 text-left mt-5 ml-5'>
                    <h3 className='font-weight-bold'><FontAwesomeIcon className='mr-2' icon={faGlobe} />Accesible everywhere</h3>
                    <small>Access to quality education anytime, anywhere</small> 
                    <br /> <br /> <br />
                    <h3 className='font-weight-bold'><FontAwesomeIcon className='mr-2' icon={faGraduationCap} />Expert Teachers</h3>
                    <small>Learn from the best tutors in india</small>
                     <br /> <br /> <br />
                    <h3 className='font-weight-bold'> <FontAwesomeIcon className='mr-2' icon={faClock} /> <h3 className='font-weight-bold d-inline text-primary'>Interactive sessions</h3> videos</h3>
                    <small>Small groups for maximum student-teacher interaction</small> 
                    <br /> <br /> <br />
                </div>
            </div>
        </div>
    );
};

export default LiveClass;