import React, {useEffect, useState} from 'react';
import ImageUploader from 'react-images-upload';
import Header from '../../components/Header';

import SelectCategories from '../../components/SelectCategories'

import api from '../../services/api';


const Professional = () => {

    const formData = new FormData();
    const [pictures, setPictures] = useState([]);

    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
  
    //image, descricao, categoria
    async function cadastroCategoria() {
        formData.append('image', pictures[0]);
        formData.append('descricao', descricao);
        formData.append('categoria', categoria);
        formData.append('subcategoria', []);

        try {
            let options = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: formData
            }
            console.log(formData)
            delete options.headers['Content-Type'];

            let retorno = await fetch('http://localhost:5000/services', options);
        } catch (error) { //em caso de erro, faça um print do erro
            console.error(error);
        }

    }
    
    const onDrop = picture => {
         setPictures(picture);
    } 

    function rInformacoes(item){
        console.log(">>>> fornecer informacoes", item)
        setCategoria(item)
    }
   
    return (
        <div>
            <Header title="Meus Serviços" />
            <h1>Página Profissional: Você está logado no sistema</h1>

            <input type="text" placeholder="Descricao" value={descricao} onChange={(text) => setDescricao(text.target.value)}></input>
            <label>Categoria
                <SelectCategories onChange={(text) => setCategoria(text)}/>
                {categoria}
            </label>
            <ImageUploader
                withIcon={true}
                buttonText='Escolha uma imagem'
                onChange={onDrop}
                imgExtension={['.jpg', 'jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />   
            <button onClick={cadastroCategoria}>Cadastrar um Serviço</button>
        </div>
    )
}

export default Professional;