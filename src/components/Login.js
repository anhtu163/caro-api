import React from 'react';


const Login = () =>{
    return(
    <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button type='button'>login</button>
            <p className="message">Not registered? <a href="/register">Create an account</a></p>
          </form>
        </div>
    </div>
        
        
      
    )
}

export default (Login)