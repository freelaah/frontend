import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
import Header from '../../components/Header';
import landing from './../../assets/images/pp.jpg';
import './styles.css';

const ServiceForm = () => {

    const formData = new FormData();
    const [pictures, setPictures] = useState([]);
    const [categoria, setCategoria] = useState('');

    function changeType(value){
        setCategoria(value);
    }
    
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
            <Header title="Cadastrar Serviço" />
            <div className="service-form">
                <header>
                    <img src={landing} alt="nome professor"/>
                    <div>
                        <strong>Sillas Vinícius</strong>
                    </div>
                </header>

                <section>
                    <input id="telefone" name="telefone" type="text" placeholder="Telefone"/>

                    <input id="descricaoServico" name="descricaoServico" type="text" placeholder="Descrição do serviço"/>

                    <select defaultValue={categoria} id="categoria" onChange={(evt) => changeType(evt.target.value) }>
                        <option value="" disabled hidden>Categoria</option>
                        <option value="1">Designer de Interfaces</option>
                        <option value="2">Programador</option>
                        <option value="3">Cozinheiro</option>
                        <option value="4">Pintor</option>
                        <option value="5">Enfermeira</option>
                        <option value="6">Professor</option>
                    </select>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Selecione uma imagem...'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        buttonClassName="imageButton"
                    />   
                    <button onClick={cadastroCategoria} className="cadService">Cadastrar Serviço</button>
                </section>
                
            </div>
        </div>
    )
}

export default ServiceForm;