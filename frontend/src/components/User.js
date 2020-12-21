import React from 'react';

const User=(props)=> {
    return (
        <div>
          <h3>
     <div>User Name: {props.name}</div>      
     <div>User Mobile: {props.mobile}</div>      
     <div>User Email: {props.email}</div>      
     <div> User Password: {props.password}</div>      
     <div>User picture: {props.profilePcture}</div>      
   
    
    
   
    
    
    </h3>
        </div>
    )
}

export default User;
