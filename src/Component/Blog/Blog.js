import React from 'react'
import useFetch from '../../Customize/fetch';
import './Blog.scss'
import { Link } from 'react-router-dom';

const Blog = () => {

    const data_url = "https://jsonplaceholder.typicode.com/posts";
    const { data: dataBlog, isLoading, isError } = useFetch(data_url, false);
    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 12)
    }
    console.log('check data', dataBlog);
    return (
        <>
            <div className='add-blog'>
                <span className='add-blog-btn'>
                    <Link to={'/blog/add-new-blog'}>Add new blog</Link>
                </span>
            </div>
            <div className='blog-list'>
                {newData && newData.length > 0 &&
                    newData.map((item, index) => {
                        return (
                            <div key={item.id} className='blog-child'>
                                <div className='title'>{item.title} </div>
                                <div className='body'>{item.body} </div>
                                <Link to={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <button>View detail</button>
                                </Link>
                            </div>
                        )
                    })}
                {isLoading === true &&
                    <div className='loading'>Loading...</div>
                }
            </div>
        </>
    )
}

export default Blog