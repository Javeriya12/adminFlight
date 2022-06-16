import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { push, ref } from "firebase/database";
import React, { useState } from "react";
import { firebaseDatabase } from "../backend/firebasehandler";
import { useNavigate } from "react-router-dom";


const AddFlight=()=>{

    const navigate = useNavigate();
    
    const [flightde,setFlightde]=useState({
        airline:null,
        date:null,
        depTime:null,
        arrTime:null,
        brdPoint:null,
        destination:null,
        cost:null,
    });

    const [validate,setValidate]= useState();

    const [airline,setAirline] = useState(false);
    const [date,setDate] = useState(false);
    const [depTime,setDepTime] = useState(false);
    const [arrTime,setArrTime] = useState(false);
    const [brdPoint,setBrdPoint] = useState(false);
    const [destination,setDestination] = useState(false);
    const [cost,setCost] = useState(false);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFlightde({
            ...flightde,
            [name]:value
        });
    };

    const handleClick = async ()=>{
        
        if(validate_from()){
            console.log(validate_from());
            const databaseRef=ref(firebaseDatabase,'flights');
            await push(databaseRef,{...flightde,occupancy:10});
        }
        navigate('/view')
    };

    const validate_from =()=>{
        let flag = true;
        if(!flightde.airline){
            setAirline("choose an airline");
            flag=false;
        } else {
            setAirline(true);
        }
        if(!flightde.date){
            setDate("choose an date");
            flag=false;
        } else {
            setDate(true);
        }
        if(!flightde.depTime){
            setDepTime("choose an departure time");
            flag=false;
        } else {
            setDepTime(true);
        }
        if(!flightde.arrTime){
            setArrTime("choose an Arrival time");
            flag=false;
        } else {
            setArrTime(true);
        }
        if(!flightde.brdPoint){
            setBrdPoint("enter an boarding point");
            flag=false;
        } else {
            setBrdPoint(true);
        }
        if(!flightde.destination){
           setDestination("Enter the destination");
            flag=false;
        } else {
            setDestination(true);
        }
        if(!flightde.date){
            setDate("choose an date");
            flag=false;
        } else {
            setDate(true);
        }
        if(!flightde.cost){
            setCost("enter  cost");
            flag=false;
        } else {
            setCost(true);
        }
        if(flag === true){
            return true;
        }
    };
    return(
        <div className="wrapper">
            <Typography variant="h4" sx={{textAlign:"center",margin:3}}>Add Flight</Typography>
            <div className="addflight-container">
                <div className="dropdown">
                    <InputLabel id ="demo-simple-select-label">AirLine</InputLabel>
                    {airline && <p>{airline}</p>}
                    <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       label="Airline"
                       name="airline"
                       onChange={handleChange}
                       sx={{width: 600,margin:"auto",marginBottom:5}}
                    >
                        <MenuItem value={"Saudhi Airways"}>Saudhi Airways</MenuItem>
                        <MenuItem value={"Singapore Airways"}>Singapore Airways</MenuItem>
                        <MenuItem value={"Dubai Airways"}>Dubai Airways</MenuItem>
                        <MenuItem value={"America Airways"}>America Airways</MenuItem>
                        <MenuItem value={"London Airways"}>London Airways</MenuItem>
                     </Select>
                </div>
                <div className="flights-form">
                    <div className="flights-form-element">
                        <InputLabel sx={{marginBottom:1}} id="demo-simple-select-label">Date</InputLabel>
                        {date && <p>{date}</p>}
                        <TextField
                         InputProps={{
                            inputProps:{
                                min:new Date().toISOString().slice(0,10),
                            },
                            }}
                            id="outlined-basic"
                            variant="outlined"
                            type="date"
                            name="date"
                            sx={{marginBottom:5,width:300}}
                            onChange={handleChange}
                        />
                            
                    </div>
                    <div className="flights-form-element">
                        <InputLabel sx={{marginBottom:1}} id="demo-simple-select-label">Departure Time</InputLabel>
                        {depTime && <p>{depTime}</p>}
                        <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="time"
                        name="depTime"
                        sx={{marginBottom:5,width:300}}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flights-form-element">
                    <InputLabel sx={{marginBottom: 1}} id="demo-simple-select-label">Arrival Time</InputLabel>
                        {arrTime && <p>{arrTime}</p>}
                        <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="time"
                        name="arrTime"
                        sx={{marginBottom:5,width:300}}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flights-form-element">
                    <InputLabel sx={{marginBottom: 1}} id="demo-simple-select-label">Boarding Point</InputLabel>
                        {brdPoint && <p>{brdPoint}</p>}
                        <TextField
                        id="outlined-basic"
                        label="Boarding Point"
                        variant="outlined"
                        name="brdPoint"
                        sx={{marginBottom:5,width:300}}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flights-form-element">
                    <InputLabel sx={{marginBottom: 1}} id="demo-simple-select-label">Destination</InputLabel>
                        {destination && <p>{destination}</p>}
                        <TextField
                        id="outlined-basic"
                        label="Destination"
                        variant="outlined"
                        name="destination"
                        sx={{marginBottom:5,width:300}}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flights-form-element">
                    <InputLabel sx={{marginBottom: 1}} id="demo-simple-select-label">Cost</InputLabel>
                        {cost && <p>{cost}</p>}
                        <TextField
                        type="number"
                        id="outlined-basic"
                        label="Cost"
                        variant="outlined"
                        name="cost"
                        sx={{marginBottom:5,width:300}}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <Button onClick={handleClick} variant="contained">Submit</Button>
            </div>
        </div>
    );

}

export default AddFlight;