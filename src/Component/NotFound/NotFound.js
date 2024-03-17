import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <h4>This Page Isn't Available</h4>
            <h5>The link may be broken, or the page may have been removed. Check to see if the link you are trying to open is correct.</h5>
            <button className='btn btn-primary'><Link to={`/`}>Back To Home Page</Link></button>
        </div>
    )
}

export default NotFound