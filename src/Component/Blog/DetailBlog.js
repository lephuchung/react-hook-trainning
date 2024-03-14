import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DetailBlog = () => {
    let { id } = useParams();

    return (
        <div>
            Blog: {id}
            <div>
                <Link to={`/blog`}><button>Back</button></Link>
            </div>

        </div >
    )
}

export default DetailBlog