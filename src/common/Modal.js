import React from 'react'

const Modal = (props) => {

    return (
        <>
            <div className='modal-custom'>
                <div className='modal-content-custom'>
                    <div>Hello Buddy</div>
                    <p>This is React Modal Implementation</p>
                    <br></br>
                    <button className='btn btn-info' type='button' onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Modal;