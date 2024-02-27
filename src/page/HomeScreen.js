import "../App.css";
import NavBar from "../Component/NavBar";
import Button from "../Component/Button";
import {   useNavigate } from "react-router-dom";

function HomeScreen() {
  const text =  "ยินดีต้อนรับ \n ระบบคัดกรองอาการเบื้องต้น";  
  const navigate = useNavigate();           
  const EnterID = () => {
    navigate("/EnterID")
}

  return (
    <>
      <NavBar/>    
    
        <div className="Homeheadtext">{text}</div>
        <div className="Button">
              <Button onClick={EnterID}>คลิกที่นี่เพื่อเริ่มต้น</Button>

        </div>

    
      
    </>
  );
}


export default HomeScreen;