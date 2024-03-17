import React, { useState } from 'react';
import './AddNewBlog.scss';
import axios from 'axios';

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // xem thêm react hook form để tăng hiệu suất validate thông tin đối với những form nhiều dòng input
    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleOnChangeContent = (event) => {
        setContent(event.target.value)
    }
    const handleOnClickSubmit = async () => {
        if (!title) {
            alert('missing title!');
            return;
        }
        if (!content) {
            alert('missing content!');
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
            console.log('check new blog: ', newBlog);
        }
        console.log('check res: ', res);
    }
    return (
        <div className='add-new-blog-container'>
            <div className='add-component'>
                <label className='add-title'>Title:</label>
                <input className='add-input' type='text' value={title} onChange={(event) => handleOnChangeTitle(event)} />
            </div>
            <div className='add-component'>
                <label className='add-title' >Content:</label>
                <input className='add-input' type='text' value={content} onChange={(event) => handleOnChangeContent(event)} />
            </div>
            <div className='add-component'>
                <button className='add-btn' type='button' onClick={handleOnClickSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddNewBlog