import React from 'react';

function CreateTodo(props:any){
    return(
        <div >
        <div className='input-todo'>
            <input 
                className='input'
                name="title"
                placeholder="해야 될 일"
                onChange={props.onChange}
                value={props.title}
            ></input>
            <input 
                className='input'
                name="body"
                placeholder="내용"
                onChange={props.onChange}
                value={props.body}
            />
            <button className='btn-input' onClick={props.onCreate}>등록</button>
        </div>
        
    </div>
    )
}

export default CreateTodo;