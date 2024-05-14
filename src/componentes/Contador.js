import React from 'react';
import '../css/contador.css';

function Contador({ contador }){
    return(
        <div className='contador'>
            {contador}
        </div>
    );   
}

export default Contador;