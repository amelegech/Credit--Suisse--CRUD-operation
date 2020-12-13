import React from 'react';

const AllUser=(props)=> {
    return (
        <div>
           <h2>Credit Suisse User List </h2>
           <ol>
    <li>User Name: {props.name}</li>
    <li>User Mobile: {props.mobile}</li>
    <li>User Email: {props.email}</li>
    <li>User Password: {props.password}</li>
    <li>User picture: {props.profilePcture}</li>
    
           </ol>
        </div>
    )
}

export default AllUser;
