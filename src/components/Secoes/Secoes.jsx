import { SubSecoes } from "../SubSecoes/SubSecoes";
import { ListaCards } from "../ListaCards/ListaCards";
import "./Secoes.css";
import PropTypes from 'prop-types'

const subSecoesPP = ["Carnes vermelhas", "Aves", "Peixes e frutos do mar", "Massas", "Risotos"];
const subSecoesB = ["Sem àlcool", "Vinhos", "Drinks", "Cervejas"];

export const Secoes = ({nome, produtos, subSecoes}) => {
  return (
    <div className="secoesCards">
      <div>
        <h2 className="nomeSecao">{nome}</h2>
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