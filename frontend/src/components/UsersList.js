import React,{useEffect} from 'react';
import User from './User';
import axios from 'axios';


const UsersList=()=> {
const [userData, setUserData]=React.useState({usersList:[]});
  
useEffect(()=>{
    allUsersData()
  },[]) 
const allUsersData =()=>{
    axios.get("http://localhost:8080/bank/allUsers").then((res)=>{
        console.log("Axios resalt from backend", res.data)
        setUserData({userData,usersList:res.data.data})

    }).catch((error)=>{
        console.log("Error from axios", error.message)
    })
}  
return (
        <div>
            <h2>Credit Suisse Users</h2>
            {userData.usersList.map((item, index)=>{
                return( <User 
                
                key={item.id}
                name={item.name}
                mobile={item.mobile}
                email={item.email}
                password= {item.password}
                profilePcture= {item.profilePcture}
                
                /> )

            })}
        </div>
    )
}

export default UsersList;
