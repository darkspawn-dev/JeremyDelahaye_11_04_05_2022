
import '../styles/Error404.css'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            
        <div class="404">
            <h1>404</h1>
            <p class="error">
             Oups! La page que vous demandez n'existe pas.
            </p> 
        </div>

        <Link class="linkbottom" to="/">Retourner sur la page d'accueil</Link>
       </div>
    )
}

export default Error404;