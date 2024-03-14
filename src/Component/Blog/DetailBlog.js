import React from 'react';
import { useParams } from 'react-router';

const DetailBlog = () => {
    let { id } = useParams();
    return (
        <div>
            Blog: {id}
        </div>
    )
}

export default DetailBlog