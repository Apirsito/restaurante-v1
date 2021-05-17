import React from 'react';
import fondo from "../assets/img/fondo.png"
const Fondo = () => {
    return (
        <div className="fondo">
             
             <img src={fondo} alt="fondo" className="fondo__img" /> 
            
             <div className="fondo__blur">
                 

             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Ingresar
</button>


             </div>
        </div>
    );
};

export default Fondo;