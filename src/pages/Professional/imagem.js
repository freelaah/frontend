import React, { useState } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';


const  ImagemServico = () => {
    
    
    const [image, setImage] = useState('');
    var base64 = require('base-64');

    openImage();

    //Esse componente so esta aqui para teste para abrir imagem.
    async function openImage(){
        try {
      
            const response = await api.get("/services/5fa1f42e9f5b407a0670e959");
            //setImage(`data:image/png;base64,${base64.decode(response.data.file)}`);
            console.log(">>>>", response.data.baseURL)
            //setImage(URL.createObjectURL(response.data.imgURL));
            setImage('http://localhost:5000/files/' + response.data.imgURL);
       
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