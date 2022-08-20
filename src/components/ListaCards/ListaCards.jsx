import PropTypes from 'prop-types'

import { Card } from '../Card/Card'

export const ListaCards = ({ produtos }) => (
    <ul>
        {produtos.map((produto) => (
            <li key={produto.index}>
                <Card card={produto} />
            </li>
        ))}
    </ul>
);

ListaCards.propTypes = {
    produtos: PropTypes.array.isRequired,
};