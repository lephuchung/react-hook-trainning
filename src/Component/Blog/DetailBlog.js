import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../Customize/fetch';
import './DetailBlog.scss'

const DetailBlog = () => {
    let { id } = useParams();
    let data_url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data: dataBlogDetail, isLoading, isError } = useFetch(data_url, false);

    return (
        <div className='detail-blog-container'>
            {isLoading ?
                <div className='loading'>Loading...</div>
                :
                <>
                    {dataBlogDetail &&

                        <div className='blog-detail'>
                            <div className='title'>
                                {dataBlogDetail.title}
                            </div>
                            <div className='id'>Blog: {id}</div>
                            <div className='body'>
                                {dataBlogDetail.body}
                            </div>
                        </div>
                    }
                </>
            }
            <div className='back-button'>
                <Link to={`/blog`}><button>Back</button></Link>
            </div>


        </div >
    )
}

export default DetailBlog;