import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDatabase } from "../backend/firebasehandler";
import {Button} from "@mui/material";
import './HomePageStyles.css';

const HomePage=()=>{

    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fireref = ref(firebaseDatabase,"flights")
        onValue(fireref, (snapshot) => {
            setPosts(Object.values(snapshot.val()));
          });
      
    },[])

  

    return(
        <div>
                <header>
              <h1>Welcome </h1>
              <Button sx={{height:"50px",margin:"10px 10px 0 10px"}} variant="contained" onClick={() => navigate("/add")}>Add Flight</Button>
          </header>
          <div className="post-container">
              <h1>All Listings</h1>
              {posts.map((post,index) => {
                  return (
                      <div className="posts" key={index}>
                        <h2>{post.airline}</h2>
                        <h2>{post.date}</h2>
                        <h2>{post.depTime}</h2>
                        <p>Airline</p>
                        <p>Date</p>
                        <p>Departure Time</p>
                        <h2>{post.arrTime}</h2>
                        <h2>{post.brdPoint}</h2>
                        <h2>{post.destination}</h2>
                        <p>Arrival Time</p>
                        <p>Boarding Point</p>
                        <p>Destination</p>
                        <h2>{post.cost}</h2>  
                        <p></p>
                        <p></p>
                        <p>cost</p>  
                      </div>
                  )
              })}
          </div>

        </div>
    )
}

export default HomePage;