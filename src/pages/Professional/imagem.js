import React from 'react';
import Header from '../../components/Header';

import api from '../../services/api';


const  ImagemServico = () => {
    
    let image = null;

    openImage();

    async function openImage(){
        try {
      
            const response = await api.get("/services/5fa1d3853aa8974eee3d15a3");
            image = response.data.file;

            console.log(">>>>", image)
       
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