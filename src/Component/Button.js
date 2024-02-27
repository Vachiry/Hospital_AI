import React from "react";
import styled from  "styled-components";

const ButtonComponent = styled.button`
 background-color: #C0BD75;
 color: #162F1F;
 padding: 15px 23px;
 border-radius: 18px;
 border-color: #5f5f5f;
 border-width: 0px;
 outline: 0;
 box-shadow: 0px 4px 10px gray;
 cursor: pointer;
 transition: ease background-color 350ms;
 &:hover {
    background-color: #a7a44b;
 }
 font-family: "Noto Sans Thai", sans-serif;
 font-size: 22px;

`;


const Button = ({type, variant, classname, id, onClick, size, children}) => {
return(
       <ButtonComponent
           type={type ? type : "button"}
           variant={variant}
           classname={classname ? `btn-component ${classname}` : "btn-component" }
           id={id}
           onClick={onClick}
           size={size}
        >
        {children}
        </ButtonComponent>


 );

}

export default Button