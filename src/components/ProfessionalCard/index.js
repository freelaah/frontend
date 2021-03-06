import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import editarImg from './../../assets/images/editar.svg';
import excluirImg from './../../assets/images/excluir.svg';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal , Button} from 'react-bootstrap';

const ProfessionalCard = (props) => {

  const [categoria, setCategoria] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const callback = props.cb; 

  useEffect(() => {
    buscarCategoria(props.categoria_id);
  }, []); 

  async function buscarCategoria(id_categoria){
  
    try {
        const json = await api.get("/categories/" + id_categoria );
        setCategoria(json.data.nome);
     }catch(e){
         console.log("erro " + e);
     }
  }

 function deleteCallback(){
    callback(props.servico_id, props.item);
    handleClose();
 }
  
  return (
    <article className="teacher-item">
      <header>
          <img src={props.img_profile} alt={props.nome}/>
          <div>
              <strong>{props.nome}</strong>
              <span>{categoria}</span>
          </div>
      </header>

      <p align="center">{props.descricao}</p>

      <div className="wrapper-img">
        <img src={props.img_servico} alt="sobre"/>
      </div>

      <footer>
          <p>
              Preço/hora
              <strong>{props.preco}</strong>
          </p>
          <div className="buttons">
            {/* <button type="button" className="editar">
              <img src={editarImg} />
            </button> */}
            <button type="button" className="excluir"  onClick={handleShow}>
              <img src={excluirImg} />
            </button>
          </div>
      </footer>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir o seu serviço.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você tem certeza que deseja excluir o seu serviço.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="danger" onClick={ deleteCallback }>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>

    </article>
  );
}

export default ProfessionalCard;
