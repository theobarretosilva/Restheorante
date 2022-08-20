import './SubSecoes.css'
import PropTypes from 'prop-types'
import { ListaCards } from '../ListaCards/ListaCards'

export const SubSecoes = ({ produtos, subSecao }) => {
    const produtosFiltrados = produtos.filter((prod) => prod.secao === subSecao);

    return (
        <div>
            <div>
                <h3>{subSecao}</h3>
            </div>

            <ListaCards produtos={produtosFiltrados} />
        </div>
    );
};

SubSecoes.propTypes = {
    produtos: PropTypes.array.isRequired,
    subSecao: PropTypes.string,
};