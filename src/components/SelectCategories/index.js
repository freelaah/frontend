import React, { useEffect, useState } from 'react';

import api from '../../services/api';

const SelectCategories = (props) => {
    
    //Callback aqui que se faz a comunicacao com o componente pai.
    const cb = props.onChange; 
    
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoria, setCategoria] = useState("")

    useEffect(() => {
        buscarTodasCategorias();
      }, [])  
   
    async function buscarTodasCategorias(){
        try {
            const json = await api.get("/categories");
        
            json.data.map(item =>{
                options.push({id:item._id, nome:item.nome})
             })

             setLoading(true);

         }catch(e){
             console.log("erro " + e);
         }
    }

    function handleChange(e) {
        e.preventDefault();
        //Chama a funcao Callback
        setCategoria(e.target.value);
        cb(e.target.value); 
    }

    let Select = () => <div>Carregando...</div> ;
    

    if(loading){
        Select = () => <select onChange={(e) => handleChange(e)} value={categoria}>
            <option value="" disabled hidden>Categoria</option>
            {
            options.map(data => <option value={data.id} key={data.id}>{data.nome}</option>)
            }
            </select>;    
    }

    return(
        <Select/>
    );

}

export default SelectCategories;