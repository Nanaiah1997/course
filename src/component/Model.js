import React from 'react'
import { Form } from 'react-router-dom';
import "./Model.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Model({closeModel}) {

  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
  }
  
  return (
    // <div>
    //     <button onClick={()=>closeModel(false)}>X</button>
    // </div>

    <form className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
           closeModel(false);
          }}
        >
          X
        </button>
      </div>
      <h5>Sign Up</h5>
      <div className="title">
        <label>Name</label>
        <br></br>
        <input type='text' placeholder='Enter Name'/>
      </div>
      <div className="body">
        <label>Email</label>
        <br></br>
        <input type='email' placeholder='Enter email'/>
       </div>
       <div className='body'>
        <label>PassWord</label>
        <br></br>
        <input type='password' placeholder='Enter Password'/>

      </div>
      <div className="footer">
        {/* <button
          onClick={() => {
            closeModel(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button> */}
        {/* <button className='Model-btn' onClick={() => {
            closeModel(false);
          }}>Register</button> */}
                  <button className='Model-btn' onClick={showToastMessage
           }>Register</button>
          
      </div>
    </div>
  </form>

  )
}

export default Model