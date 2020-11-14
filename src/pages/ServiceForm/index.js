import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import Header from '../../components/Header';
import landing from './../../assets/images/pp.jpg';
import './styles.css';

import SelectCategories from '../../components/SelectCategories'

import api from '../../services/api';

const ServiceForm = () => {

    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path); //Joga o usuario para esse path
    }

    const formData = new FormData();
    const [pictures, setPictures] = useState([]);
    const [categoria, setCategoria] = useState('');

    const [id_user, setId_user] = useState(localStorage.getItem('id_user'));
    const [nome, setNome] = useState('');
    const [imageProfile, setImageProfile] = useState('');
        
    const [id_categoria, setId_categoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        buscarProfissional();
      }, [])  
    
    
    function changeType(value){
        setCategoria(value);
    }
    
    //image, descricao, categoria
    async function cadastrarServico() {
        
       formData.append('id_user', id_user);
       formData.append('id_categoria', id_categoria);
       formData.append('descricao', descricao);
       formData.append('preco', preco / 100);
       formData.append('image', pictures[0]);
       formData.append('ativo', true);

        try{
            let options = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                },
                body: formData
            }
            delete options.headers['Content-Type'];
            let retorno = await fetch('http://localhost:5000/services', options);
            routeChange('profissional');

        } catch(error) { //em caso de erro, faça um print do erro.
            console.log(error);
        }


    }

    async function buscarProfissional(){
        let json = null;
        
        try {
            json = await api.get("/users/" + id_user);

            setId_user(json.data._id);
            setNome(json.data.nome);
            // setImageProfile(`http://localhost:5000/files/${json.data.img_profile}`);
            setImageProfile(`http://localhost:5000/files/avatar.png`);

         }catch(e){
             console.log("erro " + e);
         }
    }
    
    const onDrop = picture => {
         setPictures(picture);
    } 

    return (
        <div>
            <Header title="Cadastrar Serviço" />
            <div className="service-form">
                <header>
                    <img src={imageProfile} alt="nome professor"/>
                    <div>
                        <strong>{nome}</strong>
                    </div>
                </header>

                <section>
                    <input id="telefone" name="telefone" type="text" placeholder="Telefone" onChange={(text) => setTelefone(text.target.value)}/>
                    <input id="descricaoServico" name="descricaoServico" type="text" placeholder="Descrição do serviço" onChange={(text) => setDescricao(text.target.value)}/>
                    <input id="preco" name="preco" type="number" placeholder="Preço" min="1" onChange={(text) => setPreco(text.target.value)}/>
            
                    <SelectCategories onChange={(id) => setId_categoria(id)}/>
                    
                    <ImageUploader
                        withIcon={true}
                        buttonText='Selecione uma imagem...'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        buttonClassName="imageButton"
                    />   
                    <button onClick={cadastrarServico} className="cadService">Cadastrar Serviço</button>
                </section>
                
            </div>
        </div>
    )
}

export default ServiceForm;