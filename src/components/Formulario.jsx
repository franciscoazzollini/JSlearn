import React, { useState } from 'react'

const Formulario = () => {

    const[fruta,setFruta] = React.useState('')
    const[descripcion,setDescripcion] = React.useState('')
    
    const estadoInicial = []
    const[lista, setLista] = useState(estadoInicial)
    const[contador, setContador]=useState(1)

    const guardarDatos = (e)=>{
        e.preventDefault()
       

        if (!fruta.trim()) {
            console.log('esta vacio fruta')            
            return
        }

        if (!descripcion.trim()) {
            console.log('esta vacio descripcion')            
            return
        }
        console.log('procesando datos...'+ fruta + " "+ descripcion)

        setLista([
            ...lista,
            {id:contador , fruta: fruta, descripcion: descripcion}
            
        ])
        setContador(contador+1)

        e.target.reset()
        
        setFruta('')
        setDescripcion('')
        
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value)}
                />                
                <input 
                    type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>

                <hr/>
                <h2>Listas</h2>
                
            </form>

            <ul>
                {
                    lista.map( (item, index) => (
                        <li key={item.id}>
                            {item.fruta} - {item.descripcion} 
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Formulario
