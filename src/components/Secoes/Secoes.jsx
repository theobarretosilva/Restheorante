import { SubSecoes } from "../SubSecoes/SubSecoes";
import { ListaCards } from "../ListaCards/ListaCards";
import "./Secoes.css";
import PropTypes from 'prop-types'
import secoes from '../../secoes.json'

export const Secoes = ({ nome, produtos, subSecoes }) => {
  return (
    <div className="secoesCards">
      <div>
        <h2 className="nomeSecao">{nome}</h2>
        <hr />
      </div>
    
      {subSecoes?.lenght > 0 ? (
        subSecoes.map((sub, index) => <SubSecoes key={index} produtos={produtos} subSecao={sub} />)
      ) : (
        <ListaCards produtos={produtos} />
      )}
    </div>
  );
};

Secoes.propTypes = {
  nome: PropTypes.string.isRequired,
  produtos: PropTypes.array.isRequired,
  subSecoes: PropTypes.arrayOf(PropTypes.string),
};