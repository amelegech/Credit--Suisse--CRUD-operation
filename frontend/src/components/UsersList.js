import React,{useEffect} from 'react';
import AllUser from './allUser';
import axios from 'axios';


const UsersList=()=> {
const [userData, setUserData]=React.useState({users:[]});
  
useEffect(()=>{
    allUsersData()
  }) 
const allUsersData =()=>{
    axios.get("http").then((res)=>{
        console.log("Axios resalt from backend", res.data)
        setUserData({...userData, users:res.data})

    }).catch((error)=>{
        console.log("Error from axios", error.message)
    })
}  
return (
        <div>
            <h2>Credit Suisse Users</h2>
            {userData.users.map((item)=>{
                return( <AllUser 
                
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
