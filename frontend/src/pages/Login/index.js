import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
        event.preventDefault() // não recarrega a págica que é o padrão
    
        const response = await api.post('/sessions', { email })
    
        const { _id } = response.data;
    
        localStorage.setItem('user', _id) //salva na local storage

        history.push('./dashboard') // muda pra rota ./dashboard
    }

    return (    
        <>
        <p>
        Encontre os melhores butecos pra você tomar uma cangibrina
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            
            <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={ email }
            onChange={event => setEmail(event.target.value)}/>

            <button type="submit" className="btn">Entrar</button>
        </form>
        </>
    )
}