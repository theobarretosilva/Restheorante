import './SubSecoes.css'
import PropTypes from 'prop-types'
import { ListaCards } from '../ListaCards/ListaCards'

export const SubSecoes = ({ produtos, subSecao }) => {
    const produtosFiltrados = produtos.filter((prod) => prod.subSecao === subSecao);

    return (
        <div>
            <div>
                <h3>{subSecao}</h3>
                <hr />
            </div>

            <ListaCards produtos={produtosFiltrados} />
        </div>
    );
};

SubSecoes.propTypes = {
    produtos: PropTypes.array.isRequired,
    subSecao: PropTypes.string,
};