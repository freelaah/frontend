import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';


const Professional = () => {

    const formData = new FormData();
    const [pictures, setPictures] = useState([]);
    
    //image, descricao, categoria
    async function cadastroCategoria() {
        formData.append('image', pictures[0]);
        formData.append('descricao', 'teste');
        formData.append('categoria', 'categoria teste');


        try{
            console.log('passou aqui');
            let options = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
                body: formData
            }
            delete options.headers['Content-Type'];
            let retorno = await fetch('http://localhos:5000/services', options);
        } catch(error) { //em caso de erro, faça um print do erro.
            console.log(error);
        }
    }
    
    const onDrop = picture => {
         setPictures(picture);
    } 

    return (
        <div>
            <h1>Página Profissional: Você está logado no sistema</h1>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />   
            <button onClick={cadastroCategoria}>Cadastrar Categoria</button>
        </div>
    )
}

export default Professional;