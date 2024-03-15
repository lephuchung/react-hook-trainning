import React, { useState } from 'react';
import './AddNewBlog.scss';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleOnChangeContent = (event) => {
        setContent(event.target.value)
    }
    const handleOnClickSubmit = () => {
        console.log('check submit: ', title, content);
    }
    return (
        <div className='add-new-blog-container'>
            <div>--- Add New Blog ---</div>
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