import React from 'react';


const PicCard = ({ picture }) => {
    console.log("props" , picture)
    return (
    
    <div>
        <h2>{picture.title}</h2>
        <img style={{width:500, height:500}}src={picture.url} alt="See Explination"/>
        <p>Picture by: {picture.copyright}</p>
        <p>Date Picture Taken: {picture.date}</p>
        <button onClick={() => alert(picture.explanation)}>Click Here for Picture Details </button> 
    </div>
        
    );
    
}

export default PicCard;
