import './Card.css'

import PropTypes from 'prop-types'

export const Card = ({ produto }) => (

    <div className='card'>
        <img className='img' src={produto.img} alt={produto.descricaoImg} />
        <h5 className='nome'>{produto.nomePrato}</h5>
        <p className='descricao'>{produto.descricaoPrato}</p>
        <p className='tempo'>{produto.tempoPreparo}</p>
        <p className='preco'>{produto.preco}</p>
    </div>
    
)

Card.propTypes = {
    produto: PropTypes.shape({
        img: PropTypes.string.isRequired,
        descricaoImg: PropTypes.string.isRequired,
        nomePrato: PropTypes.string.isRequired,
        descricaoPrato: PropTypes.string.isRequired,
        tempoPreparo: PropTypes.string.isRequired,
        preco: PropTypes.string.isRequired,
    })
}