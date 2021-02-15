import React from 'react'

const Variables = () => {

    const saludo ='Hola desde constante'
    const imagen1 = 'https://i.pinimg.com/originals/94/c5/30/94c530087c8a95c4fb180fb08edbd394.jpg'
    return (
        <div>
            <h2>Nuevo componente {saludo} </h2>
            <img src={imagen1} alt=""/>
           
        </div>
    )
}

export default Variables
