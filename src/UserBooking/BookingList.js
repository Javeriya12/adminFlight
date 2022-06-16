import { Button } from "@mui/material";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseDatabase } from "../backend/firebasehandler";
import { useNavigate } from "react-router-dom";
import './BookingListStyles.css';

const Booking=({name,sendPosts})=>{
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fireref = ref(firebaseDatabase,"User-List")
       onValue(fireref, (snapshot) => {
            setPosts(Object.values(snapshot.val()));
          });
      
    },[])

    return(
        <div>
        <header>
            <h1>Welcome</h1>
            <Button sx={{height:"50px",margin:"10px 10px 0 10px"}} variant="contained" onClick={() => navigate("/")}>Log Out</Button>
        </header>
        <div className="post-container">
            <h1>User Booking List:</h1>
            {posts.map((post,index) => {
                return (
                    <div className="posts" key={index}>
                      <h1>{post.Name}</h1>
                      <h1>{post.gender}</h1>
                      <h1>{post.phno}</h1>
                      <p>Name</p>
                      <p>Gender</p>
                      <p>Phone Number</p>
                      <h1>{post.email}</h1>
                      <p></p>
                      <p></p>
                      <p>Email</p>
                    </div>
                )
            })}
        </div>
      </div>

    )
}
export default Booking;