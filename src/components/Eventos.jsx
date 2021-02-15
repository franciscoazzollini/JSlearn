import React, {Fragment, useState} from 'react'

const Eventos = () => {

    const string1 = 'Texto desde estado'  
    const[texto,setTexto] = useState(string1)
    
    const eventoClick = () =>{
        console.log('Me diste un Click')
        setTexto(string1 + " Nuevo texto")
    }
    
    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}> Click </button>
        </Fragment>
        
    )
}

export default Eventos
