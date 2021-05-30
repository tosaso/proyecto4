import React from 'react'
import { useState } from "react";

function Filtros({stateFilter,productsItems, category,}){
 

    let categories = productsItems
    var options = {};
    categories = categories.filter(function(current) {
    var exists = !options[current.category];
    options[current.category] = true;
    return exists;
    });


    return(
        <>
            <select name="Categorias" id="categories" onChange={filterCategory}>
                {categories.map((option)=>
                    <option key={option._id} value={option.category}>{option.category}</option>
                )}
            </select>
            <button onCLick="">Más bajo primero</button>
            <button onCLick="">Más alto primero</button>
        </>
    );
    
    function filterCategory(e){
        let updatelist = productsItems
        .filter((value) => {
            return e.target.value === "Todos"
              ? value
              : value.category === e.target.value;
          });
          category(updatelist, e.target.value);
    };




     //filtra de menor a mayor
        //   function cheapOrder(e) {
    //     cheapOrder.sort(function(a, b) {
    //         if (a.cost > b.cost) {
    //             return 1;
    //           }
    //           if (a.cost < b.cost) {
    //             return -1;
    //           }
    //           // a must be equal to b
    //           return 0;
    //       });
    //   }
}

export default Filtros;