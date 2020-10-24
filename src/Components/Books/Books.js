import React from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import books from '../../books.jpg'

const Books = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-5'><FontAwesomeIcon className='mr-2' icon={faBook} />Free access to 5000+ books</h2>
            <div className='row  d-flex justify-content-center '>
                <div className='col-md-7 text-left mt-4'>
                    <h4 className='font-weight-bold'>Get access to the virtual library of 5000+ text books <br/> and reference books of various stateboards and <br/> competitive exams</h4> <br/> <br/> <br/>
                    <button className='btn btn-danger py-4 px-5 rounded ml-5'>Coming soon!</button>
                </div>
                <div className='col-md-5 mt-4'>
                    <img style={{ width: '100%' }} src={books} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Books;