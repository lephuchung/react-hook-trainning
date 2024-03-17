import useFetch from '../../Customize/fetch';
import './Blog.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from './AddNewBlog';
import { useRef } from 'react';

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data_url = "https://jsonplaceholder.typicode.com/posts";
    const { data: dataBlog, isLoading, isError } = useFetch(data_url, false);


    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newDataSimple = dataBlog.slice(0, 12);
            setNewData(newDataSimple);
        }
    }, [dataBlog]);

    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog);
        setShow(false);
        setNewData(data)
        console.log('check new data: ', newData);
    }

    return (
        <>
            <Button variant="primary" className='my-3' onClick={handleShow}>
                Add new blog
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>
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
