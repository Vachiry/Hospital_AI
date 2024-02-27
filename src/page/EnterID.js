import "../App.css";
import NavBar from "../Component/NavBar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

function EnterID() {
    const Headtext =  "กรุณากรอกหมายเลขไอดีของท่าน";  
    const [val, setVal] = useState(' ')
    const click = () => {
        alert(val)
    }
    const navigate = useNavigate();           
    const HomeScreen = () => {
       navigate("/HomeScreen")
}
   
    return(
        <>
            <NavBar/>  
            <GoArrowLeft className="ArrowLeft" onclick = {HomeScreen}/>
            <div classname =" create">
                <div className="Headtext">{Headtext}
              
                    <input type="text" className="inputblock" onChange={(e) => setVal(e.target.value)}/>
                    <Button classname= "nextto" onClick = {click}>ถัดไป</Button>
                    
                 </div>
            </div>
            
        </>
    );
}

export default EnterID;