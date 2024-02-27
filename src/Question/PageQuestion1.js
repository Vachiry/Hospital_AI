import "../Questionaire.css";
import Stepper from "../Component/Stepper";
import NavBar from "../Component/NavBar";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function PageQuestion1() {
    

    const navigate = useNavigate();           
    const Form = () => {
    navigate("/Form")
    }
    
    return(
       <>
         <NavBar/>    
         <Stepper />
            <GoArrowLeft className="ArrowLeft" onClick={Form}/>
       
       
       </>


    );

}

export default PageQuestion1;