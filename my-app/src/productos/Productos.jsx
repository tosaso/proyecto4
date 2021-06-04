import './productos.css';
import React from 'react'
import Results from './Results'
import Filtros from './Filtros'
import Paginador from './Paginador'

// Hooks, roots, etc
import { useState } from "react";

//imagenes
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Productos({productsItems,categoryItems}){

    let [productList, setProductList] = useState([]);


    return (
        <div className="productos">
            <div className="portada"></div>
            <div className="filter-container">
               {/* filtros */}
               <form action="">
                    <Filtros
                    categoryItems={categoryItems}
                    productsItems={productsItems}
                    filter={filter}
                    
                    />
                    <button type="reset" onClick={btnReset}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        Borrar filtros
                    </button>
                </form>
            </div>
            <Results
                productList={productList}
            />
            <Paginador
            productsItems={productsItems} />
        </div>
    );

    function filter(selected){
        setProductList(selected)
       
    }

    function btnReset() {
        setProductList(productsItems);

    };
};

export default Productos;