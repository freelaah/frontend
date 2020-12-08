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
    //const [dataServico, setDataServico] = useState('');

    useEffect(() => {
        buscarProfissional();
      }, [])  
        
   /* function changeType(value){
        setCategoria(value);
    }*/
    
    //image, descricao, categoria
    async function cadastrarServico() {
        console.log('preco', getMoney(preco));

       formData.append('id_user', id_user);
       formData.append('id_categoria', id_categoria);
       formData.append('descricao', descricao);
       formData.append('preco', getMoney(preco));
       formData.append('image', pictures[0]);
       formData.append('ativo', true);
       //formData.append('telefone', telefone); 
    
      try {
           let json = await api.post("/services", formData);
           routeChange('profissional');
           }catch(e){
            alert("Voce nao esta mais logado no sistema.");
            routeChange('login');
        }
    }

    async function buscarProfissional(){
        let json = null;
        
        try {
            json = await api.get("/users/" + id_user);

            setId_user(json.data._id);
            setNome(json.data.nome);
            //Sem imagem ele pega a imagem no back: sem_imagem.jpg
            setImageProfile(`http://localhost:5000/files/${json.data.img_profile}`);
         }catch(e){
             console.log("erro " + e);
         }
    }
    
    const onDrop = picture => {
         setPictures(picture);
    } 

    //Todo: Melhorar e colocar o real R$ 20,00
    //http://wbruno.com.br/expressao-regular/formatar-em-moeda-reais-expressao-regular-em-javascript/
    function getMoney( str ){
        let number = parseInt( str.replace(/[\D]+/g,'') );           
        return  isNaN(number) ? "" : number;
    }
    
    function formatReal (int) {
        let tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        console.log(tmp);
        return tmp;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
  
    today = yyyy+'-'+mm+'-'+dd;


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
                    <input id="descricaoServico" name="descricaoServico" type="text" placeholder="Descrição do serviço" onChange={(text) => setDescricao(text.target.value)}/>
                    <input id="preco" name="preco" type="text" placeholder="Preço" value={preco} onChange={(text) => setPreco(formatReal(getMoney(text.target.value)))}/>

                    <SelectCategories onChange={(id) => setId_categoria(id)}/>
                
                    {/* <input id="dataServico" name="dataServico" type="date" className="date" min={today} onChange={ (data) => setDataServico(data.target.value)} />    */}
                    
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