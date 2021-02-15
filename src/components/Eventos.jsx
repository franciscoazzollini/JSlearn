import React, {Fragment, useState} from 'react'

const Eventos = () => {

    const string1 = 'Texto desde estado'  
    const string2 = 'Texto desde estado 2'  
    const string3 = 'Texto desde estado 3' 
    const[texto,setTexto] = useState(string1)
    const[texto3,setTexto3] = useState(string3)
    const[texto2,setTexto2] = useState(string2)
    
    const eventoClick = () =>{
        console.log('Me diste un Click')
        setTexto(string1 + " Nuevo texto")
        //Para que funcione bien hay que poner "texto" en vez de string1.. el tutorial esta mal
    }

    const eventoClick2 = () =>{
        console.log('Me diste un Click')
        setTexto3(texto3 + " Nuevo texto")
        //Para que funcione bien hay que poner "texto" en vez de string1.. el tutorial esta mal
    }
    
    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}> Click </button>
            <h2>{texto3}</h2>
            <button onClick={() => eventoClick2()}> Click </button>
            <h2>{texto2}</h2>
            <button onClick={() => setTexto2(texto2 + " agregacion")}> Click </button>
        </Fragment>
        
    )
}

export default Eventos
