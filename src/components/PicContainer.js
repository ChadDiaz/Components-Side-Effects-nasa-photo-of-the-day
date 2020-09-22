import React, { useEffect, useState } from 'react';
import PicCard from './PicCard'
import axios from 'axios'



const PicContainer = () => {
    // const API_KEY = "?fSDbaT0tSDURvG7vBj2amcClDalAZevlm3GJLXXV"
    // const API_URL = "https://api.nasa.gov/planetary/apod"

    const [picture, setPicture] = useState([])
    // const [date, setDate] = useState('')
    
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=fSDbaT0tSDURvG7vBj2amcClDalAZevlm3GJLXXV")
        .then(response => {
            console.log("Suc Response" , response)
            setPicture(response.data)
        })
        .catch(err => console.log("Err Resonse" , err))
    }, [])

    return (
        <div>
           <PicCard picture={picture} />
        </div>
       
    );
}

export default PicContainer;
