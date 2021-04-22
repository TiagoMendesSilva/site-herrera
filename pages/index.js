import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>HOME</h1>
            <h2>Teste</h2>
            <contador /> 
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick = {adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home