import './SubSecoes.css'
import PropTypes from 'prop-types'
import secoes from '../../secoes.json'
import { Card } from '../Card/Card';

export function SubSecoes ({subSecao}) {
    const subSecoesPP = ["Carnes vermelhas", "Aves", "Peixes e frutos do mar", "Massas", "Risotos"];
    if(subSecoesPP.length > 0){
        return(
            <h3 className='subSecoes'>{subSecao}</h3>
        )
    }
    
}

SubSecoes.propTypes = {
    subSecoes: PropTypes.shape({
        subSecao: PropTypes.string.isRequired
    })
}