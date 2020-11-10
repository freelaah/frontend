import React, { useState } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';


const  ImagemServico = () => {
    
    
    const [image, setImage] = useState('');
    var base64 = require('base-64');

    openImage();

    async function openImage(){
        try {
      
            const response = await api.get("/services/5fa1d3853aa8974eee3d15a3");
            //setImage(`data:image/png;base64,${base64.decode(response.data.file)}`);
            console.log(">>>>", response.data.baseURL)
            //setImage(URL.createObjectURL(response.data.baseURL))
       
          }catch(error){
              console.log("erro " + error);
          }     
    }
    
    return (
        <>
            <Header title="Teste de imagem." />
            
            <img src={image}/>
        </>
        
    )
}

export default ImagemServico;