import PropTypes from 'prop-types'

import { Card } from '../Card/Card'

export const ListaCards = ({ produtos }) => (
    <ul>
        {produtos.map((produto) => (
            <li key={produto.nomePrato}>
                <Card produto={produto} />
            </li>
        ))}
    </ul>
);

ListaCards.propTypes = {
    produtos: PropTypes.array.isRequired,
};