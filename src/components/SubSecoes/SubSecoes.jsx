import './SubSecoes.css'

import PropTypes from 'prop-types'

export const SubSecoes = ({subSecoes: {subSecao}}) => {
    return <h3 className='subSecoes'>{subSecao}</h3>
}

SubSecoes.propTypes = {
    subSecoes: PropTypes.shape({
        subSecao: PropTypes.string.isRequired
    })
}