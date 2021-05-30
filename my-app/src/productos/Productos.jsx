import './productos.css';
import React from 'react'
import Results from './Results'
import Filtros from './Filtros'

// Hooks, roots, etc
import { useState } from "react";

//imagenes
import next from '../images/icons/arrow-right.svg'
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Productos({productsItems}){

    let [categoryFilter, setCategoryFilter] = useState("Todas");
    let [productList, setProductList] = useState(productsItems);


    return (
        <div className="productos">
            <div className="portada"></div>
            <div className="filter-container">
               {/* filtros */}
               <form action="">
                    <Filtros
                    productsItems={productsItems}
                    stateFilter={categoryFilter}
                    category={category}
                    />
                    <button type="reset" onClick={btnReset}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        Borrar filtros
                    </button>
                </form>
            </div>
            <Results
                productList={productList}
                productsItems={productsItems}
            />
            {/* paginador */} 
            <a className="pagination" href="" target="_self">
                Siguiente
                <img src={next} alt="next"/>
            </a>
            {/* paginador */} 
        </div>
    );
    function category(ultimaLista, state) {
        setCategoryFilter(state);
        setProductList(ultimaLista);
    };

    function btnReset() {
        setProductList(productsItems);
        setCategoryFilter("Todas");
    };
};

export default Productos;