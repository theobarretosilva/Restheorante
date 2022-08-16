import './SubSecoes.css'
import PropTypes from 'prop-types'
import secoes from '../../secoes.json'
import { Card } from '../Card/Card';

export function SubSecoes ({subSecao}) {
    const subSecoesPP = ["Carnes vermelhas", "Aves", "Peixes e frutos do mar", "Massas", "Risotos"];

    function filtrar(secao){
        if(secoes.pratosPrincipais[secao] === "carnesVermehas"){
            return secao;
        }
    }

    const filtrado = secoes.pratosPrincipais.filter(filtrar);
    if(subSecoesPP.length > 0){
        console.log(filtrado)
        return(
            <h3 className='subSecoes'>{subSecao}</h3>
        )
    }else{
        return;
    }
    
}

SubSecoes.propTypes = {
    subSecoes: PropTypes.shape({
        subSecao: PropTypes.string.isRequired
    })
}