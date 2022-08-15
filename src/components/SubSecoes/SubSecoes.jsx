import './SubSecoes.css'
import PropTypes from 'prop-types'

export const SubSecoes = ({subSecao}) => {
    return(
        <li className='listaSubSecoes'>
            <h3 className='subSecoes'>{subSecao}</h3>
        </li>
    )
}

SubSecoes.propTypes = {
    subSecoes: PropTypes.shape({
        subSecao: PropTypes.string.isRequired
    })
}