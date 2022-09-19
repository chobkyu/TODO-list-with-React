import React from 'react';

function CreateTodo({title,body,onChange, onCreate}){
    return(
        <div>
            <input 
                className='input'
                name="title"
                placeholder="해야 될 일"
                onChange={onChange}
                value={title}
            ></input>
            <input 
                className='input'
                name="body"
                placeholder="내용"
                onChange={onChange}
                value={body}
            />
            <button className='btn-input' onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateTodo;