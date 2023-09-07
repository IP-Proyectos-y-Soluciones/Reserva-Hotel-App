import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCategories } from '../../redux/actions/categoriesActions';

const Filtros = () => {
    
   

    return(        
        <div>                      
        <select onChange={e => handleOrder(e)} data-te-select-init>
             <option value="" >Ordenar por</option>
             <option value="menor-mayor" >Menor precio</option>
             <option value="mayor-menor" >Mayor precio</option>            
        </select>        

        <select onChange={e => handlerFilterChange(e)}>
            <option value=''>Temporada</option>
            <option value="all">Todas</option>
            <option value="americano_alta">Temporada alta</option>
            <option value="americano_baja">Temporada baja</option>
        </select>

        <select onChange={e => filterCategories(e)}>
            <option value=''>Categoria</option>
            <option value="all">Todas</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Premium loft">Premium loft</option>
        </select>
        </div>
        
        
    )
};

export default Filtros;