import React, { useEffect, useState } from 'react';
import axios from "axios";
import NasaCard from "../CardContainer/NasaCard.js";

const NasaDataList = () => {
    
    const initialState = [];
    const [photos, setPhotos] = useState(initialState);

    const EffectCB = () => {
        console.log('calling effect Fn')
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=Xxqh9Yd0hKc72NEdPQf8b91JAzg57ucNzWxGruWt')
            .then(response => {
                console.log("response from api: ", response.data)
                setPhotos(response.data)
            })
            .catch(error => console.log(error))
    }
    useEffect(EffectCB, []);


    console.log("initial render", photos);

    
    return (
        <div>
            <NasaCard photo={photos} />
        </div>
    );
    
};

export default NasaDataList;