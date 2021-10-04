import {Link} from 'react-router-dom'

export default function Invalid(){
    return(
        <>
        <h1>Essa Pagina não existe</h1>
        <Link for='/'>Voltar ao inicar</Link>
        </>
    )
}