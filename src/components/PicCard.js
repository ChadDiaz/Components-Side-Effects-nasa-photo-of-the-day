import React, { useState } from 'react';
import "../App.css";
import styled from "styled-components"
import { Alert } from 'reactstrap'


const ContDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    align-items: center;
    padding: 10px;
`
const InfoCont = styled.div `
background-image: src=public\images\nasa-logo.png;
display: flex;
flex-direction: column;
align-content: space-between;
`


const PicCard = ({ picture }) => {
    console.log("props" , picture)
    const [visable] = useState(true);
    
    return (
    <ContDiv>
        <div className="image" style={{ backgroundImage: `url(${picture.url})`}}>
            <img src={picture.url} alt="See Explination"/>
        </div>
        <InfoCont> 
           <h2>{picture.title}</h2>
           {picture.copyright !== undefined && <h2>Photographer: {picture.copyright}</h2>}
            <p>Date Picture Taken: {picture.date}</p>
            <Alert color="info" isOpen={visable}>{picture.explanation}</Alert> 
        </InfoCont>
    </ContDiv>
        
        
    );
    
}

export default PicCard;
